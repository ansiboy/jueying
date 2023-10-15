import * as React from "react";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { errors } from "../errors";
import { Component, ComponentData, ComponentTypes, parsePageData } from "../runtime";
import { DesignerContext } from "../designer";
import { PageDataTravel } from "../utility";
import { ComponentClass } from "../runtime/types";

let designComponentTypes: ComponentTypes = {};
// designComponentTypes[componentTypeNames.page] = DesignPage;
// designComponentTypes[componentTypeNames.placeHolder] = DesignComponentPlaceHolder;

export class DesignComponent {
    static get types() {
        return designComponentTypes;
    }

    static get typeNames() {
        return Component.typeNames;
    }

    /** 创建设计时元素 */
    static createElement(type: ComponentTypes[0], props: any | null, ...children: Array<any>) {
        if (!type) throw errors.argumentNull("type");
        if (typeof type == "string" || !type.typeName) {
            return React.createElement(type, props, ...children);
        }

        let id = props?.id;
        if (!id) {
            throw errors.argumentFieldNull("id", "props")
        }

        let typeName = type.typeName;
        type = DesignComponent.types[typeName] || type;

        return <DesignerContext.Consumer key={id}>
            {designerArgs => {
                if (designerArgs == null) {
                    throw errors.contextArgumentNull();
                }

                return <DesignComponentContext.Consumer>
                    {parentArgs => {
                        let componentData = PageDataTravel.findComponent(designerArgs.designer.pageData, id);
                        if (!componentData) {
                            componentData = { id, children: [], props: { id }, type: typeName };
                            console.assert(parentArgs != null, 'design component parent context is null.');
                            console.assert(parentArgs?.componentData != null, 'parent component data is null.');
                            let parentComponentData = parentArgs?.componentData as ComponentData;
                            parentComponentData.children.push(componentData);
                        }


                        let componentConfig = designerArgs.designer.componentsConfig
                        if (!componentConfig)
                            throw new Error(`Component config is null.`)

                        let componentTypes = designerArgs.designer.componentTypes

                        let value: DesignComponentContextValue = {
                            designer: designerArgs.designer, componentTypes, componentConfig, componentData,
                            parent: parentArgs
                        }


                        return <DesignComponentContext.Provider value={value}>
                            {React.createElement(type, props, ...children)}
                        </DesignComponentContext.Provider>
                    }}
                </DesignComponentContext.Consumer>
            }}
        </DesignerContext.Consumer>
    }

    static register(type: ComponentClass) {
        if (!type.typeName) {
            throw new Error(`Component type name is null or empty.`);
        }
        designComponentTypes[type.typeName] = type;
        return type;
    }

    static parse(componentData: ComponentData, componentTypes: ComponentTypes) {
        componentTypes = Object.assign({}, componentTypes, designComponentTypes);
        return parsePageData(componentData, componentTypes, DesignComponent.createElement)
    }

}