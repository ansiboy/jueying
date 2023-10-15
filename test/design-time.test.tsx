import { Page, PageData } from "../src/runtime"
import { PageDesigner } from "../src"
import { createComponentsConfig } from "./demo/src/components-config"
import { DesignComponent } from "../src/design"
import React from "react";

describe("设计时测试", function () {

    test("Page 组件为 DesignPage", async function () {

        let pageData1: PageData = {
            id: "simple", type: Page.typeName, props: {},
            children: [

            ]
        }

        let componentsConfig = createComponentsConfig()
        let compoenntTypes = await PageDesigner.loadComponentTypes([], componentsConfig)
        let element = DesignComponent.parse(pageData1, compoenntTypes)
    })

})