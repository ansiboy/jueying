import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { PageDesigner, ComponentDiagram, ComponentPanel, PageData, Component, ComponentClass, defaultTypes } from "../src"
import { createComponentsConfig } from "./demo/src/components-config"
import { JSDOM, text } from "./common"

let Page = defaultTypes.runtime.Page;

test("ComponentPanel 创建测试", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let helloWorld = text("hello world")
    let pageData1: PageData = {
        id: "simple", type: defaultTypes.names.Page, props: {},
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] }
        ]
    }

    let jsdom = new JSDOM()
    let container = jsdom.window.document.createElement("div")
    let root = ReactDOM.createRoot(container)
    let componentPanel: ComponentPanel
    let componentsConfig = createComponentsConfig()
    let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
        root.render(<PageDesigner pageData={pageData1} componentsConfig={componentsConfig}
            ref={e => {
                if (!e) return
                resolve(e)
            }}>
            <ComponentDiagram />
            <ComponentPanel ref={e => componentPanel = e || componentPanel} />
        </PageDesigner>)
    })


})

