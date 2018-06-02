/// <reference path="../out/pdesigner.d.ts"/>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "pdesigner", "react-dom", "./components/componenDefines"], function (require, exports, pdesigner_1, ReactDOM, componenDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let container = document.getElementById('container');
    let controlDescription = {
        id: pdesigner_1.guid(),
        name: 'PageView',
        data: {
            className: 'page-view',
            style: {},
            ref(c) {
                var data = c.export();
                c.hasEditor = true;
            }
        },
        children: [
            {
                id: pdesigner_1.guid(),
                name: 'header', data: {},
                children: [
                    { id: pdesigner_1.guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 80, border: 'dotted 3px #ccc' } } }
                ]
            },
            {
                id: pdesigner_1.guid(),
                name: 'section', data: { id: pdesigner_1.guid(), style: { margin: '8px 0 8px 0' } },
                children: [
                    { id: pdesigner_1.guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 200, border: 'dotted 3px #ccc' } } }
                ]
            },
            {
                id: pdesigner_1.guid(),
                name: 'footer', data: { id: pdesigner_1.guid() },
                children: [
                    {
                        id: pdesigner_1.guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 80, border: 'dotted 3px #ccc' } },
                        children: [
                            { id: pdesigner_1.guid(), name: 'TestControl', data: {} }
                        ]
                    },
                ]
            },
        ],
    };
    class PageViewEditor extends pdesigner_1.Editor {
        render() {
            return h("div", { ref: (e) => this.element = e || this.element }, "PageView Editor");
        }
    }
    pdesigner_1.Editor.register('PageView', PageViewEditor);
    let pageViewElement;
    let designer;
    function renderPageData(pageData) {
        return h("div", { ref: (e) => __awaiter(this, void 0, void 0, function* () {
                pageViewElement = e || pageViewElement;
                let element = yield pdesigner_1.Control.create(pageData);
                ReactDOM.render(h(pdesigner_1.DesignerContext.Provider, { value: { designer } }, element), pageViewElement);
            }) });
    }
    let designerElement = h(pdesigner_1.PageDesigner, { pageData: controlDescription },
        h(pdesigner_1.ControlToolbar, { className: "toolbar", componets: componenDefines_1.componets }),
        h("div", { className: "clearfix" }),
        h(pdesigner_1.DesignerContext.Consumer, null, context => {
            designer = context.designer;
            return renderPageData(context.designer.state.pageData);
        }),
        h(pdesigner_1.EditorPanel, { className: "editor-panel" }));
    ReactDOM.render(designerElement, container);
});
