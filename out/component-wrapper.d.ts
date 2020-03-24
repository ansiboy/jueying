import { ComponentProps } from "react";
import * as React from "react";
import { ReactComponentType, DragDropData } from "./models";
import { ComponentDataHandler } from "./component-data-handler";
import { ComponentAttribute } from "maishu-jueying-core";
declare type ComponentWrapperProps = {
    handler: ComponentDataHandler;
    source: {
        type: ReactComponentType;
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
    static invokeOnClick(ev: MouseEvent, designer: ComponentDataHandler, element: HTMLElement): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private renderWidthoutWrapper;
    private createRawElement;
    private designTimeEmptyElement;
    private designTimeText;
}
export {};
