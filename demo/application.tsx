/// <reference path="../out/pdesigner.d.ts"/>

import { ControlToolbar, PageDesigner, ControlDescription, guid, Control, DesignerContext, EditorPanel } from "pdesigner";
import * as ReactDOM from 'react-dom';
import { componets } from "./components/componenDefines";

let container = document.getElementById('container');

let controlDescription: ControlDescription = {
    id: guid(),
    name: 'PageView',
    data: {
        className: 'page-view',
        style: {},
        ref(c: Control<any, any>) {
            var data = c.export()
        }
    },
    children: [
        {
            id: guid(),
            name: 'header', data: {},
            children: [
                { id: guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 80, border: 'dotted 3px #ccc' } } }
            ]
        },
        {
            id: guid(),
            name: 'section', data: { id: guid(), style: { margin: '8px 0 8px 0' } },
            children: [
                { id: guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 200, border: 'dotted 3px #ccc' } } }
            ]
        },
        {
            id: guid(),
            name: 'footer', data: { id: guid() },
            children: [
                {
                    id: guid(), name: 'ControlPlaceholder', data: { style: { minHeight: 80, border: 'dotted 3px #ccc' } },
                    children: [
                        { id: guid(), name: 'TestControl', data: {} }
                    ]
                },
            ]
        },
    ],

}

let designer = <PageDesigner pageData={controlDescription} >
    <ControlToolbar className="toolbar" componets={componets} />
    <div className="clearfix" />
    <DesignerContext.Consumer>
        {context =>
            Control.createElement(context.designer.state.pageData)
        }
    </DesignerContext.Consumer>
    <EditorPanel className="editor-panel" />
</PageDesigner>



ReactDOM.render(designer, container);