import * as React from "react";
import { ComponentAttribute, ComponentWrapper } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { ComponentProps } from "maishu-jueying-core";
declare type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element;
declare type DesignerContextValue = {
    designer: PageDesigner | null;
};
export declare const DesignerContext: React.Context<DesignerContextValue>;
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
    static getAttribute(type: string | React.ComponentClass<any> | React.ComponentType): {
        type: string | React.ComponentClass<any, any> | React.ComponentClass<{}, any> | React.FunctionComponent<{}>;
    } & ComponentAttribute;
    private static componentPropEditors;
    private static componentPropEditorDisplay;
    static getPropEditors(componentData: ComponentData): PropEditorInfo[];
    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo;
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo;
    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray;
    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    static createElement(componentData: ComponentData, h?: ReactFactory): React.ReactElement<any> | null;
    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */
    private static _createElement;
    private static componentTypes;
    static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void;
}
export {};
