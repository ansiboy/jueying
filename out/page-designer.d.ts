/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
import React = require("react");
import { ComponentData } from "./models";
import { Callback } from "./common";
import { ComponentProps } from "./component";
export interface PageDesignerProps extends React.Props<PageDesigner> {
    pageData: ComponentData | null;
    style?: React.CSSProperties;
}
export interface PageDesignerState {
    pageData: ComponentData | null;
}
export declare class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private element;
    componentSelected: Callback<string[]>;
    componentRemoved: Callback<string[]>;
    componentAppend: Callback<PageDesigner>;
    componentUpdated: Callback<ComponentData[]>;
    designtimeComponentDidMount: Callback<{
        component: React.ReactElement<any>;
        element: HTMLElement;
    }>;
    private namedComponents;
    private _root;
    constructor(props: PageDesignerProps);
    initPageData(pageData: ComponentData): void;
    readonly root: React.ReactElement<any>;
    readonly pageData: ComponentData;
    readonly selectedComponentIds: any[];
    readonly selectedComponents: ComponentData[];
    updateControlProps(controlId: string, navPropsNames: string[], value: any): any;
    private sortChildren;
    /**
     * 对组件及其子控件进行命名
     * @param component
     */
    private nameComponent;
    /** 添加控件 */
    appendComponent(parentId: string, childControl: ComponentData, childIds?: string[]): void;
    /** 设置控件位置 */
    setComponentPosition(componentId: string, position: {
        left: number | string;
        top: number | string;
    }): void;
    setComponentSize(componentId: string, size: {
        width?: number | string;
        height?: number | string;
    }): void;
    setComponentsPosition(positions: {
        componentId: string;
        position: {
            left: number | string;
            top: number | string;
        };
    }[]): void;
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds: string[] | string): void;
    /** 移除控件 */
    removeControl(...controlIds: string[]): void;
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childIds 目标组件子组件的编号，用于排序子组件
     */
    moveControl(componentId: string, parentId: string, childIds?: string[]): void;
    private removeControlFrom;
    findComponentData(controlId: string): ComponentData | null;
    private onKeyDown;
    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]): JSX.Element;
    componentWillReceiveProps(props: PageDesignerProps): void;
    render(): JSX.Element;
}
