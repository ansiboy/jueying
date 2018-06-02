namespace pdesigner {
    let h = React.createElement;

    export interface ControlProps<T> extends React.Props<T> {
    }

    let customControlTypes: { [key: string]: React.ComponentClass<any> } = {}


    export abstract class Control<P extends ControlProps<any>, S> extends React.Component<P, S> {
        private _designer: PageDesigner;
        private originalComponentDidMount: () => void;
        private originalRender: () => React.ReactNode;

        static componentsDir = 'components';
        static selectedClassName = 'selected';

        protected hasCSS = false;

        children = new Array<Control<any, any>>();

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

        get hasEditor() {
            return true;
        }

        private static componentDidMount() {
            let self = this as any as Control<any, any>;
            if (self.originalComponentDidMount)
                self.originalComponentDidMount();

            self.element.onclick = function (e) {
                if (!self.hasEditor) {
                    return;
                }

                let className = self.element.className;
                if (className.indexOf(Control.selectedClassName) < 0) {
                    className = `${className} ${Control.selectedClassName}`;
                    self.element.className = className;
                }
                e.stopPropagation();
                e.cancelBubble = true;
                self._designer.controlSelected.fire(self._designer, self)
            }

            self._designer.controlComponentDidMount.fire(self._designer, self);
        }

        private static render() {
            let self = this as any as Control<any, any>;
            if (typeof self.originalRender != 'function')
                return null;

            return <DesignerContext.Consumer>
                {context => {
                    self._designer = context.designer;
                    let result = context.designer != null ?
                        (self.originalRender as Function)(createDesignTimeElement) :
                        (self.originalRender as Function)(React.createElement);

                    return result;
                }}
            </DesignerContext.Consumer>
        }

        static async create(description: ControlDescription) {
            let controlName = description.name;
            let children = description.children || [];
            let data = description.data || {};
            data.id = description.id;

            let controlType = customControlTypes[controlName];
            if (controlType == null && controlName[0].toUpperCase() == controlName[0]) {
                let name = controlName.endsWith('Control') ?
                    controlName.substr(0, controlName.length - 'Control'.length) :
                    controlName;

                let controlPath = `${Control.componentsDir}/${name}/control`;
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
                Control.register(controlType);
            }

            children.forEach(o => {
                o.data.key = o.id;
                o.data.id = o.id;
            });
            let childElements: React.ReactElement<any>[];
            if (children.length)
                childElements = await Promise.all(children.map(o => this.create(o)));

            let controlElement = React.createElement(
                controlType ? controlType : controlName,
                data, childElements
            )

            return controlElement;
        }

        static register(controlType: React.ComponentClass<any>) {
            customControlTypes[controlType.name] = controlType;
        }

        export(): ControlDescription {
            let children = this.children || [];
            let members = this.persistentMembers || [];
            let state = this.state || {};
            let data = {};

            for (let key in state) {
                if (members.indexOf(key as keyof S) >= 0)
                    data[key] = state[key];
            }

            let controlDescription: ControlDescription = {
                id: this.id,
                name: this.constructor.name,
                data,
                children: children.map(o => o.export())
            }
            return controlDescription;
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

        let args = [type, props];
        for (let i = 2; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        return React.createElement.apply(React, args);
    }




}