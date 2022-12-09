import { PropertyEditorInfo } from "./design/editor"

export type ComponentEditors = {
    [typeName: string]: PropertyEditorInfo<any>[]
}