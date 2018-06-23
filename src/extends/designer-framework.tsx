namespace jueying.extentions {
    export interface DesignerFrameworkProps {
        componets: jueying.ComponentDefine[],
        title?: string
    }
    export interface DesignerFrameworkState {
        changed: boolean,
        canUndo: boolean,
        canRedo: boolean,
        acitveDocumentIndex?: number,
        pageDocuments?: PageDocument[]
    }
    export class DesignerFramework extends React.Component<DesignerFrameworkProps, DesignerFrameworkState>{
        private pageDesigner: jueying.PageDesigner;
        private names: string[] = [];
        private _storage: DocumentStorage;
        private acitveDocumentIndex;
        constructor(props) {
            super(props);

            let self = this;
            this.state = {
                changed: false,
                canUndo: false,
                canRedo: false
            };
        }
        namedControl(control: jueying.ElementData) {
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

        get storage() {
            if (this._storage == null)
                this._storage = new LocalDocumentStorage();

            return this._storage;
        }

        static get dialogsElement() {
            let id = 'designer-framework-dialogs';
            let element = document.getElementById(id);
            if (!element) {
                element = document.createElement('div');
                element.id = id;
                document.body.appendChild(element);
            }

            return element;
        }

        undo() {
            // this.pageDesigner.undo();
        }
        redo() {
            // this.pageDesigner.redo();
        }
        async save() {
            let { acitveDocumentIndex, pageDocuments } = this.state;
            let pageDocument = pageDocuments[acitveDocumentIndex];
            console.assert(pageDocument != null);
            DocumentHandler.save(pageDocument);
            this.setState({ pageDocuments });
        }
        assingControlIds(data: jueying.ElementData) {
            // data.props.id = guid();
            let stack = new Array<jueying.ElementData>();
            stack.push(data);
            while (stack.length > 0) {
                let item = stack.pop();
                item.props.id = guid();
                if (item.children != null && item.children.length > 0) {
                    for (let i = 0; i < item.children.length; i++)
                        stack.push(item.children[i]);
                }
            }
        }
        async fetchTemplates(): Promise<PageDocument[]> {
            return templates;
        }
        async newFile() {
            TemplateDialog.show(
                () => this.fetchTemplates(),
                (tmp, fileName) => {
                    let pageData: ElementData = JSON.parse(JSON.stringify(tmp.pageData));
                    let { pageDocuments } = this.state;
                    pageDocuments = pageDocuments || [];
                    pageDocuments.push({ pageData, name: fileName });
                    this.setState({
                        pageDocuments,
                        acitveDocumentIndex: pageDocuments.length - 1
                    })
                });
        }
        activeDocument(index: number) {
            this.setState({ acitveDocumentIndex: index });
        }
        setState<K extends keyof DesignerFrameworkState>(
            state: (Pick<DesignerFrameworkState, K> | DesignerFrameworkState),
        ): void {
            super.setState(state);
        }
        closeDocument(index: number) {
            let { pageDocuments, acitveDocumentIndex } = this.state;
            console.assert(pageDocuments != null);
            pageDocuments.splice(index, 1);

            if (pageDocuments.length == 0) {
                acitveDocumentIndex = null;
            }
            else if (acitveDocumentIndex > pageDocuments.length - 1) {
                acitveDocumentIndex = 0;
            }

            this.setState({ pageDocuments, acitveDocumentIndex });
        }
        componentDidMount() {
        }
        render() {
            let { acitveDocumentIndex, pageDocuments } = this.state;
            let { componets, title } = this.props;

            pageDocuments = pageDocuments || [];
            console.assert(pageDocuments != null);
            let pageDocument = acitveDocumentIndex != null ? pageDocuments[acitveDocumentIndex] : null;

            let toolbarElement: HTMLElement;
            return <PageDesigner pageData={pageDocument ? pageDocument.pageData : null}
                ref={(e) => this.pageDesigner = e || this.pageDesigner} >
                <DesignerContext.Consumer>
                    {c => {
                        let designer = c.designer;
                        let element: React.ReactElement<any>;
                        if (designer.pageData) {
                            this.namedControl(designer.pageData);
                            element = Control.create(designer.pageData);
                        }

                        let isChanged = pageDocument ? DocumentHandler.isChanged(pageDocument) : false;


                        return <React.Fragment>
                            <ul>
                                <li className="pull-left">
                                    <h3 style={{ margin: 0, padding: '0 0 0 10px' }}>{title || ''}</h3>
                                </li>
                                <li className="pull-right">
                                    <button className="btn btn-primary" disabled={!isChanged}
                                        onClick={() => this.save()}>
                                        <i className="icon-save" />
                                        <span style={{ paddingLeft: 4 }}>保存</span>
                                    </button>
                                </li>
                                <li className="pull-right">
                                    <button className="btn btn-primary"
                                        onClick={() => this.redo()}>
                                        <i className="icon-repeat" />
                                        <span style={{ paddingLeft: 4 }}>重做</span>
                                    </button>
                                </li>
                                <li className="pull-right">
                                    <button className="btn btn-primary"
                                        onClick={() => this.undo()}>
                                        <i className="icon-undo" />
                                        <span style={{ paddingLeft: 4 }}>撤销</span>
                                    </button>
                                </li>
                                <li className="pull-right">
                                    <button className="btn btn-primary">
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
                                <li className="pull-right">
                                    <button className="btn btn-primary">
                                        <i className="icon-folder-open" />
                                        <span style={{ paddingLeft: 4 }}>打开</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="clearfix" />
                            <hr style={{ margin: 0, borderWidth: 4 }} />
                            <ComponentToolbar className="component-panel" componets={componets} />
                            <EditorPanel emptyText={"未选中控件，点击页面控件，可以编辑选中控件的属性"} />
                            <div className="main-panel"
                                onClick={(e) => {
                                    if (designer.pageData) {
                                        let pageViewId = designer.pageData.props.id
                                        designer.selectControlById(pageViewId);
                                    }
                                }}>
                                {element ?
                                    <React.Fragment>
                                        <ul className="nav nav-tabs">
                                            {pageDocuments.map((o, i) =>
                                                <li key={i} role="presentation" className={i == acitveDocumentIndex ? 'active' : null}
                                                    onClick={() => this.activeDocument(i)}>
                                                    <a href="javascript:">
                                                        {o.name}
                                                        <i className="pull-right icon-remove" style={{ cursor: 'pointer' }}
                                                            onClick={(e) => {
                                                                e.cancelable = true;
                                                                e.stopPropagation();
                                                                this.closeDocument(i);
                                                            }} />
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                        <div className="page-container">
                                            {element}
                                        </div>
                                    </React.Fragment> :
                                    <div className={classNames.emptyDocument}>
                                        暂无打开的文档，点击打开文档
                                    </div>
                                }
                            </div>
                        </React.Fragment>
                    }}
                </DesignerContext.Consumer>
            </PageDesigner>
        }
    }
}

// {context => {
//     let designer = context.designer;
//     let element: React.ReactElement<any>;
//     if (designer.pageData) {
//         this.namedControl(designer.pageData);
//         element = Control.create(designer.pageData);
//     }

//     return 

/*
       }}
                </DesignerContext.Consumer>
                */

/*
                <DesignerContext.Consumer>
                    {context => {
                        let designer = context.designer;
                        let element: React.ReactElement<any>;
                        if (designer.pageData) {
                            this.namedControl(designer.pageData);
                            element = Control.create(designer.pageData);
                        }

                        let isChanged = designer ? DocumentHandler.isChanged({ name: '', pageData: designer.pageData }) : false;
                        return <React.Fragment>
                            <ul>
                                <li className="pull-left">
                                    <h3 style={{ margin: 0, padding: '0 0 0 10px' }}>{title || ''}</h3>
                                </li>

                                <li className="pull-right">
                                    <button className="btn btn-primary" disabled={!isChanged}
                                        onClick={() => this.save()}
                                        ref={(e: HTMLButtonElement) => {
                                            if (!e) return;
                                            // ui.buttonOnClick(e, (event) => {
                                            //     return this.save()
                                            // })
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
                                <li className="pull-right">
                                    <button className="btn btn-primary"
                                        ref={(e: HTMLButtonElement) => {
                                            if (!e) return;
                                            // ui.buttonOnClick(e, (event) => {
                                            //     return this.save()
                                            // }, { toast: '保存成功' })
                                        }}>
                                        <i className="icon-folder-open" />
                                        <span style={{ paddingLeft: 4 }}>打开</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="clearfix" />
                            <hr style={{ margin: 0, borderWidth: 4 }} />

                            <ComponentToolbar className="component-panel" componets={componets} />
                            <EditorPanel emptyText={"未选中控件，点击页面控件，可以编辑选中控件的属性"} />
                            <div className="main-panel"
                                onClick={(e) => {
                                    if (designer.pageData) {
                                        let pageViewId = designer.pageData.props.id
                                        designer.selectControlById(pageViewId);
                                    }
                                }}>
                                {element ?
                                    <React.Fragment>
                                        <ul className="nav nav-tabs">
                                            {pageDocuments.map((o, i) =>
                                                <li key={i} role="presentation" className={i == acitveDocumentIndex ? 'active' : null}
                                                    onClick={() => this.activeDocument(i)}>
                                                    <a href="#">{o.name}<i className="pull-right icon-remove" /></a>
                                                </li>
                                            )}
                                        </ul>
                                        <div className="page-container">
                                            {element}
                                        </div>
                                    </React.Fragment> :
                                    <div className={classNames.emptyDocument}>
                                        暂无打开的文档，点击打开文档
                                    </div>
                                }
                            </div>
                        </React.Fragment>
                    }}
                </DesignerContext.Consumer>
*/

namespace pdesigner_extentions {
    // let controlDescription: pdesigner.ElementData = {
    //     type: 'PageView',
    //     props: {
    //         "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
    //         "className": "page-view",
    //         "style": {
    //             position: 'absolute',
    //             height: '100%',
    //             width: '100%'
    //         },
    //         "componentName": "PageView",
    //         layout: 'absolute'
    //     },
    //     "children": [
    //         {
    //             type: "ControlPlaceholder",
    //             props: {
    //                 "id": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
    //                 "emptyText": "页面顶部，可以从工具栏拖拉控件到这里",
    //                 "key": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
    //                 htmlTag: 'header',
    //                 style: {
    //                     position: 'absolute',
    //                     height: 80,
    //                     width: '100%'
    //                 }
    //             } as any
    //         },
    //         {
    //             type: "ControlPlaceholder",
    //             props: {
    //                 "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
    //                 "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
    //                 "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
    //                 htmlTag: 'section',
    //                 style: {
    //                     position: 'absolute',
    //                     height: 200,
    //                     width: '100%',
    //                     top: 80
    //                 }
    //             } as any
    //         },
    //         {
    //             type: "ControlPlaceholder",
    //             props: {
    //                 "emptyText": "页面底部，可以从工具栏拖拉控件到这里",
    //                 "key": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
    //                 "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
    //                 htmlTag: 'footer',
    //                 style: {
    //                     position: 'absolute',
    //                     height: 80,
    //                     width: '100%',
    //                     top: 296
    //                 }
    //             } as any
    //         }
    //     ]
    // }


}
