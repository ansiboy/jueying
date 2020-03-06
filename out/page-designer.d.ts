import React = require("react");
import { ComponentData } from "./models";
import { ComponentFactory } from "./component-factory";
import { ComponentProps } from "maishu-jueying-core";
import { ComponentDataHandler } from "./component-data-handler";
export interface PageDesignerProps extends React.Props<PageDesigner> {
    style?: React.CSSProperties;
    className?: string;
    componentFactory?: ComponentFactory;
    elementTag?: string;
    context?: any;
    componentDataHandler: ComponentDataHandler;
}
export interface PageDesignerState {
    pageData: ComponentData | null;
}
export declare class PageDesigner<P extends PageDesignerProps = PageDesignerProps, S extends PageDesignerState = PageDesignerState> extends React.Component<P, S> {
    private _element;
    static defaultProps: PageDesignerProps;
    private components;
    constructor(props: P);
    private setComponetRefProp;
    private initPageData;
    allComponents(): React.Component[];
    /** 页面数据 */
    readonly pageData: S["pageData"];
    /** 获取已选择了的组件编号 */
    readonly selectedComponentIds: string[];
    /** 获取已选择了的组件 */
    readonly selectedComponents: ComponentData[];
    readonly element: HTMLElement;
    updateComponentProp(componentId: string, propName: string, value: any): any;
    updateComponentProps(...componentProps: {
        componentId: string;
        propName: string;
        value: any;
    }[]): any;
    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void;
    /**
     * 设置控件位置
     * @param componentId 组件编号
     * @param position 组件位置
     */
    setComponentPosition(componentId: string, position: {
        left: number | string;
        top: number | string;
    }): void;
    /**
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小
     */
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
    removeComponent(...componentIds: string[]): void;
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */
    moveComponent(componentId: string, parentId: string, targetComponentIndex?: number): void;
    private removeComponentFrom;
    private static travelComponentData;
    findComponentData(componentId: string): ComponentData | null;
    private onKeyDown;
    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]): JSX.Element;
    static getDerivedStateFromProps(props: PageDesignerProps, state: PageDesignerState): Partial<PageDesignerState>;
    render(): React.DOMElement<{
        className: string;
        tabIndex: number;
        style: P["style"];
        ref: (e: HTMLElement) => void;
        onKeyDown: (t: React.KeyboardEvent<HTMLElement>) => void;
    }, HTMLElement>;
}
