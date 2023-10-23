import * as React from "react";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { errors } from "../errors";
import type { ComponentData, ComponentTypes } from "../runtime";
import { parsePageData } from "../runtime";
import { DesignerContext } from "../designer";
import { PageDataHelper as PageDataTravel } from "../utility";
import { defaultTypes } from "./default-types";

export class DesignComponent {
    // static get types() {
    //     return defaultTypes;
    // }

    // static get typeNames() {
    //     return Object.keys(defaultTypes);
    // }

    /** 创建设计时元素 */
    static createElement(type: ComponentTypes[0], props: any | null, ...children: Array<any>) {
        if (!type) throw errors.argumentNull("type");
        if (typeof type == "string" || !type.typeName) {
            return React.createElement(type, props, ...children);
        }

        props = props || {};
        let id = props.id;
        if (!id) {
            throw errors.argumentFieldNull("id", "props")
        }

        let typeName = type.typeName;


        return <DesignerContext.Consumer key={id}>
            {designerArgs => {
                if (designerArgs == null) {
                    throw errors.contextArgumentNull();
                }

                type = designerArgs.designer.componentTypes[typeName] || type;

                return <DesignComponentContext.Consumer>
                    {parentArgs => {
                        let componentData = PageDataTravel.findComponent(designerArgs.designer.pageData, id);
                        if (!componentData) {
                            componentData = { id, children: [], props: { id }, type: typeName };
                            console.assert(parentArgs != null, 'design component parent context is null.');
                            console.assert((parentArgs || {}).componentData != null, 'parent component data is null.');
                            let parentComponentData = (parentArgs || {}).componentData as ComponentData;
                            parentComponentData.children = parentComponentData.children || [];
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

    // static register(type: ComponentClass) {
    //     if (!type.typeName) {
    //         throw new Error(`Component type name is null or empty.`);
    //     }
    //     designComponentTypes[type.typeName] = type;
    //     return type;
    // }

    static parse(componentData: ComponentData, componentTypes: ComponentTypes) {
        componentTypes = Object.assign({}, componentTypes, defaultTypes);
        return parsePageData(componentData, componentTypes, DesignComponent.createElement)
    }

}