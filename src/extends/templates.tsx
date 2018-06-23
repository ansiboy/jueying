namespace jueying.extentions {

    type ElementData = jueying.ElementData;
    type PageDesigner = jueying.PageDesigner;

    export interface PageDocument {
        pageData: ElementData,
        name: string,
        // changed?: boolean,
    }

    let style = { width: '100%', height: '100%', minWidth: 'unset' };

    let template0: PageDocument = {
        pageData: {
            type: 'PageView',
            props: {
                id: guid(),
                className: "page-view",
                style,
                componentName: "PageView"
            },
            children: [
                {
                    type: "ControlPlaceholder",
                    props: {
                        "emptyText": "页面中部，可以从工具栏拖拉控件到这里",
                        id: guid(),
                        htmlTag: 'section',
                        style: { height: '100%', margin: 0 }
                    } as any,
                    children: [
                        {
                            type: 'TextHeader',
                            props: {
                                id: guid(),
                                text: '商品订购',
                                size: 3,
                            },
                        },
                        {
                            type: 'ValueInput',
                            props: {
                                id: guid(),
                                dataField: '商品名称'
                            }
                        },
                        {
                            type: 'ValueInput',
                            props: {
                                id: guid(),
                                dataField: '商品数量'
                            }
                        },
                        {
                            type: 'ValueInput',
                            props: {
                                id: guid(),
                                dataField: '收件人'
                            }
                        },
                        {
                            type: 'ValueInput',
                            props: {
                                id: guid(),
                                dataField: '联系电话'
                            }
                        },
                        {
                            type: 'ValueInput',
                            props: {
                                id: guid(),
                                dataField: '收件地址'
                            }
                        },
                        {
                            type: 'SubmitButton',
                            props: {
                                id: guid(),
                                text: '提交订单'
                            }
                        },
                    ]
                }
            ]
        },
        name: '商品订购'
    }

    let template1: PageDocument = {
        pageData: {
            type: 'PageView',
            props: {
                "id": guid(),
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
                    } as any
                }
            ]
        },
        name: '空白模板(流式定位)'
    }

    let template2: PageDocument = {
        pageData: {
            type: 'PageView',
            props: {
                id: guid(),
                className: "page-view",
                style,
                componentName: "PageView",
                layout: 'absolute'
            },
            children: [
                {
                    type: "ControlPlaceholder",
                    props: {
                        id: guid(),
                        emptyText: "页面中部，可以从工具栏拖拉控件到这里",
                        htmlTag: 'section',
                        style: { height: '100%', margin: 0 }
                    } as any
                }
            ]
        },
        name: '空白模板(绝对定位)'
    }

    export let templates = [template1, template2, template0,];
}