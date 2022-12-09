import { PropertyEditorInfo } from "../../../../out";
import TextBox, { Props } from "../components/text-box";
import { strings } from "../strings";
import { TextEditor } from "./common/text-editor";

let editors: PropertyEditorInfo<Props>[] = [
    { propertyName: "text", editorType: TextEditor, displayName: strings.text }
]

export default editors