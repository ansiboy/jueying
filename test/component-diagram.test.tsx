import React from "react"
import ReactDOM from "react-dom/client"
import { PageDesigner, ComponentDiagram, PageData } from "../src"
import { createComponentsConfig, typeNames } from "./demo/src/components-config"
import { designerUpdateFinish, text } from "./common"
import { JSDOM } from "jsdom"
import Image from "./demo/src/components/image"
import Button from "./demo/src/components/button"
import renderer from "react-test-renderer"
import { Page } from "../src/runtime/components/page"
import { DesignComponent } from "../src/design/design-component"
import DesignButton from "./demo/src/designtime/button";

test("ComponentDiagram HTML 元素测试", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let helloWorld = text("hello world")
    let pageData1: PageData = {
        id: "simple", type: Page.typeName, props: {},
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let componentsConfig = createComponentsConfig()
    let root = ReactDOM.createRoot(container)
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
    let div1 = container.querySelector(`#${ids.div1}`) as HTMLElement
    expect(div1).not.toBeNull()
    expect(div1.innerHTML).toEqual(helloWorld.props.value)
})

test("ComponentDiagram 自定义组件测试", async function () {

    let ids = {
        image1: "image1",
    }

    let url = "imageUrl"
    let imageProps: Image["props"] = { url }
    let pageData1: PageData = {
        id: "page-data1", type: Page.typeName, props: {},
        children: [
            { id: ids.image1, type: typeNames.image, props: imageProps, children: [] }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let componentsConfig = createComponentsConfig()
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

    let imageElement = container.querySelector(`#${ids.image1}`) as HTMLImageElement
    expect(imageElement).not.toBeNull()
    expect(imageElement.src).toEqual(url)
})

test("ComponentDiagram 按钮点击", async function () {

    DesignComponent.register(DesignButton, typeNames.button);

    let ids = {
        button1: "button1",
    }

    let clickedText = "clicked"
    let buttonProps: Button["props"] = { clickedText, text: "button", isDesigntime: true }
    let pageData1: PageData = {
        id: "page-data1",
        type: Page.typeName,
        props: {},
        children: [
            { id: ids.button1, type: typeNames.button, props: buttonProps, children: [] }
        ]
    }

    let componentsConfig = createComponentsConfig()
    const component = renderer.create(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}>
        <ComponentDiagram />
    </PageDesigner>)

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
        root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
            ref={e => {
                if (!e) return
                resolve(e)
            }}>
            <ComponentDiagram />
        </PageDesigner>)
    })

    expect(pageDesigner || null).not.toBeNull()
    await designerUpdateFinish(pageDesigner)

    let button = component.root.findAllByType("button")[0]
    expect(button || null).not.toBeNull()
    expect(button.props.onClick || null).toBeNull()
})