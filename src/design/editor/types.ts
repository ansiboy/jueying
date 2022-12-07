import { ComponentData } from "maishu-jueying-core/out/types";
import React, { ComponentClass, FC } from "react";

/** 组件属性编辑器 */
export type ComponentPropertyEditors<T extends React.Component> = {
    [key in keyof T["props"]]?: {
        displayName?: string
        editor: ComponentClass<PropertyEditorProps<any>> | FC<PropertyEditorProps<any>>
    }
}

export interface PropertyEditorProps<T> {
    value: T,
    updateComponentProp: (value: T) => void,

    /** 该编辑器所编辑的控件 */
    editComponents: ComponentData[],
}