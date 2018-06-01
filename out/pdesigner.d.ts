/// <reference types="react" />
declare namespace pdesigner {
    interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>;
    }
    abstract class Editor<P extends EditorProps, S> extends React.Component<P, S> {
        private controlType;
        private _state;
        validate: () => Promise<boolean>;
        abstract element: HTMLElement;
        constructor(props: any);
        /**
         * 重写 set state， 在第一次赋值，将控件中 state 的持久化成员赋值过来。
         */
        state: S;
        componentDidUpdate(): void;
        static path(controlName: string): string;
        protected loadEditorCSS(): void;
        bindInputElement(e: HTMLInputElement | HTMLSelectElement, fieldName: keyof S): any;
        bindInputElement<T>(e: HTMLInputElement | HTMLSelectElement, obj: T, fieldName?: keyof T, fieldType?: 'number' | 'string'): any;
        bindCheckElement(e: HTMLInputElement | HTMLSelectElement, fieldName: keyof S, fieldType: 'number' | 'string' | 'boolean'): any;
        bindCheckElement<T>(e: HTMLInputElement | HTMLSelectElement, obj: T, fieldName: keyof T, fieldType: 'number' | 'string' | 'boolean'): any;
        static register(controlTypeName: string, editorType: React.ComponentClass<any>): void;
        static createEditorElement(control: Control<any, any>): React.ComponentElement<any, React.Component<any, React.ComponentState, any>>;
        static isRegister(controlTypeName: string): boolean;
    }
}
declare namespace pdesigner {
    interface ControlProps<T> extends React.Props<T> {
        id: string;
    }
    abstract class Control<P extends ControlProps<any>, S> extends React.Component<P, S> {
        private _designer;
        private originalComponentDidMount;
        private originalRender;
        private _state;
        protected hasCSS: boolean;
        name: string;
        children: Control<any, any>[];
        abstract element: HTMLElement;
        constructor(props: any);
        readonly abstract persistentMembers: (keyof S)[];
        readonly id: string;
        /**
         * 重写 set state， 在第一次赋值，将 props 的持久化成员赋值过来。
         */
        state: S;
        readonly hasEditor: boolean;
        static register(controlType: React.ComponentClass<any>): void;
        static isRegister(name: string): boolean;
        private setStateTimes;
        setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
        setState(state: S, callback?: () => any): void;
        componentWillReceiveProps(): void;
        static createElement(description: ControlDescription): any;
        export(): ControlDescription;
    }
    const componentsDir = "components";
}
declare namespace pdesigner {
    interface ControlPlaceholderState {
        controls: ControlDescription[];
    }
    interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties;
        emptyElement?: JSX.Element;
    }
    class ControlPlaceholder extends Control<ControlPlaceholderProps, ControlPlaceholderState> {
        private designer;
        private controls;
        element: HTMLElement;
        constructor(props: any);
        readonly persistentMembers: any[];
        private sortableElement(element, designer);
        renderControls(controls: ControlDescription[], pageView: PageView): JSX.Element;
        renderDesigntimeControls(controls: ControlDescription[], pageView: PageView): JSX.Element;
        renderRuntimeControls(controls: ControlDescription[], pageView: PageView): JSX.Element[];
        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        createControlInstance(controlData: ControlDescription, element: HTMLElement, pageView: PageView): Promise<ControlPair>;
        componentDidMount(): void;
        render(h?: any): JSX.Element;
    }
}
declare namespace pdesigner {
    interface ControlToolbarProps extends React.Props<ControlToolbar> {
        componets: ComponentDefine[];
        style?: React.CSSProperties;
        className?: string;
    }
    interface ControlToolbarState {
    }
    class ControlToolbar extends React.Component<ControlToolbarProps, ControlToolbarState> {
        designer: PageDesigner;
        private toolbarElement;
        static connectorElementClassName: string;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare namespace pdesigner {
}
declare namespace pdesigner {
    interface EditorPanelState {
        activeControlId: string;
        editors: {
            [key: string]: React.ReactElement<any>;
        };
    }
    interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
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
    const DesignerContext: React.Context<{
        designer: PageDesigner;
    }>;
    interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ControlDescription;
    }
    interface PageDesignerState {
        pageData: ControlDescription;
    }
    class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
        private element;
        controlSelected: chitu.Callback1<PageDesigner, Control<any, any>>;
        private componentDefines;
        constructor(props: any);
        appendControl(parentId: string, childControl: ControlDescription, beforeControlId?: string): Promise<void>;
        registerEditor(componentName: string): any;
        private loadComponent(componentName);
        addComponentDefine(item: ComponentDefine): void;
        findControl(controlId: string): ControlDescription;
        createEditorElement(control: Control<any, any>): Promise<React.ReactElement<{}>>;
        render(): JSX.Element;
    }
}
declare namespace pdesigner {
    interface Props extends ControlProps<any> {
        style?: React.CSSProperties;
        className?: string;
    }
    const PageViewContext: React.Context<{
        pageView: PageView;
    }>;
    interface ControlDescription {
        name: string;
        id: string;
        data: any;
        selected?: boolean | 'disabled';
        children?: ControlDescription[];
    }
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
        private screenElement;
        private selecteControl;
        private headerControlsCount;
        private footerControlsCount;
        private viewControlsCount;
        private createdControlCount;
        private footerElement;
        private headerElement;
        controls: (Control<any, any> & {
            controlId: string;
            controlName: string;
        })[];
        element: HTMLElement;
        constructor(props: any);
        persistentMembers: never[];
        static getInstanceByElement(element: HTMLElement): PageView;
        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        createControlInstance(controlData: ControlDescription, element: HTMLElement): Promise<ControlPair>;
        /**
         * 获取控件在类型
         * @param controlName 控件的名称
         */
        static getControlType(controlName: string): Promise<{
            Control: React.ComponentClass<any>;
            Props: {
                new ();
            };
        }>;
        componentDidMount(): Promise<void>;
        renderRuntimeControls(controls: ControlDescription[]): JSX.Element[];
        merge(pageData: PageData, productTemplate: PageData): void;
        render(): JSX.Element;
    }
}
