import React = require("react");
import { ComponentData } from "./models";
import { Callback } from "./common";
import { PageBuilderConstructor } from "./page-builder";
export interface PageDesignerProps extends React.Props<PageDesigner> {
    pageData: ComponentData | null;
    style?: React.CSSProperties;
    wrapDesignTimeElement?: boolean;
    pageBuilderType?: PageBuilderConstructor;
}
export interface PageDesignerState {
}
export declare class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private element;
    componentSelected: Callback<string[]>;
    componentRemoved: Callback<string[]>;
    componentAppend: Callback<PageDesigner>;
    componentUpdated: Callback<ComponentData[]>;
    designtimeComponentDidMount: Callback<{
        component: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        element: HTMLElement;
    }>;
    static defaultProps: PageDesignerProps;
    private pageBuilder;
    constructor(props: PageDesignerProps);
    /** 页面数据 */
    readonly pageData: ComponentData;
    /** 获取已选择了的组件编号 */
    readonly selectedComponentIds: string[];
    /** 获取已选择了的组件 */
    readonly selectedComponents: ComponentData[];
    /** 更新组件属性 */
    updateComponentProp(componentId: string, propName: string, value: any): void;
    /** 更新组件多个属性 */
    updateComponentProps(...componentProps: {
        componentId: string;
        propName: string;
        value: any;
    }[]): void;
    /**
     * 对组件及其子控件进行命名
     * @param component
     */
    private static nameComponent;
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
    /** 设置多个组件的位置 */
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
     * @param beforeChildId 组件的前一个子组件编号
     */
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number): void;
    private onKeyDown;
    componentDidMount(): void;
    render(): JSX.Element;
}
