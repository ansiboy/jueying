import { PropertyEditorInfo } from "./editor"

export type ComponentEditors = {
    [typeName: string]: PropertyEditorInfo<any>[]
}