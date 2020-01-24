import { ComponentData } from "./models";
import { ComponentProps, Component, ComponentWrapperContext } from "./component";
import { Errors } from "./errors";
import { appendClassName, classNames, removeClassName } from "./style";
import { ComponentWrapper, ComponentWrapperDrapData } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { guid, constants } from "./common";
import { ComponentPanel } from "./component-panel";

export interface PageRenderArguments {
    designer: PageDesigner;
}




/** 页面创建者 */
export interface PageBuilder {

    /**
     * 创建页面组件
     * @param pageData 页面数据
     * @param pageElement 页面元素
     */
    createPage(pageData: ComponentData, pageElement: HTMLElement);

    /**
     * 更新组件属性
     * @param componentProps 要更新的组件属性
     * @returns 返回更新的组件数据
     */
    updateComponentProps(componentProps: { componentId: string, propName: string, value: any }[]): ComponentData[];

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
    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]): ComponentData[];

    /** 
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小 
     */
    setComponentsSize(sizes: { componentId: string, size: { width?: number | string, height?: number | string } }[]): ComponentData[];//componentId: string, size: { width?: number | string, height?: number | string }

    /**
     * 移除控件
     * @param componentIds 控件编号
     */
    removeComponents(componentIds: string[]);

    /** 
     * 移动控件到另外一个控件容器 
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 子组件索引，空值添加到最后
     */
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number): void;

    findComponentData(componentId: string): ComponentData | null;


}

