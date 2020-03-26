import * as React from "react";
import { ComponentWrapper } from "./component-wrapper";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { Errors } from "./errors";
// import { MasterPage } from "./components";
import { ComponentFactory } from "./component-factory";

import { ComponentAttribute } from "maishu-jueying-core";
import { proptDisplayNames } from "./propt-display-names";

// type DesignerContextValue = { designer: ComponentDataHandler | null };
// export const DesignerContext = React.createContext<DesignerContextValue>({ designer: null });
export const ComponentWrapperContext = React.createContext<ComponentWrapper | null>(null);

export interface PropEditorInfo {
    // propNames: string[],
    propName: string,
    editorType: PropEditorConstructor, group: string,
}

interface SetPropEditorOptions {
    componentType: React.ComponentClass | string,
    propName: string,
    editorType: PropEditorConstructor,
    group?: string,
    display: ComponentPropEditorDisplay,
    displayName?: string,
}

/** 组件是否显示回调函数 */
type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;
type CreateElementContext = { components: React.Component[], componentTypes: string[] };

export class Component {

    //==========================================
    // 用于创建 React 的 React.Fragment 
    static readonly Fragment = ""
    //==========================================

    private static defaultComponentAttribute: ComponentAttribute = {
        container: false, movable: false, showHandler: false, resize: false
    }

    private static componentAttributes: { [key: string]: ComponentAttribute } = {

        'div': { container: true, movable: true, showHandler: true, resize: true },

        'img': { container: false, movable: true, resize: true },

        'label': { movable: true },

        'ul': { container: false, movable: true, showHandler: true, resize: false },
        'li': { container: true, movable: false, },

        'table': { container: false, movable: true, showHandler: true, resize: true },
        'thead': { container: false, movable: false },
        'tbody': { container: false, movable: false },
        'tfoot': { container: false, movable: false },
        'tr': { container: false, movable: false },
        'td': { container: true, movable: false },
    }

    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    static setAttribute(typename: string, attr: ComponentAttribute) {
        Component.componentAttributes[typename] = attr
    }

    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */
    static getAttribute(type: string | React.ComponentClass<any> | React.ComponentType) {
        let typename = typeof type == 'string' ? type : type.name
        let attr = Component.componentAttributes[typename]
        return Object.assign({ type }, Component.defaultComponentAttribute, attr || {})
    }

    private static componentPropEditors: {
        [controlClassName: string]: PropEditorInfo[] | null
    } = {};

    private static componentPropEditorDisplay: {
        [controlClassName: string]: ComponentPropEditorDisplay | null
    } = {};


    static getPropEditors(componentData: ComponentData): PropEditorInfo[] {
        let componentType: string = componentData.type;
        let result: PropEditorInfo[] = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propName;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;

            result.push(propEditorInfo[i]);
        }

        return result;
        // let classEditors = this.componentPropEditors[componentType] || []
        // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        // return classEditors
    }

    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo
    static getPropEditor(controlClassName: string, propName: string): PropEditorInfo {
        return this.getPropEditorByArray(controlClassName, propName)
    }

    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray(controlClassName: string, propNames: string) {
        let classEditors = this.componentPropEditors[controlClassName] || []
        let editor = classEditors.filter(o => o.propName == propNames)[0]
        return editor
    }

    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    static setPropEditor(componentTypeOrOptions: React.ComponentClass | string | SetPropEditorOptions, propName?: string, editorType?: PropEditorConstructor, group?: string): void {

        let componentType: React.ComponentClass | string;
        let editorDisplay: ComponentPropEditorDisplay | null = null;
        if (typeof componentTypeOrOptions == "object") {
            let options = componentTypeOrOptions as SetPropEditorOptions;
            componentType = options.componentType;
            propName = options.propName;
            editorType = options.editorType;
            group = options.group;
            editorDisplay = options.display;
            if (options.displayName != null) {
                proptDisplayNames[propName] = options.displayName;
            }
        }
        else {
            componentType = componentTypeOrOptions;
        }

        if (editorDisplay == null)
            throw new Error("Editor display is null.");

        group = group || '';
        propName = propName || "";
        // 属性可能为导航属性,例如 style.width
        let propNames = (propName as string).split('.');

        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || []
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.')
            if (propName1 == propName2) {
                classProps[i].editorType = editorType as PropEditorConstructor;
                return
            }
        }
        classProps.push({ propName, editorType: editorType as PropEditorConstructor, group })
    }

    static createElement(componentData: ComponentData): React.ReactElement<any> | null {
        // return Component._createElement(componentData, { components: [], componentTypes: [] }, h);
        return defaultComponentFactory(componentData)
    }

    // /**
    //  * 将持久化的元素数据转换为 ReactElement
    //  * @param componentData 元素数据
    //  */
    // private static _createElement(componentData: ComponentData, context: CreateElementContext, h?: ComponentFactory): React.ReactElement<any> | null {
    //     if (!componentData) throw Errors.argumentNull('componentData')

    //     h = h || defaultComponentFactory;

    //     try {

    //         let type: string | React.ComponentClass | React.ComponentType = componentData.type;
    //         let componentName = componentData.type;
    //         let controlType = Component.componentTypes[componentName];
    //         if (controlType) {
    //             type = controlType;
    //         }

    //         let children: (React.ReactElement<any> | string)[] = [];
    //         for (let i = 0; i < componentData.children.length; i++) {
    //             let child = componentData.children[i];
    //             if (typeof child == "string")
    //                 children.push(child);
    //             else
    //                 children.push(Component._createElement(child, context, h));

    //         }
    //         //componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];
    //         let props: ComponentProps<any> = componentData.props == null ? {} : Object.assign({}, componentData.props);//JSON.parse(JSON.stringify(componentData.props));
    //         if (controlType != null && controlType["defaultProps"]) {
    //             props = Object.assign({}, controlType["defaultProps"], props);
    //         }

    //         let result: JSX.Element


    //         if (typeof type == 'string') {
    //             if (props.text) {
    //                 children.push(props.text)
    //             }

    //             //=========================================
    //             // props.text 非 DOM 的 prop，并且已经使用完
    //             // delete props.text
    //             // if (h == React.createElement) {
    //             //     delete props.attr
    //             // }
    //             //=========================================
    //         }


    //         let masterPage: MasterPage;
    //         type = type == Component.Fragment ? React.Fragment : type
    //         let ref = props.ref;
    //         props.ref = function (e: any) {

    //             if (typeof ref == "function")
    //                 ref(e);

    //             if (e instanceof MasterPage) {
    //                 masterPage = e;
    //                 for (let i = 0; i < context.componentTypes.length; i++) {
    //                     let typeName = context.componentTypes[i];
    //                     let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
    //                     childComponents.push(context.components[i]);
    //                 }
    //             }
    //             else if (e != null) {
    //                 context.components.push(e);
    //                 context.componentTypes.push(typeof type == "string" ? type : type.name);
    //                 // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
    //             }
    //         };

    //         result = h(componentData);
    //         return result
    //     }
    //     catch (e) {
    //         console.error(e);
    //         return null;
    //     }
    // }

    static componentTypes = {} as { [key: string]: React.ComponentClass<any> | string }
    static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void {
        if (componentType == null && typeof componentName == 'function') {
            componentType = componentName;
            componentName = (componentType as React.ComponentClass<any>).name;
            (componentType as any)['componentName'] = componentName;
        }

        if (!componentName)
            throw Errors.argumentNull('componentName');

        if (!componentType)
            throw Errors.argumentNull('componentType');

        Component.componentTypes[componentName] = componentType;
        if (attr)
            Component.setAttribute(componentName, attr)
    }

}

export let defaultComponentFactory: ComponentFactory = (c) => {
    let children = (c.children || []).map(c => typeof c == "string" ? c : defaultComponentFactory(c));
    let type = Component.componentTypes[c.type] || c.type;
    let e: JSX.Element = React.createElement(type, c.props || {}, ...children);
    return e;
}







