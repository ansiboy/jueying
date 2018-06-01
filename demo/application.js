/// <reference path="../out/pdesigner.d.ts"/>
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
    let designer = h(pdesigner_1.PageDesigner, { pageData: controlDescription },
        h(pdesigner_1.ControlToolbar, { className: "toolbar", componets: componenDefines_1.componets }),
        h("div", { className: "clearfix" }),
        h(pdesigner_1.DesignerContext.Consumer, null, context => pdesigner_1.Control.createElement(context.designer.state.pageData)),
        h(pdesigner_1.EditorPanel, { className: "editor-panel" }));
    ReactDOM.render(designer, container);
});
