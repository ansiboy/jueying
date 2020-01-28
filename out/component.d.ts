import * as React from "react";
import { ComponentAttribute, ComponentWrapper } from "./component-wrapper";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
export interface ComponentProps<T> extends React.Props<T> {
    id?: string;
    name?: string;
    className?: string;
    style?: React.CSSProperties;
    selected?: boolean;
    text?: string;
    parentId?: string;
    attr?: ComponentAttribute;
}
export declare const ComponentWrapperContext: React.Context<ComponentWrapper>;
export interface PropEditorInfo {
    propName: string;
    editorType: PropEditorConstructor;
    group: string;
}
export declare function component<T extends React.Component>(args?: ComponentAttribute): (constructor: new (...args: any[]) => T) => new (...args: any[]) => T;
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
    static getAttribute(type: string | React.ComponentClass<any>): {
        type: string | React.ComponentClass<any, any>;
    } & ComponentAttribute;
    private static componentPropEditors;
    private static componentPropEditorDisplay;
    static getPropEditors(componentData: ComponentData): PropEditorInfo[];
    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo;
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo;
    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray;
    /** 设置组件属性编辑器 */
    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    private static componentTypes;
    static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void;
    static getComponentType(componentName: string): string | React.ComponentClass | null;
}
export {};
