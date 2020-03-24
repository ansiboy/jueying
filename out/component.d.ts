import * as React from "react";
import { ComponentWrapper } from "./component-wrapper";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { ComponentFactory } from "./component-factory";
import { ComponentAttribute } from "maishu-jueying-core";
export declare const ComponentWrapperContext: React.Context<ComponentWrapper>;
export interface PropEditorInfo {
    propName: string;
    editorType: PropEditorConstructor;
    group: string;
}
interface SetPropEditorOptions {
    componentType: React.ComponentClass | string;
    propName: string;
    editorType: PropEditorConstructor;
    group?: string;
    display?: ComponentPropEditorDisplay;
    displayName?: string;
}
/** 组件是否显示回调函数 */
declare type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;
export declare class Component {
    static readonly Fragment = "";
    private static defaultComponentAttribute;
    private static componentAttributes;
    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    static setAttribute(typename: string, attr: ComponentAttribute): void;
    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */
    static getAttribute(type: string | React.ComponentClass<any> | React.ComponentType): any;
    private static componentPropEditors;
    private static componentPropEditorDisplay;
    static getPropEditors(componentData: ComponentData): PropEditorInfo[];
    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo;
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo;
    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray;
    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    static createElement(componentData: ComponentData): React.ReactElement<any> | null;
    static componentTypes: {
        [key: string]: string | React.ComponentClass<any, any>;
    };
    static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void;
}
export declare let defaultComponentFactory: ComponentFactory;
export {};
