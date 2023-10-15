import { PropertyEditorInfo } from "../../../../src";
import type Image from "../components/image"
import { TextEditor } from "./common/text-editor";



let editors: PropertyEditorInfo<Image["props"]>[] = [
    { propertyName: "url", editorType: TextEditor, displayName: "链接" }
]

export default editors



// let URL: keyof Image["props"] = "url"
// Component.setPropEditor({
//     componentType: "Image",
//     editorType: TextEditor,
//     propName: URL
// })

