import { ComponentTypes } from "maishu-jueying-core/out/types"
export type ComponentsConfig = {
    [componentName: string]: {
        type: Promise<{ default: ComponentTypes[0] }>
        displayName?: string
        renderSize?: "server" | "client" | "both"
        icon?: string
        group?: string,
        editor: Promise<any>,
    }
}