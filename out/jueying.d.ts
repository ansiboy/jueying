/// <reference types="react" />
declare module jueying {
    let constants: {
        componentsDir: string;
        connectorElementClassName: string;
        componentTypeName: string;
        componentData: string;
    };
    let strings: {
        [key: string]: string;
    };
    function guid(): string;
    class Callback<T> {
        private funcs;
        add(func: (args: T) => void): void;
        remove(func: (args: T) => any): void;
        fire(args: T): void;
        static create<T>(): Callback<T>;
    }
}
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
declare module jueying {
    interface EditorProps extends React.Props<ComponentEditor> {
        designer: PageDesigner;
    }
    interface EditorState {
        editors: {
            group: string;
            prop: string;
            editor: React.ReactElement<any>;
        }[];
        designer?: PageDesigner;
    }
    class ComponentEditor extends React.Component<EditorProps, EditorState> {
        private _element;
        constructor(props: EditorProps);
        componentWillReceiveProps(props: EditorProps): void;
        private getEditors;
        private flatProps;
        render(): JSX.Element;
        readonly element: HTMLElement;
    }
}
declare module jueying {
    interface ComponentToolbarProps extends React.Props<ComponentPanel> {
        style?: React.CSSProperties;
        className?: string;
    }
    interface ComponentToolbarState {
        componets: ComponentDefine[];
    }
    class ComponentPanel extends React.Component<ComponentToolbarProps, ComponentToolbarState> {
        designer: PageDesigner;
        private toolbarElement;
        constructor(props: any);
        private componentDraggable;
        setComponets(componets: ComponentDefine[]): void;
        static getComponentData(dataTransfer: DataTransfer): ComponentData;
        /** 获取光标在图标内的位置 */
        static mouseInnerPosition(dataTransfer: DataTransfer): {
            x: number;
            y: number;
        };
        render(): JSX.Element;
    }
}
declare module jueying {
    type ComponentWrapperProps = {
        designer: PageDesigner;
        source: {
            type: string | React.ComponentClass;
            attr: ComponentAttribute;
            props: ComponentProps<any>;
            children: any[];
        };
    };
    interface ComponentWrapperDrapData {
        available: any[];
        deltaX: number;
        deltaY: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
        originalX: number;
        originalY: number;
        attr: string;
        sourceElement: HTMLElement;
    }
    /**
     * 组件包装器，对组件进行包装，实现组件设计时的行为。
     * 1. 组件的移动
     * 2. 组件的拖放
     */
    class ComponentWrapper extends React.Component<ComponentWrapperProps, any> {
        private handler;
        private element;
        private static isDrag;
        designtimeBehavior(element: HTMLElement, attr: {
            container?: boolean;
            movable?: boolean;
        }): void;
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        private static enableDroppable;
        private static isResizeHandleClassName;
        private static draggable;
        static invokeOnClick(ev: MouseEvent, designer: PageDesigner, element: HTMLElement): void;
        componentDidMount(): void;
        render(): JSX.Element;
        private renderWidthoutWrapper;
        private createRawElement;
    }
    interface ComponentAttribute {
        /** 表示组件为容器，可以添加组件 */
        container?: boolean;
        /** 表示组件可移动 */
        movable?: boolean;
        showHandler?: boolean;
        resize?: boolean;
    }
}
/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 * component.tsx 文件用于运行时加载，所以要控制此文件的大小，用于在运行时创建页面
 *
 ********************************************************************************/
declare module jueying {
    type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element;
    interface ComponentProps<T> extends React.Props<T> {
        id?: string;
        name?: string;
        className?: string;
        style?: React.CSSProperties;
        selected?: boolean;
        text?: string;
        parent_id?: string;
        attr?: ComponentAttribute;
    }
    type DesignerContextValue = {
        designer: PageDesigner | null;
    };
    const DesignerContext: React.Context<DesignerContextValue>;
    const ComponentWrapperContext: React.Context<ComponentWrapper>;
    interface PropEditorInfo {
        propNames: string[];
        editorType: PropEditorConstructor;
        group: string;
    }
    function component<T extends React.Component>(args?: ComponentAttribute): (constructor: new (...args: any[]) => T) => new (...args: any[]) => T;
    class Component {
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
        static getAttribute(type: string | React.ComponentClass<any>): {
            type: string | React.ComponentClass<any, any>;
        } & ComponentAttribute;
        private static controlPropEditors;
        static getPropEditors(controlClassName: string): PropEditorInfo[];
        static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo;
        static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo;
        /** 通过属性数组获取属性的编辑器 */
        static getPropEditorByArray(controlClassName: string, propNames: string[]): PropEditorInfo;
        static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
        /**
         * 将持久化的元素数据转换为 ReactElement
         * @param args 元素数据
         */
        static createElement(args: ComponentData, h?: ReactFactory): React.ReactElement<any> | null;
        private static componentTypes;
        static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void;
    }
    const MasterPageName = "MasterPage";
    class MasterPage extends React.Component<ComponentProps<MasterPage>, {
        children: React.ReactElement<ComponentProps<MasterPage>>[];
    }> {
        constructor(props: ComponentProps<MasterPage>);
        private children;
        componentWillReceiveProps(props: ComponentProps<MasterPage>): void;
        render(): JSX.Element;
    }
    /**
     * 占位符，用于放置控件
     */
    class PlaceHolder extends React.Component<{
        id: string;
    }, {}> {
        constructor(props: any);
        private designer;
        wraper: ComponentWrapper;
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        private enableAppendDroppable;
        private enableMoveDroppable;
        render(): JSX.Element;
    }
    class PageView extends React.Component<{
        pageData: ComponentData;
    }, {}> {
        constructor(props: any);
        render(): React.ReactElement<any>;
    }
}
declare module jueying {
    interface EditorPanelState {
        componentDatas: ComponentData[];
        designer?: PageDesigner;
    }
    interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
        emptyText?: string;
        designer?: PageDesigner;
    }
    class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
        element: HTMLElement;
        private editor;
        private _designer;
        private designerComponentChanged;
        constructor(props: any);
        componentWillReceiveProps(props: EditorPanelProps): void;
        private getComponentData;
        designer: PageDesigner;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare module jueying {
    class Errors {
        static placeHolderIdNull(): any;
        static fileNotExists(fileName: string): any;
        static argumentNull(argumentName: string): Error;
        static pageDataIsNull(): Error;
        static toolbarRequiredKey(): Error;
        static loadPluginFail(pluginId: string): Error;
        static idRequired(): Error;
        static canntFindHost(componentId: string): Error;
        static propertyCanntNull(componentName: string, property: string): Error;
    }
}
declare module jueying {
    interface ComponentData {
        type: string;
        props?: ComponentProps<any>;
        children?: ComponentData[];
    }
    interface ComponentDefine {
        componentData: ComponentData;
        displayName: string;
        icon: string;
        introduce: string;
    }
}
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
declare module jueying {
    interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ComponentData | null;
        style?: React.CSSProperties;
    }
    interface PageDesignerState {
        pageData: ComponentData | null;
    }
    class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
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
        readonly selectedComponentIds: string[];
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
        designTimeEmptyElement(type: string | React.ComponentClass, props: ComponentProps<any>): string;
        private designTimeText;
        private createDesignTimeElement;
        componentWillReceiveProps(props: PageDesignerProps): void;
        render(): JSX.Element;
    }
}
declare module jueying {
    interface PropEditorConstructor {
        new (props: PropEditorProps<any>): any;
    }
    interface PropEditorProps<T> {
        value: T;
        onChange: (value: T) => void;
    }
    interface PropEditorState<T> {
        value: T;
    }
    abstract class PropEditor<S extends PropEditorState<T>, T> extends React.Component<PropEditorProps<T>, S> {
        constructor(props: PropEditorProps<T>);
        componentWillReceiveProps(props: PropEditorProps<T>): void;
    }
    class TextInput extends PropEditor<PropEditorState<string>, string> {
        render(): JSX.Element;
    }
    function dropdown(items: {
        [value: string]: string;
    } | string[], emptyText?: string): {
        new (props: PropEditorProps<string>): {
            render(): JSX.Element;
            componentWillReceiveProps(props: PropEditorProps<string>): void;
            context: any;
            setState<K extends "value">(state: {
                value: string;
            } | ((prevState: Readonly<{
                value: string;
            }>, props: Readonly<PropEditorProps<string>>) => {
                value: string;
            } | Pick<{
                value: string;
            }, K>) | Pick<{
                value: string;
            }, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<PropEditorProps<string>>;
            state: Readonly<{
                value: string;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<PropEditorProps<string>>, nextState: Readonly<{
                value: string;
            }>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<PropEditorProps<string>>, prevState: Readonly<{
                value: string;
            }>): any;
            componentDidUpdate?(prevProps: Readonly<PropEditorProps<string>>, prevState: Readonly<{
                value: string;
            }>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PropEditorProps<string>>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<PropEditorProps<string>>, nextState: Readonly<{
                value: string;
            }>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<PropEditorProps<string>>, nextState: Readonly<{
                value: string;
            }>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
}
declare module jueying {
    let classNames: {
        componentSelected: string;
        emptyTemplates: string;
        loadingTemplates: string;
        templateSelected: string;
        templateDialog: string;
        emptyDocument: string;
        component: string;
        componentWrapper: string;
        componentPanel: string;
        form: string;
        formItem: string;
        editorPanel: string;
    };
    function appendClassName(sourceClassName: string, addonClassName: any): any;
    function appendClassName(element: HTMLElement, addonClassName: any): any;
    function removeClassName(sourceClassName: string, targetClassName: any): any;
    function removeClassName(element: HTMLElement, targetClassName: any): any;
}
