import { errors } from "../errors"
import { PageData, parsePageData } from "../runtime"
import type { ComponentData, ComponentProps, ComponentTypes } from "../runtime"
import React from "react"
import { DesignerContext } from "../designer"
import { PageDataTravel } from "../utility"
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context"
import { DesignBehavior } from "./design-behavior"

export function parseDesigntimeComponentData(componentData: PageData, componentTypes: ComponentTypes) {
    return parsePageData(componentData, componentTypes, createDesigntimeComponent)
}

export function createDesigntimeComponent(type: any, props: any, children: any) {
    let p = props as ComponentProps
    if (!p.id) throw errors.argumentFieldNull("id", "props")

    return <DesignerContext.Consumer key={p.id}>
        {args => {
            if (!args) throw errors.contextArgumentNull()
            let componentData = PageDataTravel.findComponent(args.designer.pageData, p.id)
            if (!componentData)
                throw new Error(`Can not find component data by '${p.id}' in the page data.`)

            let componentConfig = args.designer.componentsConfig
            if (!componentConfig)
                throw new Error(`Component config is null for component type '${componentData.type}'`)

            let componentTypes = args.designer.componentTypes

            let value: DesignComponentContextValue = {
                componentData, componentConfig, designer: args.designer, componentTypes
            }

            let designBehavior = typeof componentConfig.design == "number" ? componentConfig.design : DesignBehavior.default
            return <DesignComponentContext.Provider value={value}>
                {React.createElement(type, props, children)}
            </DesignComponentContext.Provider>
        }}
    </DesignerContext.Consumer>


}