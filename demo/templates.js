define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export let phone_screen_width = 375;
    // export let phone_screen_height = 667;
    // let scale = 0.6;
    exports.phone_screen_width = 320;
    exports.phone_screen_height = 568;
    exports.scale = 0.6;
    exports.phone_height = exports.phone_screen_height * exports.scale;
    exports.phone_width = exports.phone_screen_width * exports.scale;
    let transform = `translateX(-${exports.phone_screen_width * 0.2}px) translateY(-${exports.phone_screen_height * 0.2}px) scale(0.6)`; // `scale(0.6)`; //
    // let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
    let style = { width: '100%', height: '100%', minWidth: 'unset' };
    let template0 = {
        type: 'PageView',
        props: {
            "id": "c9289d06-abcc-134e-b6a9-8e2eddab8bf2",
            "className": "page-view",
            style,
            "componentName": "PageView"
        },
        children: [
            {
                type: "ControlPlaceholder",
                props: {
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    id: pdesigner_1.guid(),
                    htmlTag: 'section',
                    style: { height: '100%', margin: 0 }
                },
                children: [
                    {
                        type: 'TextHeader',
                        props: {
                            id: pdesigner_1.guid(),
                            text: '商品订购',
                            size: 3,
                        },
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: pdesigner_1.guid(),
                            dataField: '商品名称'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: pdesigner_1.guid(),
                            dataField: '商品数量'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: pdesigner_1.guid(),
                            dataField: '收件人'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: pdesigner_1.guid(),
                            dataField: '联系电话'
                        }
                    },
                    {
                        type: 'ValueInput',
                        props: {
                            id: pdesigner_1.guid(),
                            dataField: '收件地址'
                        }
                    },
                    {
                        type: 'SubmitButton',
                        props: {
                            id: pdesigner_1.guid(),
                            text: '提交订单'
                        }
                    },
                ]
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
                    "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                    "key": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    "id": "181c33a2-e2fd-9d79-ae08-c8a97cfb1f04",
                    htmlTag: 'section',
                    style: { height: '100%', margin: 0 }
                }
            }
        ]
    };
    let templates = [template0, template1];
    exports.default = templates;
});
//# sourceMappingURL=templates.js.map