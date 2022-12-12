import { PropertyEditorInfo } from "./editor"
import { ComponentTypes } from "maishu-jueying-core/out/types"
type ComponentModule = { default: ComponentTypes[0] }
export type ComponentsConfig = {
    [typeName: string]: {
        type?: Promise<ComponentModule>
        displayName?: string
        renderSide?: "server" | "client" | "both"
        icon?: string
        group?: string,
        editor: Promise<{ default: PropertyEditorInfo<any>[] }>,
        design?: number | Promise<ComponentModule>
    }
}