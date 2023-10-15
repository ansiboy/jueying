import type { PropertyEditorInfo } from "maishu-jueying/out";
import type { Props as ImageProps } from "../components/image"
import { TextEditor } from "./common/text-editor";



let editors: PropertyEditorInfo<ImageProps>[] = [
    { propertyName: "url", editorType: TextEditor, displayName: "链接" }
]

export default editors



// let URL: keyof Image["props"] = "url"
// Component.setPropEditor({
//     componentType: "Image",
//     editorType: TextEditor,
//     propName: URL
// })

