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

namespace pdesigner {
    let h = React.createElement;

    export interface ControlProps<T> extends React.Props<T> {
        componentName?: string,
    }

    export interface ControlState {
        selected: boolean
    }

    let customControlTypes: { [key: string]: React.ComponentClass<any> | string } = {}


    export abstract class Control<P extends ControlProps<any>, S> extends React.Component<P, S> {
        private _componentName: string;
        private _pageView: PageView;
        private _designer: PageDesigner;
        private originalComponentDidMount: () => void;
        private originalRender: () => React.ReactNode;
        static componentsDir = 'components';
        static selectedClassName = 'control-selected';

        protected hasCSS = false;
        public hasEditor = true;

        abstract element: HTMLElement;

        constructor(props) {
            super(props);

            console.assert((this.props as any).id != null);

            this.originalRender = this.render;
            this.render = Control.render;

            this.originalComponentDidMount = this.componentDidMount;
            this.componentDidMount = Control.componentDidMount;
        }

        abstract get persistentMembers(): (keyof S)[];

        get id(): string {
            let id = (this.props as any).id;
            console.assert(id);
            return id;
        }

        get componentName() {
            if (!this._componentName)
                this._componentName = this.props.componentName;

            console.assert(this._componentName);
            return this._componentName;
        }

        static htmlDOMProps(props: any) {
            let result = {};
            if (!props) {
                return result;
            }
            let keys = ['id', 'style', 'className'];
            for (let key in props) {
                if (keys.indexOf(key) >= 0) {
                    result[key] = props[key];
                }
            }
            return result;
        }

        protected async loadControlCSS() {
            let componentName = this.componentName;
            console.assert(componentName != null);
            let path = `${Control.componentsDir}/${componentName}/control`;
            requirejs([`less!${path}`])
        }

        private static componentDidMount() {
            let self = this as any as Control<any, ControlState>;
            if (self.originalComponentDidMount)
                self.originalComponentDidMount();

            self.element.onclick = function (e) {
                if (!self.hasEditor || self.props.disabled) {
                    self.props.disabled ?
                        console.log(`Control ${self.constructor.name} is disabled.`) :
                        console.log(`Control ${self.constructor.name} has none editor.`);
                    return;
                }


                e.stopPropagation();
                e.cancelBubble = true;
                self._designer.selectControl(self);
            }


            self._designer.controlComponentDidMount.fire(self._designer, self);

            if (self.hasCSS) {
                self.loadControlCSS();
            }
        }

        private static render() {
            let self = this as any as Control<any, any>;
            return <DesignerContext.Consumer>
                {context => {
                    self._designer = context.designer;
                    let result =
                        <PageViewContext.Consumer>
                            {context1 => {
                                self._pageView = context1.pageView;
                                if (typeof self.originalRender != 'function')
                                    return null;

                                return context.designer != null ?
                                    (self.originalRender as Function)(createDesignTimeElement) :
                                    (self.originalRender as Function)(React.createElement)
                            }}
                        </PageViewContext.Consumer>

                    return result;
                }}
            </DesignerContext.Consumer>
        }

        static async create(description: ControlDescription) {
            let componentName = description.name;
            let children = description.children || [];
            let data = description.data || {};
            data.id = description.id;

            let controlType = customControlTypes[componentName];
            if (typeof controlType == 'string') {
                let controlPath = controlType;//`${Control.componentsDir}/${name}/control`;
                controlType = await new Promise<React.ComponentClass>((resolve, reject) => {
                    requirejs([controlPath],
                        (exports2) => {

                            let controlType: React.ComponentClass = exports2['default'];
                            if (controlType == null)
                                throw new Error(`Default export of file '${controlPath}' is null.`)

                            resolve(controlType);
                        },
                        (err) => reject(err)
                    )
                })
                console.assert(controlType != null);
                customControlTypes[componentName] = controlType;
            }

            if (controlType) {
                data.componentName = componentName;
            }
            else {
                console.log(`${componentName} control class is null.`);
            }

            children.forEach(o => {
                o.data = o.data || {};
                o.data.key = o.id;
                o.data.id = o.id;
            });
            let childElements: React.ReactElement<any>[];
            if (children.length)
                childElements = await Promise.all(children.map(o => this.create(o)));

            console.assert(data.id != null);
            let controlElement = React.createElement(
                controlType ? controlType : componentName,
                data, childElements
            )

            // console.assert(typeof controlElement.type == 'string', `Typeof ${componentName} control type is ${typeof controlElement.type} `);
            return controlElement;
        }

        static register(controlType: React.ComponentClass<any>);
        static register(controlName: string, controlType: React.ComponentClass<any>)
        static register(controlName: string, controlPath: string)
        static register(controlName: any, controlType?: React.ComponentClass<any> | string) {
            if (controlType == null && typeof controlName == 'function') {
                controlType = controlName;
                controlName = (controlType as React.ComponentClass<any>).name;
            }

            if (!controlName)
                throw Errors.argumentNull('controlName');

            if (!controlType)
                throw Errors.argumentNull('controlType');

            customControlTypes[controlName] = controlType;
        }

        private static getComponentNameByType(type: React.ComponentClass<any> | React.StatelessComponent<any>) {
            for (let key in customControlTypes) {
                if (customControlTypes[key] == type)
                    return key;
            }

            return null;
        }

        static export(control: Control<ControlProps<any>, any>) {
            let id = (control.props as any).id;
            console.assert(id != null);

            let name = control.componentName;
            console.assert(name != null);

            let data = Control.trimProps(control.props);
            let childElements: Array<React.ReactElement<any>>;
            if (control.props.children != null) {
                childElements = Array.isArray(control.props.children) ?
                    control.props.children as Array<React.ReactElement<any>> :
                    [control.props.children as React.ReactElement<any>];
            }

            let result: ControlDescription = { id, name };
            if (!this.isEmptyObject(data)) {
                result.data = data;
            }
            if (childElements) {
                result.children = childElements.map(o => Control.exportElement(o));
            }

            return result;
        }

        private static exportElement(element: React.ReactElement<any>): ControlDescription {
            let controlType = element.type;
            console.assert(controlType != null, `Element type is null.`);

            let id = element.props.id as string;
            let name = typeof controlType == 'function' ? this.getComponentNameByType(controlType) : controlType;
            let data = Control.trimProps(element.props);

            let childElements: Array<React.ReactElement<any>>;
            if (element.props.children) {
                childElements = Array.isArray(element.props.children) ?
                    element.props.children : [element.props.children];
            }

            let result: ControlDescription = { id, name };
            if (!this.isEmptyObject(data)) {
                result.data = data;
            }

            if (childElements) {
                result.children = childElements.map(o => this.exportElement(o));
            }
            return result;
        }

        private static trimProps(props: any) {
            let data = {};
            let skipFields = ['id', 'componentName', 'key', 'ref', 'children'];
            for (let key in props) {
                let isSkipField = skipFields.indexOf(key) >= 0;
                if (key[0] == '_' || isSkipField) {
                    continue;
                }
                data[key] = props[key];
            }
            return data;
        }

        private static isEmptyObject(obj) {
            if (obj == null)
                return true;

            let names = Object.getOwnPropertyNames(obj);
            return names.length == 0;
        }
    }

    //==============================================================    
    interface ComponentProp<T> extends React.Props<T> {
        onClick?: (event: MouseEvent, control: T) => void,
        createElement?: (type, props, ...children) => JSX.Element,
    }

    function createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProp<any>, ...children) {
        props = props || {};
        if (typeof type == 'string')
            props.onClick = () => { };
        else if (typeof type != 'string') {
            props.onClick = (event, control: Control<any, any>) => {
                if (control.context != null) {
                    control.context.designer.selecteControl(control, type);
                }
            }
        }
        if (type == 'a' && (props as any).href) {
            (props as any).href = 'javascript:';
        }
        else if (type == 'input') {
            delete props.onClick;
            (props as any).readOnly = true;
        }

        let args = [type, props];
        for (let i = 2; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        return React.createElement.apply(React, args);
    }




}