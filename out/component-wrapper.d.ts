/// <reference path="../src/typings/declare.d.ts" />
import * as React from "react";
import { PageDesigner } from "./page-designer";
import { ComponentProps } from "./component";
declare type ComponentWrapperProps = {
    designer: PageDesigner;
    source: {
        type: string | React.ComponentClass;
        attr: ComponentAttribute;
        props: ComponentProps<any>;
        children: any[];
    };
};
export interface ComponentWrapperDrapData extends DragDropData {
    attr: string;
    sourceElement: HTMLElement;
}
/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */
export declare class ComponentWrapper extends React.Component<ComponentWrapperProps, {
    error: Error;
}> {
    private handler;
    private element;
    private static isDrag;
    constructor(props: ComponentWrapperProps);
    componentDidCatch(error: any, info: any): void;
    designtimeBehavior(element: HTMLElement, attr: {
        container?: boolean;
        movable?: boolean;
    }): void;
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    private static enableAppendDroppable;
    private static isResizeHandleClassName;
    private static draggable;
    static invokeOnClick(ev: MouseEvent, designer: PageDesigner, element: HTMLElement): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private renderWidthoutWrapper;
    private createRawElement;
    private designTimeEmptyElement;
    private designTimeText;
}
export interface ComponentAttribute {
    /** 组件在设计设计时，是否可以作为容器添加子组件 */
    container?: boolean;
    /** 组件在设计设计时，是否可移动 */
    movable?: boolean;
    /** 组件在设计设计时，是否显示操作按钮 */
    showHandler?: boolean;
    /** 组件在设计设计时，是否可以设置大小 */
    resize?: boolean;
    /** 组件在设计设计时，不对元素进行包裹 */
    noWrapper?: boolean;
}
export declare let defaultComponentAttribute: ComponentAttribute;
export {};
