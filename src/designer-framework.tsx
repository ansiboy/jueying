namespace pdesigner {

    let style = { width: '100%', height: '100%', minWidth: 'unset' };
    
    let template0: ElementData = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            style,
            "componentName": "PageView"
        },
        children: [
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    id: guid(),
                    htmlTag: 'section',
                    style: { height: '100%', margin: 0 }
                } as any,
                children: [
                    {
                        type: 'TextHeader',
                        props: {
                            id: guid(),
                            text: '商品订购',
                            size: 3,
                        },
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: guid(),
                            dataField: '商品名称'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: guid(),
                            dataField: '商品数量'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: guid(),
                            dataField: '收件人'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: guid(),
                            dataField: '联系电话'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: guid(),
                            dataField: '收件地址'
                        }
                    },
                    {
                        type: 'SubmitButton',
                        props: {
                            id: guid(),
                            text: '提交订单'
                        }
                    },
                ]
            }
        ]
    }

    let template1: ElementData = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            style,
            "componentName": "PageView"
        },
        "children": [
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    htmlTag: 'section',
                    style: { height: '100%', margin: 0 }
                } as any
            }
        ]
    }

    let templates = [template0, template1];

    let controlDescription: ElementData = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            "style": {
                position: 'absolute',
                height: '100%',
                width: '100%'
            },
            "componentName": "PageView",
            layout: 'absolute'
        },
        "children": [
            {
                type: "ControlPlaceholder",
                props: {
                    "id": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                    "emptyText": "页面顶部，可以从工具栏拖拉控件到这里",
                    "key": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                    htmlTag: 'header',
                    style: {
                        position: 'absolute',
                        height: 80,
                        width: '100%'
                    }
                } as any
            },
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    htmlTag: 'section',
                    style: {
                        position: 'absolute',
                        height: 200,
                        width: '100%',
                        top: 80
                    }
                } as any
            },
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面底部，可以从工具栏拖拉控件到这里",
                    "key": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                    "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                    htmlTag: 'footer',
                    style: {
                        position: 'absolute',
                        height: 80,
                        width: '100%',
                        top: 296
                    }
                } as any
            }
        ]
    }

    export interface DesignerFrameworkProps {
        componets: ComponentDefine[],
        title?: string
    }
    export interface DesignerFrameworkState {
        changed: boolean,
        canUndo: boolean,
        canRedo: boolean,
    }
    export class DesignerFramework extends React.Component<DesignerFrameworkProps, DesignerFrameworkState>{
        pageDesigner: PageDesigner;
        names: string[] = [];
        constructor(props) {
            super(props);
            this.state = { changed: false, canUndo: false, canRedo: false };
        }
        namedControl(control: ElementData) {
            let props = control.props;
            if (!props.name) {
                let num = 0;
                let name: string;
                do {
                    num = num + 1;
                    name = `${control.type}${num}`;
                } while (this.names.indexOf(name) >= 0);

                this.names.push(name);
                props.name = name;
            }

            if (!control.children || control.children.length == 0) {
                return;
            }
            for (let i = 0; i < control.children.length; i++) {
                this.namedControl(control.children[i]);
            }
        }
        undo() {
            this.pageDesigner.undo();
        }
        redo() {
            this.pageDesigner.redo();
        }
        save() {
            return this.pageDesigner.save(((pageData) => {
                localStorage.setItem(pageData.props.id, JSON.stringify(pageData));
                return Promise.resolve(pageData);
            }));
        }
        async fetchTemplates(): Promise<ElementData[]> {
            return templates;
        }
        async newFile() {
            // let result = await import('./controls/template-dialog');
            // let TemplateDialog = result.default;
            TemplateDialog.show(
                () => this.fetchTemplates(),
                (tmp) => {
                    this.pageDesigner.setState({ pageData: tmp });
                });
        }
        componentDidMount() {
            this.pageDesigner.changed.add(() => {
                this.setState({
                    changed: true,
                    canRedo: this.pageDesigner.canRedo,
                    canUndo: this.pageDesigner.canUndo,
                });
            })
        }
        render() {
            let { changed, canRedo, canUndo } = this.state;
            let { componets, title } = this.props;
            return <PageDesigner pageData={controlDescription}
                ref={(e) => this.pageDesigner = e || this.pageDesigner} >
                <ul>
                    <li className="pull-left">
                        <h3 style={{ margin: 0, padding: '0 0 0 10px' }}>{title || ''}</h3>
                    </li>

                    <li className="pull-right">
                        <button className="btn btn-primary" disabled={!changed}
                            ref={(e: HTMLButtonElement) => {
                                if (!e) return;
                                // ui.buttonOnClick(e, (event) => {
                                //     return this.save()
                                // }, { toast: '保存成功' })
                            }}>
                            <i className="icon-save" />
                            <span style={{ paddingLeft: 4 }}>保存</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-primary" disabled={!canRedo}
                            onClick={() => this.redo()}>
                            <i className="icon-repeat" />
                            <span style={{ paddingLeft: 4 }}>重做</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-primary" disabled={!canUndo}
                            onClick={() => this.undo()}>
                            <i className="icon-undo" />
                            <span style={{ paddingLeft: 4 }}>撤销</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-primary" disabled={changed}>
                            <i className="icon-eye-open" />
                            <span style={{ paddingLeft: 4 }}>预览</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-primary" onClick={() => this.newFile()}>
                            <i className="icon-file" />
                            <span style={{ paddingLeft: 4 }}>新建</span>
                        </button>
                    </li>

                </ul>
                <div className="clearfix" />
                <hr style={{ margin: 0, borderWidth: 4 }} />

                <ComponentToolbar className="component-panel" componets={componets} />
                <EditorPanel emptyText={"未选中控件，点击页面控件，可以编辑选中控件的属性"} />
                <DesignerContext.Consumer>
                    {context => {
                        let designer = context.designer;
                        this.namedControl(designer.state.pageData);
                        let element = Control.create(designer.state.pageData);
                        return <div className="main-panel"
                            onClick={(e) => {
                                // designer.clearSelectControl();
                                let pageViewId = controlDescription.props.id
                                designer.selectControlById(pageViewId);
                            }}>
                            <ul className="nav nav-tabs">
                                <li role="presentation" className="active"><a href="#">页面一</a></li>
                                <li role="presentation"><a href="#">页面二</a></li>
                                <li role="presentation"><a href="#">页面三</a></li>
                            </ul>
                            <div className="page-container">
                                {element}
                            </div>
                        </div>
                    }}
                </DesignerContext.Consumer>
            </PageDesigner>
        }
    }
}