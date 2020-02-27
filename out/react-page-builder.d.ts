import { ComponentData } from "./models";
import { ComponentProps } from "./component";
import * as React from "react";
import { PageBuilder, PageBuilderArguments } from "./page-builder";
declare type ReactFactory = typeof React["createElement"];
declare type PageBuilderContextValue = {
    pageBuilder: PageBuilder | null;
};
export declare const PageBuilderContext: React.Context<PageBuilderContextValue>;
/** 基于 ReactJS 的页面渲染器 */
export declare class ReactPageBuilder implements PageBuilder {
    private designer;
    private pageData;
    private pageElement;
    constructor(args: PageBuilderArguments);
    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]): React.ReactNode;
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
    /** 对 pageData 进行缺少的字段进行补充 */
    private static fillPageData;
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
    static createElement(componentData: ComponentData, h?: ReactFactory): React.ReactElement<any> | null;
    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */
    private static _createElement;
}
export declare const MasterPageName = "MasterPage";
declare type MasterPageContextValue = {
    master: MasterPage | null;
};
export declare const MasterPageContext: React.Context<MasterPageContextValue>;
export declare class MasterPage extends React.Component<ComponentProps<MasterPage>, {
    children: React.ReactElement<ComponentProps<MasterPage>>[];
}> {
    childComponents: {
        [key: string]: React.Component[];
    };
    constructor(props: ComponentProps<MasterPage>);
    private static children;
    static getDerivedStateFromProps(props: ComponentProps<MasterPage>): Readonly<{
        children: React.ReactElement<ComponentProps<MasterPage>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    }>;
    render(): React.ReactNode;
}
/**
 * 占位符，用于放置控件
 */
export declare class PlaceHolder extends React.Component<{
    id: string;
    empty?: string | React.ReactElement;
}, {}> {
    private element;
    constructor(props: PlaceHolder["props"]);
    private designer;
    private wraper;
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    private enableAppendDroppable;
    private enableMoveDroppable;
    render(): React.ReactNode;
}
/** 用于将 ComponentData 显示为组件 */
export declare class PageView extends React.Component<{
    pageData: ComponentData;
}, {}> {
    constructor(props: PageView["props"]);
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
}
export {};
