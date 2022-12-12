import { PropertyEditorProps } from "./types";

export interface PropertyEditor {
    propertyName: string,
    displayName: string,
    editor: React.ReactElement<PropertyEditorProps<any>>,
    group: string,

}