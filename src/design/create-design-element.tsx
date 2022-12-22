import * as React from "react";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { DesignBehavior } from "./design-behavior";
import { constants } from "../common";
import { errors } from "../errors";
import { ComponentPlaceHolder } from "../runtime";
import { DesignComponentPlaceHolder } from "./components/design-component-placeholder";

 const createDesignElement = (type: any, props: any, ...children: Array<any>) => {
    let props1: any = {}
    if (props)
        props1 = { key: props.id || props.key }

    return React.createElement(DesignComponentContext.Consumer, props1, ((args: DesignComponentContextValue) => {
        let isDesigntime = args != null
        if (!isDesigntime) {
            return React.createElement(type, props, ...children)
        }

        let designBehavior = typeof args.componentConfig.design == "number" ? args.componentConfig.design : DesignBehavior.default
        let disableClick = (designBehavior & DesignBehavior.disableClick) == DesignBehavior.disableClick
        if (disableClick) {
            delete (props as React.DOMAttributes<any>).onClick
        }

        if (type == ComponentPlaceHolder) {
            type = DesignComponentPlaceHolder
        }

        return React.createElement(type, props, ...children)
    }) as any)
}

let g: any = typeof window === "undefined" ? global : window
if (g[constants.designComponentFactoryName])
    throw errors.elementFactoryExists()

g[constants.designComponentFactoryName] = createDesignElement
