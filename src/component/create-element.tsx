import { DesignerContext, DesignerContextValue } from "../design/page-designer";
import * as React from "react";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { DesignBehavior } from "../design/design-behavior";
import { elementFactoryName } from "../common";

const createElement = (type: any, props: any, ...children: Array<any>) => {
    let props1: any = {}
    if (props)
        props1 = { key: props.id || props.key }

    return React.createElement(DesignComponentContext.Consumer, props1, ((args: DesignComponentContextValue) => {
        debugger
        let isDesigntime = args != null
        if (!isDesigntime) {
            return React.createElement(type, props, ...children)
        }
        debugger
        let designBehavior = typeof args.componentConfig.design == "number" ? args.componentConfig.design : DesignBehavior.default
        let disableClick = (designBehavior & DesignBehavior.disableClick) == DesignBehavior.disableClick
        if (disableClick) {
            delete (props as React.DOMAttributes<any>).onClick
        }

        return React.createElement(type, props, ...children)
    }) as any)
}

if (typeof window === "undefined") {
    global[elementFactoryName] = createElement
}
else {
    window[elementFactoryName] = createElement
}