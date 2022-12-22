import { errors } from "../errors";
import { ComponentData, PageData } from "../runtime";

/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
export class PageDataTravel {
    private pageData: PageData
    constructor(pageData: PageData) {
        this.pageData = pageData
    }

    each(callback: (componentData: ComponentData) => void) {
        PageDataTravel.each(this.pageData, callback)
    }

    static each(componentData: ComponentData, callback: (componentData: ComponentData) => void) {
        let stack: ComponentData[] = [componentData]
        let item = stack.pop()
        while (item != null) {

            callback(item)
            if (typeof item != "string") {
                let children = item.children || []
                stack.push(...children)
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
}