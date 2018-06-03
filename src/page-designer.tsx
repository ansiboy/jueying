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

    export interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ControlDescription,
        componentsDirectory?: string,
    }

    export interface PageDesignerState {
        pageData: ControlDescription,
        selectedControlId?: string,
    }

    export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {


        private element: HTMLElement;
        controlSelected = chitu.Callbacks<PageDesigner, Control<any, any>>();
        controlComponentDidMount = chitu.Callbacks<PageDesigner, Control<any, any>>();

        constructor(props) {
            super(props);
            this.state = { pageData: this.props.pageData };

            this.controlSelected.add((sender, control) => {
                let previousSelected = this.findSelectedElement();// || pageViwe.element;
                if (previousSelected) {
                    previousSelected.className = previousSelected.className.replace(Control.selectedClassName, '');
                }

                if (control) {
                    let className = control.element.className;
                    if (className.indexOf(Control.selectedClassName) < 0) {
                        className = `${className} ${Control.selectedClassName}`;
                        control.element.className = className;
                    }
                }
            })

        }

        static createContext<T extends { designer: PageDesigner }>(value: T) {
            return React.createContext(value)
        }

        updateControlProps(controlId: string, props: any): any {
            let controlDescription = this.findControl(controlId);
            console.assert(controlDescription != null);
            console.assert(props != null, 'props is null');

            controlDescription.data = controlDescription.data || {};
            for (let key in props) {
                controlDescription.data[key] = props[key];
            }

            this.setState(this.state);
        }

        sortControlChildren(controlId: string, childIds: string[]): any {
            let c = this.findControl(controlId);
            c.children = childIds.map(o => c.children.filter(a => a.id == o)[0]).filter(o => o != null);
            this.setState(this.state);
        }

        async sortChildren(parentId: string, childIds: string[]) {
            if (!parentId) throw Errors.argumentNull('parentId');
            if (!childIds) throw Errors.argumentNull('childIds');

            let pageData = this.state.pageData;
            let parentControl = this.findControl(parentId);
            console.assert(parentControl != null);
            console.assert(parentControl.children != null);
            console.assert(parentControl.children.length == childIds.length);

            parentControl.children = childIds.map(o => {
                let child = parentControl.children.filter(a => a.id == o)[0];
                console.assert(child != null, `child ${o} is null`);
                return child;
            });

            this.setState(this.state);
        }
        async appendControl(parentId: string, childControl: ControlDescription, childIds: string[]) {
            if (!parentId) throw Errors.argumentNull('parentId');
            if (!childControl) throw Errors.argumentNull('childControl');
            if (!childIds) throw Errors.argumentNull('childIds');

            let parentControl = this.findControl(parentId);
            console.assert(parentControl != null);
            parentControl.children = parentControl.children || [];
            parentControl.children.push(childControl);

            this.sortChildren(parentId, childIds);
        }

        /**
         * 选择指定的控件
         * @param control 指定的控件，可以为空，为空表示清空选择。
         */
        selectControl(control: Control<any, any>): void {
            this.controlSelected.fire(this, control)
        }

        private removeControl(controlId: string) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;

            let isRemoved = this.removeControlFrom(controlId, pageData.children);
            if (isRemoved) {
                this.setState({ pageData });
                this.selectControl(null);
            }
        }

        private removeControlFrom(controlId: string, collection: ControlDescription[]): boolean {
            let controlIndex: number;
            for (let i = 0; i < collection.length; i++) {
                if (controlId == collection[i].id) {
                    controlIndex = i;
                    break;
                }
            }

            if (controlIndex == null) {
                for (let i = 0; i < collection.length; i++) {
                    let o = collection[i];
                    if (o.children && o.children.length > 0) {
                        let isRemoved = this.removeControlFrom(controlId, o.children)
                        if (isRemoved) {
                            return true;
                        }
                    }
                }

                return false;
            }

            if (controlIndex == 0) {
                collection.shift();
            }
            else if (controlIndex == collection.length - 1) {
                collection.pop();
            }
            else {
                collection.splice(controlIndex, 1);
            }

            return true;
        }

        private findSelectedElement(): HTMLElement {
            return this.element.querySelector(`.${Control.selectedClassName}`);// || pageViwe.element;
        }

        private findControl(controlId: string) {
            let pageData = this.state.pageData;
            let stack = new Array<ControlDescription>();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.id == controlId)
                    return item;

                stack.push(...(item.children || []));
            }

            return null;
        }

        private onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
            const DELETE_KEY_CODE = 46;
            if (e.keyCode == DELETE_KEY_CODE) {
                let element = this.findSelectedElement();
                if (element == null) {
                    return;
                }

                console.assert(element.id);
                this.removeControl(element.id);
            }
        }

        render() {
            let designer = this;
            return <div className="pdesigner" ref={(e: HTMLElement) => this.element = e || this.element}
                onKeyDown={(e) => this.onKeyDown(e)}>
                <DesignerContext.Provider value={{ designer }}>
                    {this.props.children}
                </DesignerContext.Provider>
            </div >;
        }
    }

    export const DesignerContext = PageDesigner.createContext({ designer: null });
}