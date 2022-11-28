import { ComponentData, PageData } from "maishu-jueying-core";

/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
export class PageDataTravel {
    private pageData: PageData
    constructor(pageData: PageData) {
        this.pageData = pageData
    }

    each(callback: (componentData: ComponentData | string) => void) {
        let stack: (ComponentData | string)[] = [...(this.pageData.children || [])]
        let componentData = stack.pop()
        while (componentData != null) {

            callback(componentData)
            if (typeof componentData == "string")
                continue

            let children = componentData.children || []
            stack.push(...children)

            componentData = stack.pop()
        }

    }
}