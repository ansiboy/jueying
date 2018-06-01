namespace pdesigner {
    let h = React.createElement;

    export interface ControlProps<T> extends React.Props<T> {
        id: string,
    }

    let customControls: { [key: string]: React.ComponentClass<any> } = {

    }

    export abstract class Control<P extends ControlProps<any>, S> extends React.Component<P, S> {
        private _designer: PageDesigner;
        private originalComponentDidMount: () => void;
        private originalRender: () => React.ReactNode;
        private _state: S;

        protected hasCSS = false;

        name: string;
        children = new Array<Control<any, any>>();

        abstract element: HTMLElement;

        constructor(props) {
            super(props);
            this.originalRender = this.render;
            this.render = function () {
                let self = this as Control<any, any>;
                if (typeof self.originalRender != 'function')
                    return null;

                return <DesignerContext.Consumer>
                    {context => {
                        // if (context.designer) {
                        //     console.assert(self.element != null);
                        //     self.element.onclick = function () {
                        //         context.designer.controlSelected.fire(context.designer, self)
                        //     }
                        // }
                        self._designer = context.designer;
                        let result = context.designer != null ?
                            (self.originalRender as Function)(createDesignTimeElement) :
                            (self.originalRender as Function)(React.createElement);

                        return result;
                    }}
                </DesignerContext.Consumer>
            }
            this.originalComponentDidMount = this.componentDidMount;
            this.componentDidMount = function () {

                let self = this as Control<any, any>;
                if (self.originalComponentDidMount)
                    self.originalComponentDidMount();

                self.element.onclick = function (e) {
                    e.stopPropagation();
                    e.cancelBubble = true;
                    self._designer.controlSelected.fire(self._designer, self)
                }
            }
        }

        abstract get persistentMembers(): (keyof S)[];

        get id(): string {
            return this.props.id;
        }

        get state(): S {
            return this._state;
        }

        /**
         * 重写 set state， 在第一次赋值，将 props 的持久化成员赋值过来。 
         */
        set state(value: S) {
            value = value || {} as S;
            if (this._state != null) {
                this._state = value;
                return;
            }

            var state = {} as any;
            let keys = this.persistentMembers || [];
            for (let i = 0; i < keys.length; i++) {
                var prop = (this.props as any)[keys[i]];
                if (prop !== undefined)
                    state[keys[i]] = prop;
            }

            this._state = Object.assign(value, state);;
        }

        get hasEditor() {
            return true;
        }

        static register(controlType: React.ComponentClass<any>) {
            customControls[controlType.name] = controlType;
        }

        static isRegister(name: string) {
            return customControls[name] != null;
        }

        private setStateTimes = 0;
        setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
        setState(state: S, callback?: () => any): void;
        setState(state: any, callback?: () => any) {
            // //=====================================================
            // // 忽略第一次设置，把第一次设置作为初始化
            // if (this.setStateTimes > 0)
            //     this.stateChanged.fire(this, state);
            // //=====================================================

            // this.setStateTimes = this.setStateTimes + 1;
            return super.setState(state, callback);
        }

        componentWillReceiveProps() {
            // debugger;
            let keys = this.persistentMembers || [];
            for (let i = 0; i < keys.length; i++) {
                var prop = (this.props as any)[keys[i]];
                if (prop !== undefined)
                    this.state[keys[i]] = prop;
            }
        }

        static createElement(description: ControlDescription) {
            let controlType = customControls[description.name];
            let children = description.children || [];
            let data = description.data || {};
            data.id = description.id;
            let element = React.createElement(
                controlType ? controlType : description.name,
                data,
                children.length > 0 ? children.map(o => {
                    o.data.key = o.id;
                    return Control.createElement(o);
                }) : null
            )
            return element;
        }

        export(): ControlDescription {
            let children = this.children || [];
            let members = this.persistentMembers || [];
            let state = this.state || {};
            let data = { id: this.props.id };

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

    // export class GenericControl extends Control<any, any> {
    //     get persistentMembers() {
    //         return [];
    //     };
    //     render() {
    //         React.createElement("input")
    //         return <div></div>;
    //     }
    // }

    export const componentsDir = 'components';
    // const pageClassName = 'mobile-page';

    // interface IMobilePageDesigner {
    //     selecteControl(control: Control<any, any>, controlType: React.ComponentClass<any>);
    //     // isDesignMode?: boolean;
    // }

    // //==============================================================    
    interface ComponentProp<T> extends React.Props<T> {
        onClick?: (event: MouseEvent, control: T) => void,
        createElement?: (type, props, ...children) => JSX.Element,
    }
    // interface ControlProps<T> extends React.Props<T> {
    //     mobilePage: any
    // }
    // interface ControlConstructor {
    //     new(props): Control<any, any>
    // }


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

    // let components: { [key: string]: React.ComponentClass<any> } = {};
    // function component(name: string) {
    //     return function (constructor: React.ComponentClass<any>) {
    //         components[name] = constructor;
    //     }
    // }

    // export interface ComponentClass<T> extends React.ComponentClass<T> {
    //     attributes: { editorPath?: string, editorExport?: string }
    // }

    // export interface ControlState {
    //     persistentMembers: (keyof this)[];
    // }


}