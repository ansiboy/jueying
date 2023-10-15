import { PropertyEditorInfo } from "./editor"

export type ComponentEditors = {
    [typeName: string]: PropertyEditorInfo<any>[]
}

/** 组件类的静态成员 */
export interface ComponentStatic {
    typeName: string;
}