import { errors } from "../errors"
import { parseComponentData } from "../runtime"
import type { ComponentData, ComponentProps, ComponentTypes } from "../runtime"
import React from "react"
import { DesignerContext } from "../designer"
import { PageDataTravel } from "../utility"
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context"

export function parseDesigntimeComponentData(componentData: ComponentData, componentTypes: ComponentTypes) {
    return parseComponentData(componentData, componentTypes, createDesigntimeComponent)
}

function createDesigntimeComponent(type: any, props: any, children: any) {
    let p = props as ComponentProps
    if (!p.id) throw errors.argumentFieldNull("id", "props")

    return <DesignerContext.Consumer>
        {args => {
            if (!args) throw errors.contextArgumentNull()
            let componentData = PageDataTravel.findComponent(args.designer.pageData, p.id)//args.designer.pageData.children.filter(o => o.id == p.id)[0]
            if (!componentData)
                throw new Error(`Can not find component data by '${p.id}' in the page data.`)

            let componentConfig = args.designer.props.componentsConfig[componentData.type]
            if (!componentConfig)
                return React.createElement(type, props, children)

            let value: DesignComponentContextValue = {
                componentData, componentConfig
            }

            return <DesignComponentContext.Provider value={value}>
                {React.createElement(type, props, children)}
            </DesignComponentContext.Provider>
        }}
    </DesignerContext.Consumer>


}