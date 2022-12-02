import { ComponentData } from "maishu-jueying-core"
import { componentTypes as defaultComponentTypes } from "maishu-jueying-core"
import React from "react"

export let constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
}

export let proptDisplayNames: { [prop: string]: string } = {
}

export let groupDisplayNames: { [prop: string]: string } = {
}

export function isCustomComponent(componentData: ComponentData) {
    // 全小写为 HTML 元素，不需要加载
    if (componentData.type.toLocaleLowerCase() == componentData.type)
        return false

    if (defaultComponentTypes[componentData.type])
        return false

    return true
}

export function childrenNodeToArray(children: React.ReactNode | undefined): React.ReactElement<any, any>[] {
    if (!children)
        return []

    if (Array.isArray(children))
        return children

    return [children as React.ReactElement]
}

export const elementFactoryName = "h"