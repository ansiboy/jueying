import { ComponentDiagram, componentTypeNames, PageDesigner } from "../out"
import { DesignPage } from "../out/design/components"
import { createComponentsConfig } from "./demo/src/components-config"
import * as pageDatas from "./demo/page-datas"
import React from "react"
import { designerUpdateFinish, JSDOM } from "./common"
import ReactDOM from "react-dom/client"
import Image from "./demo/src/components/image"

describe("PageDesigner 测试", function () {

    test("page-designer 测试 loadComponentTypes 方法", async function () {

        let componentTypesToLoad: string[] = []
        let stack = [...pageDatas.simple.children]
        let componentData = stack.pop()
        while (componentData) {
            componentTypesToLoad.push(componentData.type)
            if (componentData.children) {
                componentData.children.forEach(c => {
                    if (typeof c != "string")
                        stack.push(c)
                })
            }
            componentData = stack.pop()
        }

        let componentsConfig = createComponentsConfig()
        let componentTypes = await PageDesigner.loadComponentTypes(componentTypesToLoad, componentsConfig)
        expect(componentTypes || null).not.toBeNull()
        componentTypesToLoad.forEach(c => {
            expect(componentTypes[c]).not.toBeUndefined()
        })


    })

    test("page-designer 测试组件类型加载", async function () {

        // let component = renderer.create(<PageDesigner pageData={pageDatas.simple} componentsConfig={componentsConfig} />)
        // let pageDesigner = component.getInstance() as any as PageDesigner
        // expect(pageDesigner).not.toBeNull()

        // let componentTypes = pageDesigner.componentTypes
        // let typeNames = Object.keys(componentTypes)
        // expect(typeNames.length).toEqual(0)

        // await componentUpdateFinish(pageDesigner)

        // componentTypes = pageDesigner.componentTypes
        // typeNames = Object.keys(componentTypes)
        // expect(typeNames.length).toBeGreaterThan(0)

    })

    test("page-designer 测试组件类型加载", async function () {

        let jsdom = new JSDOM()
        let container = jsdom.window.document.createElement("div")
        let root = ReactDOM.createRoot(container)
        let componentsConfig = createComponentsConfig()
        let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
            root.render(<PageDesigner pageData={pageDatas.simple} componentsConfig={componentsConfig}
                ref={e => {
                    if (!e) return
                    resolve(e)
                }}>
                <ComponentDiagram />
            </PageDesigner>)
        })

        expect(pageDesigner).not.toBeNull()

        await designerUpdateFinish(pageDesigner)

        let componentTypes = pageDesigner.componentTypes
        let typeNames = Object.keys(componentTypes)
        expect(typeNames.length).toBeGreaterThan(0)

        let imageTypeName = typeNames.filter(n => componentTypes[n] == Image)[0]
        expect(imageTypeName).not.toBeUndefined()
        let componentEditors = pageDesigner.state.componentEditors[imageTypeName]
        expect(componentEditors).not.toBeUndefined()
    })

    test("loadComponentTypes 设计组件的加载", async function () {
        let componentsConfig = createComponentsConfig()
        let compoenntTypes = await PageDesigner.loadComponentTypes([componentTypeNames.page], componentsConfig)
        let pageType = compoenntTypes[componentTypeNames.page]
        expect(pageType).not.toBeUndefined()
        expect(pageType).toEqual(DesignPage)
    })
})

