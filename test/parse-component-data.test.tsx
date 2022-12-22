import React from "react"
import { PageDesigner } from "../out"
import { PageData, componentTypeNames, parseComponentData, PageDataParser } from "../out/runtime"
import { PageDataTravel } from "../out/utility"
import { createComponentsConfig } from "./demo/src/components-config"
import { DesignPage } from "../out/design/components"

describe("parse-component-data 函数测试", function () {

    test("简单页面解析", async function () {
        let pageData1: PageData = {
            id: "simple", type: componentTypeNames.page, props: {},
            children: [

            ]
        }

        let typeNames: string[] = []
        PageDataTravel.each(pageData1, (c) => {
            typeNames.push(c.type)
        })

        let componentsConfig = createComponentsConfig()
        let componentTypes = await PageDesigner.loadComponentTypes(typeNames, componentsConfig)
        let e = parseComponentData(pageData1, componentTypes, React.createElement)
        expect(e.type).toEqual(DesignPage)
    })

})