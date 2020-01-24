import * as React from "react";
import { ComponentAttribute, ComponentWrapper } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { Errors } from "./errors";
import { proptDisplayNames } from "./common";
import { ReactPageBuilder } from "react-page-builder";


type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element

export interface ComponentProps<T> extends React.Props<T> {
    id?: string,
    name?: string,
    className?: string,
    style?: React.CSSProperties,
    selected?: boolean,
    text?: string,
    parentid?: string;
    attr?: ComponentAttribute
}

export const ComponentWrapperContext = React.createContext<ComponentWrapper>(null);

export interface PropEditorInfo {
    // propNames: string[],
    propName: string,
    editorType: PropEditorConstructor, group: string,
}

export function component<T extends React.Component>(args?: ComponentAttribute) {
    return function (constructor: { new(...args): T }) {
        if (PageDesigner) {
            Component.setAttribute(constructor.name, args)
        }

        Component.register(constructor.name, constructor)
        return constructor
    }
}

interface SetPropEditorOptions {
    componentType: React.ComponentClass | string,
    propName: string,
    editorType: PropEditorConstructor,
    group?: string,
    display?: ComponentPropEditorDisplay,
    displayName?: string,
}

/** 组件是否显示回调函数 */
type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;

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
    static getAttribute(type: string | React.ComponentClass<any>) {
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

    /** 设置组件属性编辑器 */
    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    static setPropEditor(componentTypeOrOptions: React.ComponentClass | string | SetPropEditorOptions, propName?: string, editorType?: PropEditorConstructor, group?: string): void {

        let componentType: React.ComponentClass | string;
        let editorDisplay: ComponentPropEditorDisplay;
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

        group = group || '';

        // 属性可能为导航属性,例如 style.width
        let propNames = (propName as string).split('.');

        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || []
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.')
            if (propName1 == propName2) {
                classProps[i].editorType = editorType
                return
            }
        }
        classProps.push({ propName, editorType, group })
    }

    private static componentTypes = {} as { [key: string]: React.ComponentClass<any> | string }
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

    static getComponentType(componentName: string): string | React.ComponentClass | null {
        let componentType = Component.componentTypes[componentName];
        return componentType;
    }

}



