import { errors } from "../errors";
import { ComponentProps, ElementFactory } from "maishu-jueying-core/out/types";
import { DesignerContext, DesignerContextValue } from "../design/page-designer";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { PageDataTravel } from "../page-data-travel";
import * as React from "react"

export const createComponent: ElementFactory = function (type, props, children) {
    let p = props as ComponentProps
    if (!p.id) throw errors.argumentFieldNull("id", "props")

    return React.createElement(DesignerContext.Consumer, null, ((args: DesignerContextValue) => {
        if (!args) throw errors.contextArgumentNull()
        let componentData = PageDataTravel.findComponent(args.designer.pageData, p.id)//args.designer.pageData.children.filter(o => o.id == p.id)[0]
        if (!componentData)
            throw new Error(`Can not find component data by '${p.id}' in the page data.`)

        let componentConfig = args.designer.props.componentsConfig[componentData.type]
        if (!componentConfig)
            throw new Error(`Can not find component '${componentData.type}' component config.`)

        let value: DesignComponentContextValue = {
            componentData, componentConfig
        }
        return React.createElement(DesignComponentContext.Provider, { value }, React.createElement(type, props, children))
    }) as any)
}