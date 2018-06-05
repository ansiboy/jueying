/// <reference path="../out/pdesigner.d.ts"/>
define(["require", "exports", "pdesigner", "react-dom", "react", "./components/componenDefines", "less!index"], function (require, exports, pdesigner_1, ReactDOM, React, componenDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let container = document.getElementById('container');
    let controlDescription = {
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
                }
            },
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    htmlTag: 'section',
                }
            },
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面底部，可以从工具栏拖拉控件到这里",
                    "key": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                    "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                    htmlTag: 'footer',
                }
            }
        ]
    };
    pdesigner_1.Editor.register('PageView', 'components/PageViewEditor');
    componenDefines_1.componets.forEach(o => {
        pdesigner_1.Control.register(o.name, o.controlPath);
        pdesigner_1.Editor.register(o.name, o.editorPath);
    });
    let pageViewElement;
    let designer;
    class MainPage extends React.Component {
        constructor(props) {
            super(props);
            this.names = [];
            this.state = { changed: false, canUndo: false, canRedo: false };
            controlDescription.props.ref = (c) => {
                if (!c)
                    return;
                this.pageView = c;
            };
        }
        namedControl(control) {
            let props = control.props;
            if (!props.name) {
                let num = 0;
                let name;
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
            let pageData = pdesigner_1.Control.export(this.pageView);
            this.pageDesigner.save(((pageData) => {
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
            });
        }
        render() {
            let { changed, canRedo, canUndo } = this.state;
            return h(pdesigner_1.PageDesigner, { pageData: controlDescription, ref: (e) => this.pageDesigner = e || this.pageDesigner },
                h("ul", null,
                    h("li", { className: "pull-left" },
                        h("h3", { style: { margin: 0, padding: '0 0 0 10px' } }, "\u597D\u6613\u9875\u9762\u8BBE\u8BA1\u5668")),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", onClick: (e) => this.save(), disabled: !changed },
                            h("i", { className: "icon-save" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u4FDD\u5B58"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", disabled: !canRedo, onClick: () => this.redo() },
                            h("i", { className: "icon-repeat" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u91CD\u505A"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", disabled: !canUndo, onClick: () => this.undo() },
                            h("i", { className: "icon-undo" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u64A4\u9500"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", disabled: changed },
                            h("i", { className: "icon-eye-open" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u9884\u89C8"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary" },
                            h("i", { className: "icon-file" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u65B0\u5EFA")))),
                h("div", { className: "clearfix" }),
                h("hr", { style: { margin: 0, borderWidth: 4 } }),
                h(pdesigner_1.ComponentToolbar, { className: "component-panel", componets: componenDefines_1.componets }),
                h(pdesigner_1.EditorPanel, { emptyText: "未选中控件，点击页面控件，可以编辑选中控件的属性" }),
                h(pdesigner_1.DesignerContext.Consumer, null, context => {
                    designer = context.designer;
                    this.namedControl(designer.state.pageData);
                    let element = pdesigner_1.Control.create(designer.state.pageData);
                    return h("div", { className: "main-panel", onClick: (e) => {
                            designer.clearSelectControl();
                        } },
                        h("ul", { className: "nav nav-tabs" },
                            h("li", { role: "presentation", className: "bg-primary" },
                                h("a", { href: "#" }, "\u9875\u9762\u4E00")),
                            h("li", { role: "presentation" },
                                h("a", { href: "#" }, "\u9875\u9762\u4E8C")),
                            h("li", { role: "presentation" },
                                h("a", { href: "#" }, "\u9875\u9762\u4E09"))),
                        element);
                }));
        }
    }
    pdesigner_1.Control.loadAllTypes().then(o => {
        ReactDOM.render(h(MainPage, null), container);
    });
});
//# sourceMappingURL=application.js.map