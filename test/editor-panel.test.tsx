import React from "react"
import ReactDOM from "react-dom/client"
import { ComponentDiagram, ComponentPanel, EditorPanel, PageDesigner, EditorGroup, classNames, ComponentStatus, PageData, Component, ComponentClass } from "../src"
// import { Page } from "../src/runtime/components/page"
import { designerUpdateFinish, JSDOM, text } from "./common"
import { createComponentsConfig, typeNames } from "./demo/src/components-config"
import Image from "./demo/src/components/image"
import { TextEditor } from "./demo/src/editors/common/text-editor"
import imageEditors from "./demo/src/editors/image"

let Page = Component.types[Component.typeNames.page] as ComponentClass;

test("editor panel 检查元素", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let imageProps: Image["props"] = { url: "https://cbu01.alicdn.com/img/ibank/O1CN01ot1TmW2Cl0MZzHhIL_!!2838728513-0-cib.jpg" }

    let helloWorld = text("hello world")
    let pageData1: PageData = {
        id: "simple", type: Page.typeName, props: {},
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] },
            { id: ids.image1, type: typeNames.image, props: imageProps, status: ComponentStatus.selected, children: [] }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let componentsConfig = createComponentsConfig()
    let editorPanel: EditorPanel
    let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
        root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
            ref={e => {
                if (!e) return
                resolve(e)
            }}>
            <ComponentDiagram />
            <ComponentPanel />
            <EditorPanel ref={e => editorPanel = e || editorPanel}>
                <EditorGroup />
            </EditorPanel>
        </PageDesigner>)
    })

    await designerUpdateFinish(pageDesigner)

    expect(pageDesigner.componentEditors || null).not.toBeNull()
    let editorPanelElement = container.querySelector(`.${classNames.editorPanel}`) as HTMLElement
    expect(editorPanelElement || null).not.toBeNull()

})

test("editor panel 单个选择中图片编辑器", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let imageProps: Image["props"] = { url: "https://cbu01.alicdn.com/img/ibank/O1CN01ot1TmW2Cl0MZzHhIL_!!2838728513-0-cib.jpg" }

    let helloWorld = text("hello world")
    let pageData1: PageData = {
        id: "simple", type: Page.typeName, props: {},
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] },
            { id: ids.image1, type: typeNames.image, props: imageProps, status: ComponentStatus.selected, children: [] }
        ]
    }

    let componentsConfig = createComponentsConfig()
    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let editorPanel: EditorPanel = null as any
    let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
        root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
            ref={e => {
                if (!e) return
                resolve(e)
            }}>
            <ComponentDiagram />
            <ComponentPanel />
            <EditorPanel ref={e => editorPanel = e || editorPanel}>
                <EditorGroup />
            </EditorPanel>
        </PageDesigner>)
    })

    await designerUpdateFinish(pageDesigner)

    let editors = EditorPanel.getEditors(pageDesigner)
    expect(editors || null).not.toBeNull()
    expect(editors.length).toBeGreaterThan(0)
    expect(editors.length).toEqual(imageEditors.length)
    expect(editorPanel).not.toBeNull()

    let input = editorPanel.element.querySelector(`.${TextEditor.inputClassName}`) as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.value).toEqual(imageProps.url)

})

test("editor panel 切换选中的图片", async function () {

    let ids = {
        image1: "image1",
        image2: "image2",
        div1: "div1",
        div2: "div2"
    }

    let image1Props: Image["props"] = { url: "https://cbu01.alicdn.com/img/ibank/O1CN01ot1TmW2Cl0MZzHhIL_!!2838728513-0-cib.jpg" }
    let image2Props: Image["props"] = {} as Image["props"]
    let helloWorld = text("hello world")
    let pageData1: PageData = {
        id: "simple", type: Page.typeName, props: {},
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] },
            { id: ids.image1, type: typeNames.image, props: image1Props, status: ComponentStatus.selected, children: [] },
            { id: ids.image2, type: typeNames.image, props: image2Props, children: [] }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let editorPanel: EditorPanel = null as any
    let componentsConfig = createComponentsConfig()
    let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
        root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
            ref={e => {
                if (!e) return
                resolve(e)
            }}>
            <ComponentDiagram />
            <ComponentPanel />
            <EditorPanel ref={e => editorPanel = e || editorPanel}>
                <EditorGroup />
            </EditorPanel>
        </PageDesigner>)
    })

    await designerUpdateFinish(pageDesigner)

    let editors = EditorPanel.getEditors(pageDesigner)
    expect(editors || null).not.toBeNull()
    expect(editors.length).toBeGreaterThan(0)
    expect(editors.length).toEqual(imageEditors.length)
    expect(editorPanel).not.toBeNull()

    let input = editorPanel.element.querySelector(`.${TextEditor.inputClassName}`) as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.value).toEqual(image1Props.url)

    pageDesigner.selectComponent(ids.image2)
    await designerUpdateFinish(pageDesigner)

    expect(input).not.toBeNull()
    expect(input.value || "").toEqual("")
})