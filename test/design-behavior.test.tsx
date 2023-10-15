import React from "react"
import ReactDOM from "react-dom/client"
import { ComponentData, ComponentDiagram, ComponentsConfig, componentTypeNames, PageDesigner } from "../src"
import { designerUpdateFinish, JSDOM } from "./common"

//TODO: 设计时测试
describe("设计时行为测试", function () {
    test("去除点击事件", async function () {

    })

    test("去除链接", async function () {

    })

    test("实现组件容器", async function () {

        let componentsConfig: ComponentsConfig = {}
        let typeNames = { div: "div" }

        componentsConfig[typeNames.div] = {
            editor: import("./demo/src/editors/div"),
            icon: "glyphicon glyphicon-tag"
        }

        let ids = {
            image1: "image1",
            div1: "div1",
            div2: "div2"
        }

        let pageData: ComponentData = {
            id: "simple", type: componentTypeNames.page, props: {},
            children: [
                { id: ids.div1, type: "div", props: { style: { width: "400px", height: "400px" } }, children: [] }
            ]
        }
        let jsdom = new JSDOM()
        let container = jsdom.window.document.createElement("div")
        let root = ReactDOM.createRoot(container)
        let pageDesigner = await new Promise<PageDesigner>((resolve, reject) => {
            root.render(<PageDesigner pageData={pageData} componentsConfig={componentsConfig}
                ref={e => {
                    if (!e) return
                    resolve(e)
                }}>
                <ComponentDiagram />
            </PageDesigner>)
        })

        expect(pageDesigner || null).not.toBeNull()
        await designerUpdateFinish(pageDesigner)


    })
})