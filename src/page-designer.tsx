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





    export const DesignerContext = React.createContext({
        designer: null as PageDesigner
    })

    export interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ControlDescription,
        componentsDirectory?: string,
    }

    export interface PageDesignerState {
        pageData: ControlDescription,
    }

    export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {

        private element: HTMLElement;
        // private componentDefines: { [key: string]: ComponentDefine } = {};
        controlSelected = chitu.Callbacks<PageDesigner, Control<any, any>>();
        controlComponentDidMount = chitu.Callbacks<PageDesigner, Control<any, any>>();

        constructor(props) {
            super(props);
            this.state = { pageData: this.props.pageData };
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

        async appendControl(parentId: string, childControl: ControlDescription, beforeControlId?: string) {
            let pageData = this.state.pageData;
            let parentControl = this.findControl(parentId);
            console.assert(parentControl != null);
            let controls = parentControl.children = parentControl.children || [];

            let controlIndex = beforeControlId ? parentControl.children.map((o, i) => ({ id: o.id, index: i }))
                .filter(o => o.id == beforeControlId)
                .map(o => o.index)[0] + 1 : 0;

            if (controlIndex == controls.length)
                controls.push(childControl);
            else
                controls.splice(controlIndex, 0, childControl);

            this.setState(this.state);
        }

        // addComponentDefine(item: ComponentDefine) {
        //     this.componentDefines[item.name] = item;
        // }
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
            let context = {
                controlSelected: chitu.Callbacks<PageView, Control<any, any>, React.ComponentClass<any>>(),
                designer: this
            }
            // let emptyElement = <div style={{ paddingTop: 26, textAlign: 'center' }}>
            //     请从工具栏拖拉控件到这里
            // </div>

            let designer = this;
            return <div className="pdesigner" ref={(e: HTMLElement) => this.element = e || this.element}>
                <DesignerContext.Provider value={{ designer }}>
                    {this.props.children}
                </DesignerContext.Provider>
            </div >;
        }
    }

    // class TestControl extends Control<any, any> {
    //     element: HTMLElement;
    //     get persistentMembers(): string[] {
    //         return []
    //     }
    //     render(h?: any) {
    //         let { text } = this.state;
    //         text = text || "FFFF"
    //         return <div ref={(e: HTMLElement) => this.element = e || this.element}>
    //             {text}
    //         </div>
    //     }
    // }

    // PageDesigner.registerControl(TestControl);
}