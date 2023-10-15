import React from "react"
import { PageDesigner } from "../src"
import { PageData, componentTypeNames, parsePageData, PageDataParser } from "../src/runtime"
import { PageDataTravel } from "../src/utility"
import { createComponentsConfig } from "./demo/src/components-config"
import { DesignPage } from "../src/design/components"

describe("parse-page-data 函数测试", function () {

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
        let e = parsePageData(pageData1, componentTypes, React.createElement)
        expect(e.type).toEqual(DesignPage)
    })

    test("容器组件测试", async function () {

        let pageData1: PageData = {
            id: "simple", type: componentTypeNames.page, props: {},
            children: [

            ]
        }


    })

})