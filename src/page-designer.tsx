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
        }

        static createContext<T extends { designer: PageDesigner }>(value: T) {
            return React.createContext(value)
        }

        // selectControl(controlId: string): any {
        //     let c = this.findControl(controlId);
        //     console.assert(c != null);
        //     this.setState({ selectedControlId: c.id });
        // }

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

        findControl(controlId: string) {
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

        render() {
            let designer = this;
            return <div className="pdesigner" ref={(e: HTMLElement) => this.element = e || this.element}>
                <DesignerContext.Provider value={{ designer }}>
                    {this.props.children}
                </DesignerContext.Provider>
            </div >;
        }
    }

    export const DesignerContext = PageDesigner.createContext({ designer: null });
}