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


// EditorFactory.register('PageView', 'components/PageViewEditor');
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
class MainPage extends jueying.extentions.DesignerFramework {
    constructor(props) {
        super(props);
    }
}

ControlFactory.loadAllTypes().then(o => {
    ReactDOM.render(<MainPage componets={componets} title='好易页面设计器' />, container);
})
