import { PropertyEditorInfo } from "./editor"
import { ComponentTypes } from "./runtime"
type ComponentModule = { default: ComponentTypes[0] }
export type ComponentsConfig = {
    [typeName: string]: {
        type?: Promise<ComponentModule>
        displayName?: string
        renderSide?: "server" | "client" | "both"
        icon?: string
        group?: string
        editor?: Promise<{ default: PropertyEditorInfo<any>[] }>
        design?: number | Promise<ComponentModule>
        /** 是否隐藏，"是" 该组件不在工具栏显示 */
        hidden?: boolean
    }
}