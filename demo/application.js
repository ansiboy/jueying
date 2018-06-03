/// <reference path="../out/pdesigner.d.ts"/>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "pdesigner", "react-dom", "react", "./components/componenDefines", "less!index"], function (require, exports, pdesigner_1, ReactDOM, React, componenDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let container = document.getElementById('container');
    let controlDescription = {
        "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
        "name": "PageView",
        "data": {
            "className": "page-view",
            "style": {},
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "componentName": "PageView"
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
                            "emptyText": "页面顶部，可以从工具栏拖拉控件到这里",
                            "style": {
                                "minHeight": 80,
                                "border": "dotted 3px #ccc"
                            },
                            "key": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                            "id": "5844958c-f8e5-2f83-d290-a9ee2b36aaec",
                            "componentName": "ControlPlaceholder"
                        },
                        "children": [
                            {
                                "id": "688ae0ca-8044-89f9-e4d4-224769a2e0f5",
                                "name": "test",
                                "data": {
                                    "key": "688ae0ca-8044-89f9-e4d4-224769a2e0f5",
                                    "id": "688ae0ca-8044-89f9-e4d4-224769a2e0f5",
                                    "componentName": "test"
                                }
                            }
                        ]
                    }
                ],
                "data": {
                    "key": "dabb6966-8ca9-2fea-c60d-cc3ff0d77f22",
                    "id": "dabb6966-8ca9-2fea-c60d-cc3ff0d77f22"
                }
            },
            {
                "id": "31d0cfcf-a4a2-a7f6-65b6-95a9e0678ff3",
                "name": "section",
                "data": {
                    "style": {
                        "margin": "8px 0 8px 0"
                    },
                    "key": "31d0cfcf-a4a2-a7f6-65b6-95a9e0678ff3",
                    "id": "31d0cfcf-a4a2-a7f6-65b6-95a9e0678ff3"
                },
                "children": [
                    {
                        "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                        "name": "ControlPlaceholder",
                        "data": {
                            "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                            "style": {
                                "minHeight": 200,
                                "border": "dotted 3px #ccc"
                            },
                            "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                            "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                            "componentName": "ControlPlaceholder"
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
                            "emptyText": "页面底部，可以从工具栏拖拉控件到这里",
                            "style": {
                                "minHeight": 80,
                                "border": "dotted 3px #ccc"
                            },
                            "key": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                            "id": "1b6fcd03-5d39-03eb-f586-53ecb1ad2cf7",
                            "componentName": "ControlPlaceholder"
                        },
                        "children": [
                            {
                                "id": "0bc7d57c-12ca-ae5c-b9c8-e742bd931f17",
                                "name": "test",
                                "data": {
                                    "key": "0bc7d57c-12ca-ae5c-b9c8-e742bd931f17",
                                    "id": "0bc7d57c-12ca-ae5c-b9c8-e742bd931f17",
                                    "componentName": "test"
                                }
                            }
                        ]
                    }
                ],
                "data": {
                    "key": "5b4d1783-8a85-e8a7-7712-0446519c59d4",
                    "id": "5b4d1783-8a85-e8a7-7712-0446519c59d4"
                }
            }
        ]
    };
    class PageViewEditor extends pdesigner_1.Editor {
        render() {
            return h("div", { ref: (e) => this.element = e || this.element }, "PageView Editor");
        }
    }
    pdesigner_1.Editor.register('PageView', PageViewEditor);
    pdesigner_1.Control.register('test', 'components/Test/control');
    pdesigner_1.Editor.register('test', 'components/Test/editor');
    let pageViewElement;
    let designer;
    function renderPageData(pageData) {
        return h("div", { className: "main-panel", onClick: (e) => {
                designer.selectControl(null);
            } },
            h("ul", { className: "nav nav-tabs" },
                h("li", { role: "presentation", className: "bg-primary" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E00")),
                h("li", { role: "presentation" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E8C")),
                h("li", { role: "presentation" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E09"))),
            h("div", { ref: (e) => __awaiter(this, void 0, void 0, function* () {
                    pageViewElement = e || pageViewElement;
                    let element = yield pdesigner_1.Control.create(pageData);
                    ReactDOM.render(h(pdesigner_1.DesignerContext.Provider, { value: { designer } }, element), pageViewElement);
                }) }));
    }
    class MainPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = { allowSave: false };
            controlDescription.data.ref = (c) => {
                if (!c)
                    return;
                this.pageView = c;
            };
        }
        save() {
            let pageData = pdesigner_1.Control.export(this.pageView);
            this.pageDesigner.save(((pageData) => {
                localStorage.setItem(pageData.id, JSON.stringify(pageData));
                return Promise.resolve(pageData);
            }));
        }
        componentDidMount() {
            this.pageDesigner.changed.add(() => {
                this.setState({ allowSave: true });
            });
        }
        render() {
            let { allowSave } = this.state;
            return h(pdesigner_1.PageDesigner, { pageData: controlDescription, ref: (e) => this.pageDesigner = e || this.pageDesigner },
                h("ul", null,
                    h("li", { className: "pull-left" },
                        h("h3", { style: { margin: 0, padding: '0 0 0 10px' } }, "\u597D\u6613\u9875\u9762\u8BBE\u8BA1\u5668")),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", onClick: (e) => this.save(), disabled: !allowSave },
                            h("i", { className: "icon-save" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u4FDD\u5B58"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary" },
                            h("i", { className: "icon-eye-open" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u9884\u89C8")))),
                h("div", { className: "clearfix" }),
                h("hr", { style: { margin: 0, borderWidth: 4 } }),
                h(pdesigner_1.ComponentToolbar, { className: "component-panel", componets: componenDefines_1.componets }),
                h(pdesigner_1.EditorPanel, { emptyText: "未选中控件，点击页面控件，可以编辑选中控件的属性" }),
                h(pdesigner_1.DesignerContext.Consumer, null, context => {
                    designer = context.designer;
                    return renderPageData(context.designer.state.pageData);
                }));
        }
    }
    ReactDOM.render(h(MainPage, null), container);
});
