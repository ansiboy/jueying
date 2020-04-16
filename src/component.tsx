import * as React from "react";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { Errors } from "./errors";
import { ComponentAttribute } from "maishu-jueying-core";
import { GroupedEditor } from "./property-editor";

export interface PropEditorInfo {
    propName: string,
    displayName: string,
    editorType: PropEditorConstructor, 
    group: GroupedEditor["group"],
}

interface SetPropEditorOptions {
    componentType: React.ComponentClass | string,
    propName: string,
    editorType: PropEditorConstructor,
    group?: GroupedEditor["group"],
    display?: ComponentPropEditorDisplay,
    displayName?: string,
}

/** 组件是否显示回调函数 */
type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;
// type CreateElementContext = { components: React.Component[], componentTypes: string[] };

let defaultGroup: GroupedEditor["group"] = { prop: "", displayName: "" };

export class Component {

    //==========================================
    // 用于创建 React 的 React.Fragment 
    static readonly Fragment = ""
    //==========================================

    private static componentPropEditors: {
        [controlClassName: string]: PropEditorInfo[] | null
    } = {};

    private static componentPropEditorDisplay: {
        [controlClassName: string]: ComponentPropEditorDisplay | undefined
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

    static setPropEditor(options: SetPropEditorOptions): void {
        let { componentType, editorType, display: editorDisplay, group, propName, displayName } = options;
        group = group || defaultGroup;
        propName = propName || "";
        displayName = displayName || propName;
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
        classProps.push({ propName, displayName, editorType: editorType as PropEditorConstructor, group })
    }

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

    }

}






