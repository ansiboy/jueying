import { PageDesigner, ComponentDiagram, ComponentPanel, EditorPanel, EditorGroup, PageData, componentTypeNames, ComponentData } from "maishu-jueying/out"
import { createComponentsConfig, typeNames } from "../components-config"
import "maishu-jueying/out/style"
import Image from "../components/image"
import Button from "../components/button"
import { text } from "../common"
import Columns from "../components/columns"

export default function HomePage() {
    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2",
        button: "button",
        columns: "columns"
    }

    let imageProps: Image["props"] = { url: "http://shop-image.gemwon.com/image?id=9f8bdf45-294d-41a6-4139-c4d4be98110b" }
    let buttonProps: Button["props"] = { clickedText: "Hello World", text: "Button" }
    let columnsPorps: Columns["props"] = { firstContainerid: "container-1", secondContainerId: "container-2" }
    let hello = text("hello")
    let word = text("word")
    let pageData1: PageData = {
        id: "simple", type: componentTypeNames.page, props: {},
        children: [
            { id: ids.image1, type: "Image", props: imageProps, children: [word] },
            { id: ids.columns, type: "Columns", props: columnsPorps, children: [] },
            { id: ids.div1, type: "div", props: {}, children: [hello] },
            { id: ids.div2, type: "div", props: {}, children: [word] },
            { id: ids.button, type: "Button", props: buttonProps, children: [word] }
        ]
    }

    let componentsConfig = createComponentsConfig()
    return <div className='container'>
        <PageDesigner pageData={pageData1} componentsConfig={componentsConfig}>
            <ComponentPanel />
            <ComponentDiagram />
            <EditorPanel>
                <EditorGroup />
            </EditorPanel>
        </PageDesigner>
    </div>
}