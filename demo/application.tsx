import {
    ComponentToolbar, PageDesigner, ElementData, guid,
    Control, DesignerContext, EditorPanel, Editor, PageView,
    ControlPlaceholder, ControlFactory, EditorFactory
} from "pdesigner";

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { componets } from "./components/componenDefines";
import 'less!index';

let container = document.getElementById('container');

let controlDescription: ElementData = {
    type: 'PageView',
    props: {
        "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
        "className": "page-view",
        "style": {},
        "componentName": "PageView"
    },
    "children": [
        {
            type: "ControlPlaceholder",
            props: {
                "id": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                "emptyText": "页面顶部，可以从工具栏拖拉控件到这里",
                "key": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                htmlTag: 'header',
            } as any
        },
        {
            type: "ControlPlaceholder",
            props: {
                "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                htmlTag: 'section',
            } as any
        },
        {
            type: "ControlPlaceholder",
            props: {
                "emptyText": "页面底部，可以从工具栏拖拉控件到这里",
                "key": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                htmlTag: 'footer',
            } as any
        }
    ]
}


EditorFactory.register('PageView', 'components/PageViewEditor');
componets.forEach(o => {
    ControlFactory.register(o.name, o.controlPath);
    EditorFactory.register(o.name, o.editorPath);
})

let pageViewElement: HTMLElement;
let designer: PageDesigner;

interface MainPageState {
    changed: boolean,
    canUndo: boolean,
    canRedo: boolean,
}
class MainPage extends React.Component<any, MainPageState>{
    pageView: PageView;
    pageDesigner: PageDesigner;
    names: string[] = [];
    constructor(props) {
        super(props);
        this.state = { changed: false, canUndo: false, canRedo: false };
        controlDescription.props.ref = (c: PageView) => {
            if (!c) return;
            this.pageView = c;
        }
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
        return <PageDesigner pageData={controlDescription}
            ref={(e) => this.pageDesigner = e || this.pageDesigner} >
            <ul>
                <li className="pull-left">
                    <h3 style={{ margin: 0, padding: '0 0 0 10px' }}>好易页面设计器</h3>
                </li>

                <li className="pull-right">
                    <button className="btn btn-primary" disabled={!changed}
                        ref={(e: HTMLButtonElement) => {
                            if (!e) return;
                            ui.buttonOnClick(e, (event) => {
                                return this.save()
                            }, { toast: '保存成功' })
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
                    <button className="btn btn-primary">
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
                    designer = context.designer;
                    this.namedControl(designer.state.pageData);
                    let element = Control.create(designer.state.pageData);
                    return <div className="main-panel"
                        onClick={(e) => {
                            designer.clearSelectControl();
                        }}>
                        <ul className="nav nav-tabs">
                            <li role="presentation" className="active"><a href="#">页面一</a></li>
                            <li role="presentation"><a href="#">页面二</a></li>
                            <li role="presentation"><a href="#">页面三</a></li>
                        </ul>
                        {element}
                    </div>
                }}
            </DesignerContext.Consumer>
        </PageDesigner>
    }
}

ControlFactory.loadAllTypes().then(o => {
    ReactDOM.render(<MainPage />, container);
})
