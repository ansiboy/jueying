import { ValidateField } from "maishu-dilu/out/formValidator";
import { ComponentData } from "../component";
import React, { ComponentClass, FC } from "react";

// /** 组件属性编辑器 */
// export type ComponentPropertyEditors<T extends React.Component> = {
//     [key in keyof T["props"]]?: {
//         displayName?: string
//         editor: ComponentClass<PropertyEditorProps<any>> | FC<PropertyEditorProps<any>>
//     }
// }

export interface PropertyEditorProps<T> {
    value: T,
    updateComponentProp: (value: T) => void,

    /** 该编辑器所编辑的控件 */
    editComponents: ComponentData[],
}

// export type ComponentEditors = {
//     [typeName: string]: PropertyEditorInfo<any>[]
// }

export interface PropertyEditorInfo<T = any> {
    propertyName: keyof T
    displayName?: string,
    editorType: React.ComponentClass<PropertyEditorProps<any>> | React.FC<PropertyEditorProps<any>>,//PropEditorConstructor,
    group?: string,
    defaultValue?: any,
    validation?: Omit<ValidateField, "name">,
}

export interface EditorProps extends React.ComponentProps<any> {
    empty: string | JSX.Element,
    customRender?: (editComponents: ComponentData[], items: PropertyEditorInfo[]) => JSX.Element
}
