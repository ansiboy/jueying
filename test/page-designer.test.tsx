import { Component, ComponentData, ComponentDiagram, DesignComponent, PageDesigner } from "../src"
import { createComponentsConfig, typeNames } from "./demo/src/components-config"
import * as pageDatas from "./demo/page-datas"
import React from "react"
import { designerUpdateFinish, JSDOM } from "./common"
import ReactDOM from "react-dom/client"
import Image from "./demo/src/components/image"
import { PageDataTravel } from "../src/utility"
import type { Props as ColumnsProps } from "./demo/src/components/columns"

let componentTypeNames = Component.typeNames;
let DesignPage = DesignComponent.types[DesignComponent.typeNames.page];
describe("PageDesigner 测试", function () {

    test("page-designer 测试 loadComponentTypes 方法", async function () {

        let pageData = pageDatas.createSimplePageData()
        let componentTypesToLoad: string[] = []
        let stack = [...pageData.children]
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
        let pageData = pageDatas.createSimplePageData()
        let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
            root.render(<PageDesigner pageData={pageData} componentsConfig={componentsConfig}
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

    describe("添加组件测试", function () {

        let jsdom = new JSDOM()
        let container = jsdom.window.document.createElement("div")
        let root = ReactDOM.createRoot(container)
        let componentsConfig = createComponentsConfig()


        test("添加组件到到页面", async function () {
            let pageData = pageDatas.createEmptyPageData()
            let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
                root.render(<PageDesigner pageData={pageData} componentsConfig={componentsConfig}
                    ref={e => {
                        if (!e) return
                        resolve(e)
                    }}>
                    <ComponentDiagram />
                </PageDesigner>)
            })

            let imageComponentData: ComponentData = {
                id: "image1", type: "Image", props: { url: "abc" }, children: []
            }
            pageDesigner.appendComponent(imageComponentData, pageData.id)

            let c = PageDataTravel.findComponent(pageData, imageComponentData.id)
            expect(c).not.toBeUndefined()
        })

        test("添加组件到容器组件", async function () {

            let pageData = pageDatas.createEmptyPageData()
            let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
                root.render(<PageDesigner pageData={pageData} componentsConfig={componentsConfig}
                    ref={e => {
                        if (!e) return
                        resolve(e)
                    }}>
                    <ComponentDiagram />
                </PageDesigner>)
            })

            let columnsProps: ColumnsProps = {
                firstContainerid: "first-container-id",
                secondContainerId: "second-container-id"
            }

            let columnsComponentData: ComponentData = {
                id: "columns1", type: typeNames.columns, props: columnsProps, children: []
            }
            pageDesigner.appendComponent(columnsComponentData, pageData.id)
            let c = PageDataTravel.findComponent(pageData, columnsComponentData.id)
            expect(c).not.toBeUndefined()

            let imageComponentData: ComponentData = {
                id: "image1",
                type: "Image",
                props: { url: "abc" },
                children: [],
            };//DesignComponentPlaceHolder.createComponentData("Image", columnsProps.firstContainerid)
            // imageComponentData.props.url = "abc"

            pageDesigner.appendComponent(imageComponentData, columnsComponentData.id)

            c = PageDataTravel.findComponent(pageData, imageComponentData.id)
            expect(c).not.toBeUndefined()

        })
    })


})

