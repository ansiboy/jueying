import * as React from "react";
import { PropertyEditorProps, PropertyEditorInfo } from "../editor";
import { ComponentData } from "maishu-jueying-core";
import { GroupedEditor, defaultGroupName } from "../design/property-editor";
import { registerComponent } from "maishu-jueying-core";

interface SetPropEditorOptions {
    componentType: React.ComponentClass<any> | string,
    propName: string,
    editorType: React.ComponentClass<PropertyEditorProps<any>> | React.FC<PropertyEditorProps<any>>,
    group?: GroupedEditor["group"],
    display?: ComponentPropEditorDisplay,
    displayName?: string,
    defaultValue?: any,
    validation?: PropertyEditorInfo["validation"],
}

/** 组件是否显示回调函数 */
type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;
// type CreateElementContext = { components: React.Component[], componentTypes: string[] };

// let defaultGroup: GroupedEditor["group"] = { prop: "", displayName: "" };

export class Component {

    //==========================================
    // 用于创建 React 的 React.Fragment 
    static readonly Fragment = ""
    //==========================================

    private static componentPropEditors: {
        [controlClassName: string]: PropertyEditorInfo[] | null
    } = {};

    private static componentPropEditorDisplay: {
        [controlClassName: string]: ComponentPropEditorDisplay | undefined
    } = {};


    static getPropEditors(componentData: ComponentData): PropertyEditorInfo[] {
        let componentType: string = componentData.type;
        let result: PropertyEditorInfo[] = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propertyName as string;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;

            result.push(propEditorInfo[i]);
        }

        return result;
    }

    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropertyEditorInfo
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropertyEditorInfo
    /** 
     * 获取指定组件的属性编辑器
     * @param controlClassName 指定组件的类名
     * @param propName 组件的属性名称 
     * */
    static getPropEditor(controlClassName: string, propName: string): PropertyEditorInfo {
        return this.getPropEditorByArray(controlClassName, propName)
    }

    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray(controlClassName: string, propNames: string) {
        let classEditors = this.componentPropEditors[controlClassName] || []
        let editor = classEditors.filter(o => o.propertyName == propNames)[0]
        return editor
    }

    static setPropEditor(options: SetPropEditorOptions): void {
        let { componentType, editorType, display: editorDisplay, group,
            propName, displayName, defaultValue, validation,
        } = options;
        group = group || defaultGroupName;
        propName = propName || "";
        displayName = displayName || propName;
        // 属性可能为导航属性,例如 style.width
        let propNames = (propName as string).split('.');

        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || []
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propertyName;
            let propName2 = propNames.join('.')
            if (propName1 == propName2) {
                classProps[i].editorType = editorType;
                return
            }
        }
        classProps.push({
            propertyName: propName, displayName, editorType,
            group, defaultValue, validation
        })
    }

    static register(typeName: string, componentType: React.ComponentClass<any>): void {
        return registerComponent(typeName, componentType);
    }

}






