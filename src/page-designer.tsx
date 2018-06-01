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
    class TestControl extends Control<any, any> {
        element: HTMLElement;
        get persistentMembers(): string[] {
            return []
        }
        render(h?: any) {
            let { text } = this.state;
            text = text || "FFFF"
            return <div ref={(e: HTMLElement) => this.element = e || this.element}>
                {text}
            </div>
        }
    }

    Control.register(TestControl);

    export const DesignerContext = React.createContext({
        // controlSelected: null as chitu.Callback2<PageView, Control<any, any>, React.ComponentClass<any>>,
        designer: null as PageDesigner
    })

    export interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ControlDescription,
    }

    export interface PageDesignerState {
        pageData: ControlDescription,
    }

    export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {

        private element: HTMLElement;
        controlSelected = chitu.Callbacks<PageDesigner, Control<any, any>>();
        private componentDefines: { [key: string]: ComponentDefine } = {};

        constructor(props) {
            super(props);
            this.state = { pageData: this.props.pageData };
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

            debugger;
            if (!Control.isRegister(name) || !Editor.isRegister(name))
                await this.loadComponent(childControl.name);

            this.setState(this.state);
        }
        registerEditor(componentName: string): any {
            let c = this.componentDefines[componentName];
            if (c == null)
                throw new Error(`Componet define of '${componentName}' is not exists`);

            let editorPath = c.editorPath;
            if (!editorPath)
                throw Error(`Editor path of ${componentName} is null`);
            return new Promise((resolve, reject) => {
                requirejs([c.editorPath],
                    (exports2) => {

                        let editor = exports2['default'];
                        if (editor == null)
                            throw new Error(`File of '${c.editorPath}' export default is null.`);

                        Editor.register(componentName, editor);
                        resolve();
                    },
                    (err) => reject(err)
                )
            })
        }
        private async loadComponent(componentName: string) {
            let c = this.componentDefines[componentName];
            if (c == null)
                throw new Error(`Componet define is not exists`);

            return new Promise((resolve, reject) => {
                requirejs([c.controlPath, c.editorPath],
                    (exports1, exports2) => {
                        let control = exports1['default'] as React.ClassicComponentClass;
                        let editor = exports2['default'];
                        console.assert(control != null);
                        console.assert(editor != null);

                        Control.register(control);
                        Editor.register(control.name, editor);
                        resolve();
                    },
                    (err) => reject(err)
                )
            })
        }
        addComponentDefine(item: ComponentDefine) {
            this.componentDefines[item.name] = item;
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
        async createEditorElement(control: Control<any, any>) {
            let controlTypeName = control.constructor.name;
            let c = this.componentDefines[controlTypeName];
            if (c == null) {
                console.log(`Componet define of ${controlTypeName} is not exists.`);
                return null;
            }

            if (c.editorPath == null)
                throw new Error(`Editor path of '${controlTypeName}' is null.`);

            //TODO: 缓存 editorType
            let editorType = await new Promise<React.ComponentClass>((resolve, reject) => {
                requirejs([c.editorPath],
                    (exports2) => {

                        let editor: React.ComponentClass = exports2['default'];
                        if (editor == null)
                            throw new Error(`Default export of file '${c.editorPath}' is null.`)

                        Editor.register(control.name, editor);
                        resolve(editor);
                    },
                    (err) => reject(err)
                )
            })

            let editorProps: EditorProps = { control, key: control.id };
            let editorElement = React.createElement(editorType, editorProps);

            return editorElement;
        }
        render() {
            let context = {
                controlSelected: chitu.Callbacks<PageView, Control<any, any>, React.ComponentClass<any>>(),
                designer: this
            }
            let emptyElement = <div style={{ paddingTop: 26, textAlign: 'center' }}>
                请从工具栏拖拉控件到这里
            </div>

            let designer = this;
            return <div className="pdesigner" ref={(e: HTMLElement) => this.element = e || this.element}>
                <DesignerContext.Provider value={{ designer }}>
                    {this.props.children}
                </DesignerContext.Provider>
            </div >;
        }
    }
}