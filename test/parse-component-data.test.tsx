import React from "react"
import { PageDesigner, DesignComponent, Component, PageData, PageDataHelper as PageDataTravel, ComponentDiagram, classNames } from "../src";
import { createComponentsConfig } from "./demo/src/components-config";
import ReactDOM from "react-dom";
import { JSDOM, designerUpdateFinish } from "./common";
import { createRoot } from "react-dom/client";

let componentTypeNames = Component.typeNames;
let DesignPage = DesignComponent.types[Component.typeNames.page];

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

        let componentsConfig = createComponentsConfig();
        let componentTypes = await PageDesigner.loadComponentTypes(typeNames, componentsConfig);
        let jsdom = new JSDOM();
        let element = jsdom.window.document.createElement("div");
        const root = createRoot(element);
        let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
            root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
                ref={e => {
                    if (!e) return
                    resolve(e)
                }}>
                <ComponentDiagram />
            </PageDesigner>)
        })

        await designerUpdateFinish(pageDesigner)
        expect(element.innerHTML.indexOf(classNames.designPage) > 0);
        console.log(element.innerHTML);
    })

    test("容器组件测试", async function () {

        let pageData1: PageData = {
            id: "simple", type: componentTypeNames.page, props: {},
            children: [

            ]
        }


    })

})