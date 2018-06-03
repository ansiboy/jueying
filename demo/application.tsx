/// <reference path="../out/pdesigner.d.ts"/>

import { ComponentToolbar, PageDesigner, ControlDescription, guid, Control, DesignerContext, EditorPanel, Editor, PageView } from "pdesigner";
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { componets } from "./components/componenDefines";
import 'less!index';

let container = document.getElementById('container');

let controlDescription: ControlDescription = {
    "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
    "name": "PageView",
    "data": {
        "className": "page-view",
        "style": {}
    },
    "children": [
        {
            "id": "dabb6966-8ca9-2fea-c60d-cc3ff0d77f22",
            "name": "header",
            "children": [
                {
                    "id": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                    "name": "ControlPlaceholder",
                    "data": {
                        emptyText: '页面头部，可以从工具栏拖拉控件到这里',
                        "style": {
                            "minHeight": 80,
                            "border": "dotted 3px #ccc"
                        }
                    }
                }
            ]
        },
        {
            "id": "31d0cfcf-a4a2-a7f6-65b6-95a9e0678ff3",
            "name": "section",
            "data": {
                "style": {
                    "margin": "8px 0 8px 0"
                }
            },
            "children": [
                {
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "name": "ControlPlaceholder",
                    "data": {
                        "style": {
                            "minHeight": 200,
                            "border": "dotted 3px #ccc"
                        }
                    }
                }
            ]
        },
        {
            "id": "5b4d1783-8a85-e8a7-7712-0446519c59d4",
            "name": "footer",
            "children": [
                {
                    "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                    "name": "ControlPlaceholder",
                    "data": {
                        emptyText: '页面底部，可以从工具栏拖拉控件到这里',
                        "style": {
                            "minHeight": 80,
                            "border": "dotted 3px #ccc"
                        }
                    }
                }
            ]
        }
    ]
}

class PageViewEditor extends Editor<any, any> {
    element: HTMLElement;
    render() {
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            PageView Editor
        </div>
    }
}

Editor.register('PageView', PageViewEditor);
Control.register('test', 'components/Test/control');
Editor.register('test', 'components/Test/editor');

let pageViewElement: HTMLElement;
let designer: PageDesigner;

function renderPageData(pageData: ControlDescription) {
    return <div className="main-panel"
        onClick={(e) => {
            designer.selectControl(null);
        }}>
        <ul className="nav nav-tabs">
            <li role="presentation" className="bg-primary"><a href="#">页面一</a></li>
            <li role="presentation"><a href="#">页面二</a></li>
            <li role="presentation"><a href="#">页面三</a></li>
        </ul>
        <div ref={async (e: HTMLElement) => {
            pageViewElement = e || pageViewElement;

            let element = await Control.create(pageData);
            ReactDOM.render(<DesignerContext.Provider value={{ designer }}>
                {element}
            </DesignerContext.Provider>, pageViewElement)
        }}></div>
    </div>
}

interface MainPageState {
    allowSave: boolean,
}
class MainPage extends React.Component<any, MainPageState>{
    pageView: PageView;
    pageDesigner: PageDesigner;

    constructor(props) {
        super(props);
        this.state = { allowSave: false };
        controlDescription.data.ref = (c: PageView) => {
            if (!c) return;
            this.pageView = c;
        }
    }

    save() {
        let pageData = Control.export(this.pageView);
        this.pageDesigner.save(((pageData) => {
            localStorage.setItem(pageData.id, JSON.stringify(pageData));
            return Promise.resolve(pageData);
        }));
    }
    componentDidMount() {
        this.pageDesigner.changed.add(() => {
            this.setState({ allowSave: true });
        })
    }
    render() {
        let { allowSave } = this.state;
        return <PageDesigner pageData={controlDescription}
            ref={(e) => this.pageDesigner = e || this.pageDesigner} >
            <ul>
                <li className="pull-left">
                    <h3 style={{ margin: 0, padding: '0 0 0 10px' }}>好易页面设计器</h3>
                </li>
                <li className="pull-right">
                    <button className="btn btn-primary"
                        onClick={(e) => this.save()} disabled={!allowSave}>
                        <i className="icon-save" />
                        <span style={{ paddingLeft: 4 }}>保存</span>
                    </button>
                </li>
                <li className="pull-right">
                    <button className="btn btn-primary">
                        <i className="icon-eye-open" />
                        <span style={{ paddingLeft: 4 }}>预览</span>
                    </button>
                </li>
            </ul>
            <div className="clearfix" />
            <hr style={{ margin: 0, borderWidth: 4 }} />

            <ComponentToolbar className="component-panel" componets={componets} />
            <EditorPanel emptyText={"点击页面控件，可以编辑控件的属性"} />
            <DesignerContext.Consumer>
                {context => {
                    designer = context.designer;
                    return renderPageData(context.designer.state.pageData)
                }}
            </DesignerContext.Consumer>
        </PageDesigner>
    }
}


ReactDOM.render(<MainPage />, container);