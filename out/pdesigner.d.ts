/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace pdesigner {
    interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>;
    }
    abstract class Editor<P extends EditorProps, S> extends React.Component<P, S> {
        private designer;
        private originalRender;
        private controlType;
        validate: () => Promise<boolean>;
        abstract element: HTMLElement;
        constructor(props: any);
        setState<K extends keyof S>(state: (Pick<S, K> | S), callback?: () => void): void;
        static register(controlTypeName: any, editorType: React.ComponentClass<any> | string): void;
        static create(control: Control<any, any>): Promise<React.ReactElement<any>>;
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
 *
 ********************************************************************************/
declare namespace pdesigner {
    interface ControlProps<T> extends React.Props<T> {
        id?: string;
        componentName?: string;
        className?: string;
        style?: React.CSSProperties;
        name?: string;
        disabled?: boolean;
        onClick?: React.MouseEventHandler<T>;
    }
    interface ControlState {
        selected: boolean;
    }
    interface ElementData {
        type: string;
        props: ControlProps<any>;
        children?: ElementData[];
    }
    abstract class Control<P extends ControlProps<any>, S> extends React.Component<P, S> {
        private originalRef;
        private _pageView;
        private _designer;
        private originalComponentDidMount;
        private originalRender;
        static componentsDir: string;
        static selectedClassName: string;
        static connectorElementClassName: string;
        protected hasCSS: boolean;
        hasEditor: boolean;
        abstract element: HTMLElement;
        constructor(props: any);
        readonly abstract persistentMembers: (keyof S)[];
        readonly id: string;
        readonly componentName: any;
        static htmlDOMProps(props: any): {};
        protected loadControlCSS(): Promise<void>;
        private myComponentDidMount();
        commonCreateElement(type: string | React.ComponentClass<any>, props: ControlProps<this>, ...children: any[]): void;
        private createDesignTimeElement(type, props, ...children);
        createRuntimeElement(type: string | React.ComponentClass<any>, props: ControlProps<this>, ...children: any[]): React.ReactElement<any>;
        private static render();
        private static getControlType(componentName);
        static loadTypes(elementData: ElementData): Promise<any[]>;
        static loadAllTypes(): Promise<any[]>;
        static create(description: ElementData): React.ReactElement<any>;
        private static createElement(description);
        static register(controlType: React.ComponentClass<any>): any;
        static register(controlName: string, controlType: React.ComponentClass<any>): any;
        static register(controlName: string, controlPath: string): any;
        private static getComponentNameByType(type);
        static export(control: Control<ControlProps<any>, any>): ElementData;
        private static exportElement(element);
        private static trimProps(props);
        private static isEmptyObject(obj);
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
 *
 ********************************************************************************/
declare namespace pdesigner {
    interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ElementData;
    }
    interface PageDesignerState {
        pageData: ElementData;
    }
    class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
        selectedControlId1: string;
        private element;
        private undoStack;
        private redoStack;
        private originalPageData;
        private snapshootVersion;
        controlSelected: chitu.Callback1<PageDesigner, Control<ControlProps<any>, any>>;
        controlComponentDidMount: chitu.Callback1<PageDesigner, Control<any, any>>;
        changed: chitu.Callback1<PageDesigner, ElementData>;
        constructor(props: any);
        set_state(state: PageDesignerState, isUndoData?: boolean): void;
        save(callback: (pageData: ElementData) => Promise<any>): Promise<void>;
        readonly canUndo: boolean;
        undo(): void;
        readonly canRedo: boolean;
        redo(): void;
        private pageDataIsChanged(pageData);
        private isEquals(obj1, obj2);
        private skipField(obj, field);
        updateControlProps(controlId: string, props: any): any;
        sortControlChildren(controlId: string, childIds: string[]): any;
        sortChildren(parentId: string, childIds: string[]): Promise<void>;
        appendControl(parentId: string, childControl: ElementData, childIds: string[]): Promise<void>;
        /**
         * 选择指定的控件
         * @param control 指定的控件，可以为空，为空表示清空选择。
         */
        selectControl(control: Control<any, any>): void;
        clearSelectControl(): void;
        private removeControl(controlId);
        moveControl(controlId: string, parentId: string, childIds: string[]): void;
        private removeControlFrom(controlId, collection);
        private findControlData(controlId);
        private onKeyDown(e);
        componentDidMount(): void;
        render(): JSX.Element;
    }
    const DesignerContext: React.Context<{
        designer: any;
    }>;
}
declare namespace pdesigner {
    interface ControlPlaceholderState {
        controls: ElementData[];
    }
    interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties;
        emptyText?: string;
        htmlTag?: string;
    }
    class ControlPlaceholder extends Control<ControlPlaceholderProps, ControlPlaceholderState> {
        private designer;
        private controls;
        element: HTMLElement;
        constructor(props: any);
        readonly persistentMembers: any[];
        private sortableElement(element, designer);
        private childrenIds(element);
        componentDidMount(): void;
        render(h?: any): JSX.Element;
    }
}
declare namespace pdesigner {
    interface ComponentToolbarProps extends React.Props<ComponentToolbar> {
        componets: ComponentDefine[];
        style?: React.CSSProperties;
        className?: string;
    }
    interface ComponentToolbarState {
    }
    class ComponentToolbar extends React.Component<ComponentToolbarProps, ComponentToolbarState> {
        designer: PageDesigner;
        private toolbarElement;
        componentDidMount(): void;
        draggable(selector: JQuery): void;
        render(): JSX.Element;
    }
}
declare namespace pdesigner {
    interface EditorPanelState {
        editor: React.ReactElement<any>;
    }
    interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
        emptyText?: string;
    }
    class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
        private designer;
        private element;
        constructor(props: any);
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare namespace pdesigner {
    class Errors {
        static argumentNull(argumentName: string): Error;
    }
}
declare namespace pdesigner {
    interface PageData {
        id?: string;
        name?: string;
        remark?: string;
        isDefault?: boolean;
        showMenu?: boolean;
        className?: string;
        createDateTime?: Date;
        version?: number;
        templateId?: string;
        /**
         * 页面的类型，默认为 page
         * snapshoot 为页面快照
         * productTemplate 为商品模板
         * page 为普通页面
         * system 为系统页面
         */
        type?: 'snapshoot' | 'productTemplate' | 'page' | 'system';
        controls: ControlData[];
    }
    interface ControlData {
        id: string;
        name: string;
        data?: any;
        selected?: boolean | 'disabled';
        position: 'header' | 'view' | 'footer';
        /**
         * 是否保存到数据库，默认保存，true 保存，false 不保存
         */
        save?: boolean;
    }
    interface ComponentDefine {
        name: string;
        displayName: string;
        icon: string;
        introduce: string;
        target?: 'view' | 'footer' | 'header';
        visible?: boolean;
        controlPath: string;
        editorPath: string;
    }
}
declare namespace pdesigner {
    interface Props extends ControlProps<any> {
        id?: string;
        style?: React.CSSProperties;
        className?: string;
    }
    const PageViewContext: React.Context<{
        pageView: any;
    }>;
    type ControlPair = {
        control: Control<any, any>;
        controlType: React.ComponentClass<any>;
    };
    type State = {};
    function guid(): string;
    /**
     * 移动端页面，将 PageData 渲染为移动端页面。
     */
    class PageView extends Control<Props, State> {
        private _hasEditor;
        element: HTMLElement;
        constructor(props: any);
        hasEditor: boolean;
        persistentMembers: never[];
        render(): JSX.Element;
    }
}
