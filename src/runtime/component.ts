import React from "react";
import { parsePageData } from "./parse-component-data";
import { ComponentClass, ComponentData, ComponentTypes } from "./types";
import { defaultComponentTypes } from "./default-types";
import { defaultTypeNames } from "./default-types";

// let componentTypeNames = defaultTypeNames;
let componentTypes: ComponentTypes = {};
export class Component {
    static register(type: ComponentClass) {
        if (!type.typeName) {
            throw new Error(`Component type name is null or empty.`);
        }

        componentTypes[type.typeName] = type;
        return type;
    }

    static defaultComponentTypes = defaultComponentTypes;

    static get types() {
        return this.defaultComponentTypes;
    }

    static parse(componentData: ComponentData, componentTypes: ComponentTypes) {
        return parsePageData(componentData, componentTypes, React.createElement);
    }

    static get typeNames() {
        return defaultTypeNames;
    }

}