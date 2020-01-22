import { ComponentData } from "./models";
import { ComponentProps } from "./component";
import { PageDesigner } from "./page-designer";
import * as React from "react";
interface PageRenderArguments {
    designer: PageDesigner;
}
declare type PageBuilderContextValue = {
    pageBuilder: PageBuilder | null;
};
export declare const PageBuilderContext: React.Context<PageBuilderContextValue>;
/** 页面创建者 */
export interface PageBuilder {
    /**
     * 创建页面组件
     * @param pageData 页面数据
     * @param pageElement 页面元素
     */
    createPage(pageData: ComponentData, pageElement: HTMLElement): any;
    /**
     * 更新组件属性
     * @param componentProps 要更新的组件属性
     * @returns 返回更新的组件数据
     */
    updateComponentProps(componentProps: {
        componentId: string;
        propName: string;
        value: any;
    }[]): ComponentData[];
    /**
     * 添加组件
     * @param parentId 父组件编号
     * @param componentData 组件数据
     * @param componentIndex 组件索引位置，如果为空，添加到最后
     */
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void;
    /**
     * 选择指定的控件
     * @param componentIds 指定的控件
     */
    selectComponents(componentIds: string[]): void;
    /**
     * 设置多个组件的位置
     * @returns 返回设置的组件数据
     */
    setComponentsPosition(positions: {
        componentId: string;
        position: {
            left: number | string;
            top: number | string;
        };
    }[]): ComponentData[];
    /**
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小
     */
    setComponentsSize(sizes: {
        componentId: string;
        size: {
            width?: number | string;
            height?: number | string;
        };
    }[]): ComponentData[];
    /**
     * 移除控件
     * @param componentIds 控件编号
     */
    removeComponents(componentIds: string[]): any;
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 子组件索引，空值添加到最后
     */
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number): void;
    findComponentData(componentId: string): ComponentData | null;
}
/** 基于 ReactJS 的页面渲染器 */
export declare class ReactPageBuilder implements PageBuilder {
    private designer;
    private pageData;
    private pageElement;
    constructor(args: PageRenderArguments);
    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]): JSX.Element;
    createPage(pageData: ComponentData, pageElement: HTMLElement): void;
    private render;
    updateComponentProps(componentProps: {
        componentId: string;
        propName: string;
        value: any;
    }[]): ComponentData[];
    setComponentsSize(componentSiezs: {
        componentId: string;
        size: {
            width?: React.ReactText;
            height?: React.ReactText;
        };
    }[]): ComponentData[];
    findComponentData(componentId: string): ComponentData | null;
    private static travelComponentData;
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void;
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponents(componentIds: string[] | string): void;
    setComponentsPosition(positions: {
        componentId: string;
        position: {
            left: number | string;
            top: number | string;
        };
    }[]): ComponentData[];
    removeComponents(componentIds: string[]): void;
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number): void;
    private removeComponentFrom;
    /**
     * 对组件及其子控件进行命名
     * @param component
     */
    private static nameComponent;
}
export {};
