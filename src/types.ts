import * as React from "react"
import { PropEditorProps } from "./design/property-editor"

export type ComponentEditors = {
    [typeName: string]: { [propertyName: string]: React.ComponentClass<PropEditorProps<any>> | React.FC<PropEditorProps<any>> }
}