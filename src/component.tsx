import * as React from "react";
import { ComponentAttribute, ComponentWrapper, ComponentWrapperDrapData } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import { PropEditorConstructor } from "./prop-editor";
import { ComponentData } from "./models";
import { Errors } from "./errors";
import { appendClassName, removeClassName, classNames } from "./style";
import { constants, guid, proptDisplayNames, Callback } from "./common";
import { ComponentPanel } from "./component-panel";

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




type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element


export interface ComponentProps<T> extends React.Props<T> {
    id?: string,
    name?: string,
    className?: string,
    style?: React.CSSProperties,
    selected?: boolean,
    text?: string,
    parentid?: string;
    attr?: ComponentAttribute
}

type DesignerContextValue = { designer: PageDesigner | null };
export const DesignerContext = React.createContext<DesignerContextValue>({ designer: null });
export const ComponentWrapperContext = React.createContext<ComponentWrapper>(null);

export interface PropEditorInfo {
    // propNames: string[],
    propName: string,
    editorType: PropEditorConstructor, group: string,
}

export function component<T extends React.Component>(args?: ComponentAttribute) {
    return function (constructor: { new(...args): T }) {
        if (PageDesigner) {
            Component.setAttribute(constructor.name, args)
        }

        Component.register(constructor.name, constructor)
        return constructor
    }
}

interface SetPropEditorOptions {
    componentType: React.ComponentClass | string,
    propName: string,
    editorType: PropEditorConstructor,
    group?: string,
    display?: ComponentPropEditorDisplay,
    displayName?: string,
}

/** 组件是否显示回调函数 */
type ComponentPropEditorDisplay = (componentData: ComponentData) => boolean;
type CreateElementContext = { components: React.Component[], componentTypes: string[] };

export class Component {

    //==========================================
    // 用于创建 React 的 React.Fragment 
    static readonly Fragment = ""
    //==========================================

    private static defaultComponentAttribute: ComponentAttribute = {
        container: false, movable: false, showHandler: false, resize: false
    }

    private static componentAttributes: { [key: string]: ComponentAttribute } = {

        'div': { container: true, movable: true, showHandler: true, resize: true },

        'img': { container: false, movable: true, resize: true },

        'label': { movable: true },

        'ul': { container: false, movable: true, showHandler: true, resize: false },
        'li': { container: true, movable: false, },

        'table': { container: false, movable: true, showHandler: true, resize: true },
        'thead': { container: false, movable: false },
        'tbody': { container: false, movable: false },
        'tfoot': { container: false, movable: false },
        'tr': { container: false, movable: false },
        'td': { container: true, movable: false },
    }

    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    static setAttribute(typename: string, attr: ComponentAttribute) {
        Component.componentAttributes[typename] = attr
    }

    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */
    static getAttribute(type: string | React.ComponentClass<any>) {
        let typename = typeof type == 'string' ? type : type.name
        let attr = Component.componentAttributes[typename]
        return Object.assign({ type }, Component.defaultComponentAttribute, attr || {})
    }

    private static componentPropEditors: {
        [controlClassName: string]: PropEditorInfo[] | null
    } = {};

    private static componentPropEditorDisplay: {
        [controlClassName: string]: ComponentPropEditorDisplay | null
    } = {};


    static getPropEditors(componentData: ComponentData): PropEditorInfo[] {
        let componentType: string = componentData.type;
        let result: PropEditorInfo[] = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propName;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;

            result.push(propEditorInfo[i]);
        }

        return result;
        // let classEditors = this.componentPropEditors[componentType] || []
        // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        // return classEditors
    }

    static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo
    static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo
    static getPropEditor(controlClassName: string, propName: string): PropEditorInfo {
        return this.getPropEditorByArray(controlClassName, propName)
    }

    /** 通过属性数组获取属性的编辑器 */
    private static getPropEditorByArray(controlClassName: string, propNames: string) {
        let classEditors = this.componentPropEditors[controlClassName] || []
        let editor = classEditors.filter(o => o.propName == propNames)[0]
        return editor
    }

    /** 设置组件属性编辑器 */
    static setPropEditor(options: SetPropEditorOptions): void;
    static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string): void;
    static setPropEditor(componentTypeOrOptions: React.ComponentClass | string | SetPropEditorOptions, propName?: string, editorType?: PropEditorConstructor, group?: string): void {

        let componentType: React.ComponentClass | string;
        let editorDisplay: ComponentPropEditorDisplay;
        if (typeof componentTypeOrOptions == "object") {
            let options = componentTypeOrOptions as SetPropEditorOptions;
            componentType = options.componentType;
            propName = options.propName;
            editorType = options.editorType;
            group = options.group;
            editorDisplay = options.display;
            if (options.displayName != null) {
                proptDisplayNames[propName] = options.displayName;
            }
        }
        else {
            componentType = componentTypeOrOptions;
        }

        group = group || '';

        // 属性可能为导航属性,例如 style.width
        let propNames = (propName as string).split('.');

        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || []
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.')
            if (propName1 == propName2) {
                classProps[i].editorType = editorType
                return
            }
        }
        classProps.push({ propName, editorType, group })
    }

    static createElement(componentData: ComponentData, h?: ReactFactory): React.ReactElement<any> | null {
        return Component._createElement(componentData, { components: [], componentTypes: [] }, h);
    }

    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */
    private static _createElement(componentData: ComponentData, context: CreateElementContext, h?: ReactFactory): React.ReactElement<any> | null {
        if (!componentData) throw Errors.argumentNull('componentData')

        h = h || React.createElement
        try {

            let type: string | React.ComponentClass | React.ComponentType = componentData.type;
            let componentName = componentData.type;
            let controlType = Component.componentTypes[componentName];
            if (controlType) {
                type = controlType;
            }

            let children: (React.ReactElement<any> | string)[] = componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];
            let props: ComponentProps<any> = componentData.props == null ? {} : Object.assign({}, componentData.props);//JSON.parse(JSON.stringify(componentData.props));
            if (controlType != null && controlType["defaultProps"]) {
                props = Object.assign({}, controlType["defaultProps"], props);
            }

            let result: JSX.Element


            if (typeof type == 'string') {
                if (props.text) {
                    children.push(props.text)
                }

                //=========================================
                // props.text 非 DOM 的 prop，并且已经使用完
                delete props.text
                if (h == React.createElement) {
                    delete props.attr
                }
                //=========================================
            }


            let masterPage: MasterPage;
            type = type == Component.Fragment ? React.Fragment : type
            let ref = props.ref;
            props.ref = function (e: any) {

                if (typeof ref == "function")
                    ref(e);

                if (e instanceof MasterPage) {
                    masterPage = e;
                    for (let i = 0; i < context.componentTypes.length; i++) {
                        let typeName = context.componentTypes[i];
                        let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
                        childComponents.push(context.components[i]);
                    }
                }
                else if (e != null) {
                    context.components.push(e);
                    context.componentTypes.push(typeof type == "string" ? type : type.name);
                    // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
                }
            };

            result = h(type, props, ...children);
            return result
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }

    private static componentTypes = {} as { [key: string]: React.ComponentClass<any> | string }
    static register(componentName: string, componentType: React.ComponentClass<any>, attr?: ComponentAttribute): void {
        if (componentType == null && typeof componentName == 'function') {
            componentType = componentName;
            componentName = (componentType as React.ComponentClass<any>).name;
            (componentType as any)['componentName'] = componentName;
        }

        if (!componentName)
            throw Errors.argumentNull('componentName');

        if (!componentType)
            throw Errors.argumentNull('componentType');

        Component.componentTypes[componentName] = componentType;
        if (attr)
            Component.setAttribute(componentName, attr)
    }

}


export const MasterPageName = 'MasterPage'
type MasterPageContextValue = { master: MasterPage | null };
export const MasterPageContext = React.createContext<MasterPageContextValue>({ master: null });

export class MasterPage extends React.Component<ComponentProps<MasterPage>, { children: React.ReactElement<ComponentProps<MasterPage>>[] }> {

    childComponents: { [key: string]: React.Component[] } = {};

    constructor(props: ComponentProps<MasterPage>) {
        super(props)

        let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
        this.state = { children };
    }
    private static children(props: ComponentProps<MasterPage>): React.ReactElement<ComponentProps<any>>[] {
        let arr = props.children == null ? [] :
            Array.isArray(props.children) ? props.children : [props.children];

        let children: React.ReactElement<ComponentProps<any>>[] = []
        arr.forEach(o => {
            if (!React.isValidElement(o))
                return

            children.push(o as React.ReactElement<ComponentProps<any>>)
        })

        return children
    }

    static getDerivedStateFromProps(props: ComponentProps<MasterPage>) {
        let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
        return { children } as MasterPage["state"];
    }

    render() {
        let props = {} as any
        for (let key in this.props) {
            if (key == 'ref' || key == 'id')
                continue

            props[key] = this.props[key]
        }

        props.style = Object.assign({ minHeight: 40 }, props.style)
        let children = this.state.children.filter(o => o.props.parentid == null);

        let master = this;
        console.assert(master != null);
        return <MasterPageContext.Provider value={{ master }}>
            {children}
        </MasterPageContext.Provider>
    }
}
Component.register(MasterPageName, MasterPage, { container: false })

/**
 * 占位符，用于放置控件
 */
export class PlaceHolder extends React.Component<{ id: string, empty?: string | JSX.Element }, {}>{
    private element: HTMLElement;

    constructor(props: PlaceHolder["props"]) {
        super(props)

        if (!this.props.id) {
            throw Errors.placeHolderIdNull()
        }
    }

    private designer: PageDesigner;
    private wraper: ComponentWrapper;

    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    private enableAppendDroppable(element: HTMLElement, master: MasterPage) {
        if (element.getAttribute('enable-append-droppable'))
            return

        element.setAttribute('enable-append-droppable', 'true')

        console.assert(element != null)
        element.addEventListener('dragover', function (event) {
            event.preventDefault()
            event.stopPropagation()

            element.className = appendClassName(element.className || '', 'active')

            let componentName = event.dataTransfer.getData(constants.componentData)
            if (componentName)
                event.dataTransfer.dropEffect = "copy"
            else
                event.dataTransfer.dropEffect = "move"

            console.log(`dragover: left:${(event as any).layerX} top:${(event as any).layerX}`)
        })

        let func = function (event) {
            event.preventDefault()
            event.stopPropagation()
            element.className = removeClassName(element.className, 'active')
        }
        element.addEventListener('dragleave', func)
        element.addEventListener('dragend', func)
        element.addEventListener('dragexit', func)

        element.ondrop = (event) => {
            event.preventDefault()
            event.stopPropagation()

            element.className = removeClassName(element.className, 'active')

            let ctrl: ComponentData;
            if (event.dataTransfer)
                ctrl = ComponentPanel.getComponentData(event.dataTransfer);

            if (!ctrl)
                return

            console.assert(this.props.id != null);
            console.assert(this.designer != null);
            ctrl.props.parentid = this.props.id;
            console.assert(master != null, 'host is null')
            this.designer.appendComponent(master.props.id, ctrl)
        }
    }
    private enableMoveDroppable(element: HTMLElement, host: MasterPage) {
        if (element.getAttribute('enable-move-droppable'))
            return

        element.setAttribute('enable-move-droppable', 'true')

        $(element)
            .drop('start', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                appendClassName(element, 'active')
            })
            .drop('drop', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                let componentData = this.designer.findComponentData(dd.sourceElement.id)
                console.assert(componentData != null)

                this.designer.moveComponent(dd.sourceElement.id, host.props.id)
                this.designer.updateComponentProps({
                    componentId: "string", propName: "string", value: "any"
                })//dd.sourceElement.id, propName, this.props.id
            })
            .drop('end', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                removeClassName(element, 'active')
            })
    }
    render() {
        let empty = this.props.empty || <div key={guid()} className="empty">可以拖拉控件到这里</div>
        return <MasterPageContext.Consumer>
            {(args) => {
                let master = args.master
                if (master == null) throw Errors.canntFindMasterPage(this.props.id)

                let children: (typeof empty)[] = []
                if (master.props && master.props.children) {
                    let arr: React.ReactElement<ComponentProps<any>>[]
                    if (Array.isArray(master.props.children)) {
                        arr = master.props.children as any
                    }
                    else {
                        arr = [master.props.children as any]
                    }
                    children = arr.filter((o: React.ReactElement<ComponentProps<any>>) => o.props.parentid != null && o.props.parentid == this.props.id)
                }


                return <DesignerContext.Consumer>
                    {args => <ComponentWrapperContext.Consumer>
                        {wraper => {
                            this.wraper = wraper
                            console.assert(this.wraper != null)

                            if (args.designer != null && children.length == 0) {
                                children = [empty]
                            }

                            let element = <React.Fragment>
                                {this.props.children}
                                {children}
                            </React.Fragment>

                            if (args.designer) {
                                this.designer = args.designer
                                element = <div key={guid()} className={classNames.placeholder}
                                    ref={e => {
                                        if (!e) return
                                        this.element = e;
                                        this.enableAppendDroppable(e, master)
                                        this.enableMoveDroppable(e, master)
                                    }}>
                                    {element}
                                </div>
                            }

                            return element
                        }}
                    </ComponentWrapperContext.Consumer>
                    }
                </DesignerContext.Consumer>
            }}
        </MasterPageContext.Consumer>

    }
}

Component.register('PlaceHolder', PlaceHolder)

/** 用于将 ComponentData 显示为组件 */
export class PageView extends React.Component<{ pageData: ComponentData }, {}> {
    constructor(props: PageView["props"]) {
        super(props)

        if (!this.props.pageData)
            throw Errors.propCanntNull(PageView.name, 'pageData')
    }
    render() {
        let element = Component.createElement(this.props.pageData)
        return element
    }
}

export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
        debugger
    }

    render() {
        let { error } = this.state || {} as this["state"];
        if (error) {
            // You can render any custom fallback UI
            return <div className="error">
                <div>{error.message}</div>
                <div>{error.stack}</div>
            </div>;
        }
        return this.props.children;
    }
}
