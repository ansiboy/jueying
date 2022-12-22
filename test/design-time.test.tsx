import { Page, PageData } from "../out/runtime"
import { parseDesigntimeComponentData } from "../out/design/parse-design-component-data"
import { PageDesigner } from "../out"
import { createComponentsConfig } from "./demo/src/components-config"

describe("设计时测试", function () {

    test("Page 组件为 DesignPage", async function () {

        let pageData1: PageData = {
            id: "simple", type: Page.typeName, props: {},
            children: [

            ]
        }

        let componentsConfig = createComponentsConfig()
        let compoenntTypes = await PageDesigner.loadComponentTypes([], componentsConfig)
        let element = parseDesigntimeComponentData(pageData1, compoenntTypes)
    })

})