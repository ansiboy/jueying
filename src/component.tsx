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


// import * as React from "react";
// import { PageDesigner } from "./page-designer";
// import { ComponentWrapper, ComponentAttribute, ComponentWrapperDrapData } from "./component-wrapper";
// import { PropEditorConstructor } from "./prop-editor";
// import { ComponentData } from "./models";
// import { appendClassName, removeClassName, classNames } from "./style";
// import { constants } from "./comon";
// import { ComponentPanel } from "./component-toolbar";
// import { Errors } from './errors'


module jueying {
    type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element


    export interface ComponentProps<T> extends React.Props<T> {
        id?: string,
        name?: string,
        className?: string,
        style?: React.CSSProperties,
        selected?: boolean,
        text?: string,
        parent_id?: string;
        attr?: ComponentAttribute
    }

    type DesignerContextValue = { designer: PageDesigner | null };
    export const DesignerContext = React.createContext<DesignerContextValue>({ designer: null });
    export const ComponentWrapperContext = React.createContext<ComponentWrapper>(null);

    export interface PropEditorInfo {
        propNames: string[],
        editorType: PropEditorConstructor, group: string
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

        private static controlPropEditors: {
            [controlClassName: string]: PropEditorInfo[]
        } = {}

        static getPropEditors(controlClassName: string): PropEditorInfo[] {
            let classEditors = this.controlPropEditors[controlClassName] || []
            return classEditors
        }

        static getPropEditor<T, K extends keyof T, K1 extends keyof T[K]>(controlClassName: string, propName: K, propName1: K1): PropEditorInfo
        static getPropEditor<T, K extends keyof T>(controlClassName: string, propName: string): PropEditorInfo
        static getPropEditor(controlClassName: string, ...propNames: string[]): PropEditorInfo {
            return this.getPropEditorByArray(controlClassName, propNames)
        }

        /** 通过属性数组获取属性的编辑器 */
        static getPropEditorByArray(controlClassName: string, propNames: string[]) {
            let classEditors = this.controlPropEditors[controlClassName] || []
            let editor = classEditors.filter(o => o.propNames.join('.') == propNames.join('.'))[0]
            return editor
        }

        static setPropEditor(componentType: React.ComponentClass | string, propName: string, editorType: PropEditorConstructor, group?: string, ): void {
            group = group || ''
            let propNames = (propName as string).split('.')

            let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name
            let classProps = Component.controlPropEditors[className] = Component.controlPropEditors[className] || []
            for (let i = 0; i < classProps.length; i++) {
                let propName1 = classProps[i].propNames.join('.')
                let propName2 = propNames.join('.')
                if (propName1 == propName2) {
                    classProps[i].editorType = editorType
                    return
                }
            }
            classProps.push({ propNames: propNames, editorType, group })
        }

        /**
         * 将持久化的元素数据转换为 ReactElement
         * @param args 元素数据
         */
        static createElement(args: ComponentData, h?: ReactFactory): React.ReactElement<any> | null {

            h = h || React.createElement

            try {

                let type: string | React.ComponentClass | React.ComponentType = args.type;
                let componentName = args.type;
                let controlType = Component.componentTypes[componentName];
                if (controlType) {
                    type = controlType;
                }

                let children: (React.ReactElement<any> | string)[] = args.children ? args.children.map(o => Component.createElement(o, h)) : [];
                let props: ComponentProps<any> = args.props == null ? {} : JSON.parse(JSON.stringify(args.props));
                let result: JSX.Element


                if (typeof type == 'string') {
                    if (props.text) {
                        children.push(props.text)
                    }

                    //=========================================
                    // props.text 非 DOM 的 prop，并且已经使用完
                    delete props.text
                    //=========================================
                }

                type = type == Component.Fragment ? React.Fragment : type
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

    type FormContextValue = { form: ContainerHost | null };
    const FormContext = React.createContext<FormContextValue>({ form: null });

    export class ContainerHost extends React.Component<ComponentProps<ContainerHost>, { children: React.ReactElement<ComponentProps<ContainerHost>>[] }> {
        constructor(props: ComponentProps<ContainerHost>) {
            super(props)

            let children: React.ReactElement<ComponentProps<any>>[] = this.children(props)
            this.state = { children }
        }
        private children(props: ComponentProps<ContainerHost>): React.ReactElement<ComponentProps<any>>[] {
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
        componentWillReceiveProps(props: ComponentProps<ContainerHost>) {
            let children: React.ReactElement<ComponentProps<any>>[] = this.children(props)
            this.setState({ children })
        }
        render() {
            let props = {} as any
            for (let key in this.props) {
                if (key == 'ref' || key == 'id')
                    continue

                props[key] = this.props[key]
            }

            props.style = Object.assign({ minHeight: 40 }, props.style)
            let children = this.state.children.filter(o => o.props.parent_id == null);
            return <FormContext.Provider value={{ form: this }}>
                {children}
            </FormContext.Provider>
        }
    }

    export class ComponentContainer extends React.Component<{ id: string }, {}>{
        private designer: PageDesigner;
        private host: ContainerHost;
        wraper: ComponentWrapper;

        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        private enableAppendDroppable(element: HTMLElement) {
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

                console.log(`dragover: left:${event.layerX} top:${event.layerX}`)
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

                let ctrl = ComponentPanel.getComponentData(event.dataTransfer)
                if (!ctrl)
                    return

                console.assert(this.props.id);
                console.assert(this.designer);
                ctrl.props.parent_id = this.props.id;
                console.assert(this.host != null, 'host is null')
                this.designer.appendComponent(this.host.props.id, ctrl)
            }
        }
        private enableMoveDroppable(element: HTMLElement) {
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

                    let propName: keyof ComponentProps<any> = 'parent_id'
                    this.designer.moveControl(dd.sourceElement.id, this.host.props.id)
                    this.designer.updateControlProps(dd.sourceElement.id, [propName], this.props.id)

                })
                .drop('end', (event, dd: ComponentWrapperDrapData) => {
                    if (dd.sourceElement.id == this.wraper.props.source.props.id)
                        return

                    removeClassName(element, 'active')
                })
        }

        render() {
            return <FormContext.Consumer>
                {(args) => {
                    let host = this.host = args.form
                    if (host == null) throw Errors.canntFindHost(this.props.id)

                    let children: React.ReactElement<ComponentProps<any>>[] = []
                    if (host.props && host.props.children) {
                        let arr: React.ReactElement<ComponentProps<any>>[]
                        if (Array.isArray(host.props.children)) {
                            arr = host.props.children as any
                        }
                        else {
                            arr = [host.props.children as any]
                        }
                        children = arr.filter((o: React.ReactElement<ComponentProps<any>>) => o.props.parent_id == this.props.id)
                    }

                    return <DesignerContext.Consumer>
                        {args => <ComponentWrapperContext.Consumer>
                            {wraper => {
                                this.wraper = wraper
                                console.assert(this.wraper != null)

                                let element = <React.Fragment>
                                    {this.props.children}
                                    {children}
                                </React.Fragment>

                                if (args.designer) {
                                    this.designer = args.designer
                                    element = <div className={classNames.formItem}
                                        ref={e => {
                                            if (!e) return
                                            this.enableAppendDroppable(e)
                                            this.enableMoveDroppable(e)
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
            </FormContext.Consumer>

        }
    }

    export const ContainerHostName = 'ContainerHost'
    Component.register(ContainerHostName, ContainerHost, { container: false })
}