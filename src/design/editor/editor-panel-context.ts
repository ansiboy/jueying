import * as React from "react"

export type PropertyEditor = {
    /** 用于对编辑器进行分组，方便查看各个属性 */
    group: string,
    /** 属性名称 */
    prop: string,
    /** 属性显示名称 */
    displayName: string,
    /** 属性编辑器 */
    editor: React.ReactElement<any>,
};

export type EditPanelContextValue = {
    editors: PropertyEditor[]
};

export let EditPanelContext = React.createContext<EditPanelContextValue | null>(null)