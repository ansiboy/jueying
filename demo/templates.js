define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let width = 375;
    let height = 667;
    let scale = 0.6;
    let transform = `translateX(-${width * 0.2}px) translateY(-${height * 0.2}px) scale(0.6)`; // `scale(0.6)`; //
    let style = { width, height, minWidth: 'unset', transform };
    let template0 = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            style,
            "componentName": "PageView"
        },
        "children": [
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    htmlTag: 'section',
                    style: { height: '100%', margin: 0 }
                }
            }
        ]
    };
    let template1 = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            style,
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
    let templates = [template0, template1];
    exports.default = templates;
});
//# sourceMappingURL=templates.js.map