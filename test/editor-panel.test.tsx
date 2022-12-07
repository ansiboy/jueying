import { ComponentStatus, PageData } from "maishu-jueying-core/out/types"
import React from "react"
import ReactDOM from "react-dom/client"
import { ComponentDiagram, ComponentPanel, EditorPanel, PageDesigner, EditorGroup, classNames } from "../out"
import { designerUpdateFinish, JSDOM } from "./common"
import { componentsConfig, typeNames } from "./demo/src/components-config"
import Image from "./demo/src/components/image"

test("editor panel test", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let imageProps: Image["props"] = { url: "https://cbu01.alicdn.com/img/ibank/O1CN01ot1TmW2Cl0MZzHhIL_!!2838728513-0-cib.jpg" }

    let helloWorld = "hello world"
    let pageData1: PageData = {
        id: "simple",
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] },
            { id: ids.image1, type: typeNames.image, props: imageProps, status: ComponentStatus.selected }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
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
    console.log(editorPanelElement.innerHTML)

})