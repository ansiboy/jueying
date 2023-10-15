import { designComponentTypes } from "./components/design-component-types";
import * as React from "react";
import { DesignComponentContext, DesignComponentContextValue } from "./design-component-context";
import { errors } from "../errors";
import { ComponentData, ComponentProps, ComponentTypes, componentTypes, PageData, parsePageData } from "../runtime";
import { DesignerContext } from "../designer";
import { PageDataTravel } from "../utility";

export class DesignComponent {
    static get types() {
        return designComponentTypes;
    }

    /** 创建设计时元素 */
    static createElement(type: ComponentTypes[0], props: any, ...children: Array<any>) {
        if (!type) throw errors.argumentNull("type");
        if (!props) throw errors.argumentNull("props");

        let p = props as ComponentProps
        if (!p.id) throw errors.argumentFieldNull("id", "props")

        return <DesignerContext.Consumer key={p.id}>
            {args => {
                props = props || {};
                if (args == null) {
                    return React.createElement(type, props, ...children)
                }

                // if (!args) throw errors.contextArgumentNull()
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

                if (typeof type == "function") {
                    let typeName = DesignComponent.getTypeName(type);
                    if (!typeName)
                        throw errors.canntGetComponentTypeName();

                    type = designComponentTypes[typeName] || type;
                }

                return <DesignComponentContext.Provider value={value}>
                    {React.createElement(type, props, ...children)}
                </DesignComponentContext.Provider>
            }}
        </DesignerContext.Consumer>
    }

    static register(type: any, typeName: string) {
        designComponentTypes[typeName] = type;
    }

    static parse(componentData: ComponentData, componentTypes: ComponentTypes) {
        return parsePageData(componentData, componentTypes, DesignComponent.createElement)
    }

    private static getTypeName(type: Function): string | null {
        let typeName: string | null = null;


        for (let key in componentTypes) {
            if (componentTypes[key] == type) {
                typeName = key;
                break;
            }
        }

        if (!typeName) {
            typeName = ((type as any).typeName) || type.name;
        }

        return typeName;

    }
}