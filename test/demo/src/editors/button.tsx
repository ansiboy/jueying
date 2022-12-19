import { PropertyEditorInfo } from "../../../../out";
import Button from "../components/button";
import { TextEditor } from "./common/text-editor";

let editors: PropertyEditorInfo<Button["props"]>[] = [
    { propertyName: "clickedText", editorType: TextEditor },
    { propertyName: "text", editorType: TextEditor }
]
// clickedText: { editor: TextEditor, displayName: "点击文字" },
// text: { editor: TextEditor, displayName: strings.text }
// }



export default editors