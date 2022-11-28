import * as React from "react"
import { PropEditorProps } from "./property-editor"

export type ComponentEditors = {
    [typeName: string]: { [propertyName: string]: React.ComponentClass<PropEditorProps<any>> | React.FC<PropEditorProps<any>> }
}