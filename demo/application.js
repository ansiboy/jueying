define(["require", "exports", "pdesigner", "react-dom", "./components/componenDefines", "less!index"], function (require, exports, pdesigner_1, ReactDOM, componenDefines_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let container = document.getElementById('container');
    let controlDescription = {
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
                }
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
                }
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
                }
            }
        ]
    };
    // EditorFactory.register('PageView', 'components/PageViewEditor');
    componenDefines_1.componets.forEach(o => {
        pdesigner_1.ControlFactory.register(o.name, o.controlPath);
        pdesigner_1.EditorFactory.register(o.name, o.editorPath);
    });
    let pageViewElement;
    let designer;
    class MainPage extends jueying.extentions.DesignerFramework {
        constructor(props) {
            super(props);
        }
    }
    pdesigner_1.ControlFactory.loadAllTypes().then(o => {
        ReactDOM.render(h(MainPage, { componets: componenDefines_1.componets, title: '\u597D\u6613\u9875\u9762\u8BBE\u8BA1\u5668' }), container);
    });
});
//# sourceMappingURL=application.js.map