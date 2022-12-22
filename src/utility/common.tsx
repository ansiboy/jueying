import { ComponentData, componentTypes as defaultComponentTypes } from "../runtime"
import React from "react"

export let proptDisplayNames: { [prop: string]: string } = {
}

export let groupDisplayNames: { [prop: string]: string } = {
}

export function isHTMLComponent(componentData: ComponentData) {
    // 全小写为 HTML 组件
    return componentData.type.toLowerCase() == componentData.type
}

export function childrenNodeToArray(children: React.ReactNode | undefined): React.ReactElement<any, any>[] {
    if (!children)
        return []

    if (Array.isArray(children))
        return children

    return [children as React.ReactElement]
}

export const elementFactoryName = "h"