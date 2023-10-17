import React from "react";
import { parsePageData } from "./parse-component-data";
import { ComponentClass, ComponentData, ComponentTypes } from "./types";

let componentTypeNames = {
    page: "Page",
    container: "Container",
    text: "Text",
}
let componentTypes: ComponentTypes = {};
export class Component {
    static register(type: ComponentClass) {
        if (!type.typeName) {
            throw new Error(`Component type name is null or empty.`);
        }

        componentTypes[type.typeName] = type;
        return type;
    }

    static get types() {
        return componentTypes;
    }

    static parse(componentData: ComponentData, componentTypes: ComponentTypes) {
        return parsePageData(componentData, componentTypes, React.createElement);
    }

    static get typeNames() {
        return componentTypeNames;
    }

}