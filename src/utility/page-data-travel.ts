import { errors } from "../errors";
import { ComponentData, PageData } from "../runtime";

/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
export class PageDataHelper {

    static each(componentData: ComponentData, callback: (componentData: ComponentData, parent: ComponentData | null) => void) {
        let stack: { component: ComponentData, parent: ComponentData | null }[] = [{ component: componentData, parent: null }]
        let item = stack.pop()
        while (item != null) {

            callback(item.component, item.parent)
            // if (typeof item != "string") {
            let children = item.component.children || [];
            for (let i = 0; i < children.length; i++) {
                let c = children[i]
                stack.push({ component: c, parent: item.component })
            }
            item = stack.pop()
        }
    }

    static findComponent(pageData: PageData, componentId: string) {
        if (!pageData) throw errors.argumentNull("pageData")
        if (!componentId) throw errors.argumentNull("componentId")

        let r: ComponentData | undefined
        this.each(pageData, function (c) {
            if (typeof c == "string" || r)
                return

            if (componentId == c.id)
                r = c
        })

        return r
    }

    static findComponentAndParent(pageData: PageData, componentId: string): { component: ComponentData | null, parent: ComponentData | null } {
        if (!pageData) throw errors.argumentNull("pageData")
        if (!componentId) throw errors.argumentNull("componentId")

        let component: ComponentData | null = null
        let parent: ComponentData | null = null
        this.each(pageData, function (c, p) {
            if (typeof c == "string" || component)
                return

            if (componentId == c.id) {
                component = c
                parent = p
            }
        })

        return { component, parent }
    }

    static generateId(pageData: PageData, typeName: string) {
        let namedComponents: { [key: string]: ComponentData } = {};
        PageDataHelper.each(pageData, (c, p) => {
            namedComponents[c.id] = c
        })

        let num = 0;
        let name: string;
        do {
            num = num + 1;
            name = `${typeName}${num}`;
        } while (namedComponents[name]);

        return name;
    }
}