import type { PageData } from "../src/runtime"
import { PageDesigner, DesignComponent, Component } from "../src"
import { createComponentsConfig } from "./demo/src/components-config"
// import { DesignComponent, DesignPage } from "../src/design"

describe("设计时测试", function () {

    test("Page 组件为 DesignPage", async function () {

        let pageData1: PageData = {
            id: "simple", type: Component.typeNames.page, props: {},
            children: [

            ]
        }

        let componentsConfig = createComponentsConfig()
        let compoenntTypes = await PageDesigner.loadComponentTypes([], componentsConfig)
        let element = DesignComponent.parse(pageData1, compoenntTypes)
        // expect(element.type).toBe(DesignPage);

    })

})