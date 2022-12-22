import { ComponentData, ComponentTypes, ElementFactory } from "./types";
import * as React from "react";
import { errors } from "./errors";
import { componentTypes as defaultComponentTypes } from "./components"

export function parseComponentData(componentData: ComponentData, componentTypes: ComponentTypes, createElement: ElementFactory) {
    if (!componentData) throw errors.argumentNull("componentData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");
    if (!componentData.type) {
        throw errors.argumentFieldNull("type", "componentData")
    }

    let isHtmlComponent = componentData.type.toLowerCase() == componentData.type
    let type = isHtmlComponent ? componentData.type : (componentTypes[componentData.type] || defaultComponentTypes[componentData.type]);
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    let childComponentInfos = componentData.children || [];
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map(c => {
            if (typeof c == "string")
                return c;

            return parseComponentData(c, componentTypes, createElement)
        });
    }

    let props = Object.assign({}, componentData.props);
    props.key = props.key || componentData.id;
    props.id = componentData.id;
    return createElement(type, props, children);
}

