import { PageDesigner, ComponentDiagram, ComponentPanel, EditorPanel, EditorGroup, PageData, componentTypeNames, ComponentData } from "maishu-jueying/out"
import { componentsConfig, typeNames } from "../components-config"
import "maishu-jueying/out/style"
import Image from "../components/image"
import Button from "../components/button"

export default function HomePage() {
    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2",
        button: "button"
    }

    let imageProps: Image["props"] = { url: "https://cbu01.alicdn.com/img/ibank/O1CN01ot1TmW2Cl0MZzHhIL_!!2838728513-0-cib.jpg" }
    let buttonProps: Button["props"] = { clickedText: "Hello World", text: "Button" }
    let hello = "hello"
    let word = "word"
    let pageData1: ComponentData = {
        id: "simple", type: componentTypeNames.page, props: {},
        children: [
            { id: ids.image1, type: "Image", props: imageProps, children: [word] },
            { id: ids.div1, type: "div", props: {}, children: [hello] },
            { id: ids.div2, type: "div", props: {}, children: [word] },
            { id: ids.button, type: "Button", props: buttonProps, children: [word] }
        ]
    }

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