import { ComponentTypes } from "maishu-jueying-core/out/types"
type ComponentModule = { default: ComponentTypes[0] }
export type ComponentsConfig = {
    [componentName: string]: {
        type?: Promise<ComponentModule>
        displayName?: string
        renderSize?: "server" | "client" | "both"
        icon?: string
        group?: string,
        editor: Promise<any>,
        design?: number | Promise<ComponentModule>
    }
}