import { errors } from "../errors";
import { ComponentData, PageData } from "../runtime";

/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
export class PageDataTravel {
    private pageData: PageData
    constructor(pageData: PageData) {
        this.pageData = pageData
    }

    each(callback: (componentData: ComponentData, parent: ComponentData | null) => void) {
        PageDataTravel.each(this.pageData, callback)
    }

    static each(componentData: ComponentData, callback: (componentData: ComponentData, parent: ComponentData | null) => void) {
        let stack: { component: ComponentData, parent: ComponentData | null }[] = [{ component: componentData, parent: null }]
        let item = stack.pop()
        while (item != null) {

            callback(item.component, item.parent)
            // if (typeof item != "string") {
            for (let i = 0; i < item.component.children.length; i++) {
                let c = item.component.children[i]
                stack.push({ component: c, parent: item.component })
            }
            item = stack.pop()
        }
    }

    static findComponent(pageData: PageData, componentId: string) {
        if (!pageData) throw errors.argumentNull("pageData")
        if (!componentId) throw errors.argumentNull("componentId")

        let travel = new PageDataTravel(pageData)
        let r: ComponentData | undefined
        travel.each(function (c) {
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

        let travel = new PageDataTravel(pageData)
        let component: ComponentData | null = null
        let parent: ComponentData | null = null
        travel.each(function (c, p) {
            if (typeof c == "string" || component)
                return

            if (componentId == c.id) {
                component = c
                parent = p
            }
        })

        return { component, parent }
    }
}