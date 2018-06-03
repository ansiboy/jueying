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
                        },
                        "children": [
                            {
                                "id": "8b018486-69de-f595-eabf-909bad85e97a",
                                "name": "test",
                                "data": {
                                    "label": "未命名"
                                }
                            }
                        ]
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
                            "style": {
                                "minHeight": 80,
                                "border": "dotted 3px #ccc"
                            }
                        },
                        "children": [
                            {
                                "id": "2df4fb2e-d54f-517f-fac5-423b1ef23e0e",
                                "name": "test",
                                "data": {
                                    "label": "未命名"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };
    class PageViewEditor extends pdesigner_1.Editor {
        render() {
            return h("div", { ref: (e) => this.element = e || this.element }, "PageView Editor");
        }
    }
    pdesigner_1.Editor.register('PageView', PageViewEditor);
    // Control.register('Test', '')
    pdesigner_1.Control.register('test', 'components/Test/control');
    pdesigner_1.Editor.register('test', 'components/Test/editor');
    let pageViewElement;
    let designer;
    const MyDesignerContext = pdesigner_1.PageDesigner.createContext({ designer, page: null });
    function renderPageData(pageData) {
        return h("div", { className: "main-panel" },
            h("ul", { className: "nav nav-tabs" },
                h("li", { role: "presentation", className: "bg-primary" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E00")),
                h("li", { role: "presentation" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E8C")),
                h("li", { role: "presentation" },
                    h("a", { href: "#" }, "\u9875\u9762\u4E09"))),
            h("div", { style: { padding: 0 } },
                h("div", { ref: (e) => __awaiter(this, void 0, void 0, function* () {
                        pageViewElement = e || pageViewElement;
                        let element = yield pdesigner_1.Control.create(pageData);
                        ReactDOM.render(h(pdesigner_1.DesignerContext.Provider, { value: { designer } }, element), pageViewElement);
                    }) })));
    }
    class MainPage extends React.Component {
        constructor(props) {
            super(props);
            controlDescription.data.ref = (c) => {
                if (!c)
                    return;
                this.pageView = c;
            };
        }
        save() {
            let pageData = pdesigner_1.Control.export(this.pageView);
            alert(JSON.stringify(pageData));
        }
        render() {
            return h(pdesigner_1.PageDesigner, { pageData: controlDescription, ref: (e) => this.pageDesigner = e || this.pageDesigner },
                h("ul", null,
                    h("li", { className: "pull-left" },
                        h("h3", { style: { margin: 0, padding: '0 0 0 10px' } }, "\u597D\u6613\u9875\u9762\u8BBE\u8BA1\u5668")),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary", onClick: (e) => this.save() },
                            h("i", { className: "icon-save" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u4FDD\u5B58"))),
                    h("li", { className: "pull-right" },
                        h("button", { className: "btn btn-primary" },
                            h("i", { className: "icon-eye-open" }),
                            h("span", { style: { paddingLeft: 4 } }, "\u9884\u89C8")))),
                h("div", { className: "clearfix" }),
                h("hr", { style: { margin: 0, borderWidth: 4 } }),
                h(pdesigner_1.ComponentToolbar, { className: "component-panel", componets: componenDefines_1.componets }),
                h(pdesigner_1.EditorPanel, { className: "editor-panel" }),
                h(pdesigner_1.DesignerContext.Consumer, null, context => {
                    designer = context.designer;
                    return renderPageData(context.designer.state.pageData);
                }));
        }
    }
    ReactDOM.render(h(MainPage, null), container);
});
