import { PageData } from "maishu-jueying-core"
import React from "react"
import ReactDOM from "react-dom/client"
import { PageDesigner, ComponentDiagram, ComponentPanel } from "../out"
import { componentsConfig } from "./demo/src/components-config"
import { JSDOM } from "./common"

test("ComponentPanel 创建测试", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }

    let helloWorld = "hello world"
    let pageData1: PageData = {
        id: "simple",
        children: [
            { id: ids.div1, type: "div", props: {}, children: [helloWorld] }
        ]
    }

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
            <ComponentPanel />
        </PageDesigner>)
    })
})

