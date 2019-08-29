/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/

import React = require("react");
import { PageDesigner } from "./page-designer";
import { PropEditorInfo, Component } from "./component";
import { proptDisplayNames, guid } from "./common";
import { PropEditorProps } from "./prop-editor";
import { Errors } from "./errors";



interface EditorProps extends React.Props<PropertyEditor> {
    designer: PageDesigner,
    empty: string | JSX.Element
}

interface EditorState {
    designer: PageDesigner | null,
}

export class PropertyEditor extends React.Component<EditorProps, EditorState>{

    private _element: HTMLElement | null = null;

    constructor(props: EditorProps) {
        super(props);

        this.state = { designer: this.props.designer };
    }

    static getDerivedStateFromProps(props: EditorProps, state: EditorState): Partial<EditorState> {
        return { designer: props.designer };
    }

    private getEditors(designer: PageDesigner) {
        if (designer == null) {
            return []
        }

        // 各个控件相同的编辑器
        let commonPropEditorInfos: PropEditorInfo[] = []
        let selectedComponents = designer.selectedComponents
        for (let i = 0; i < selectedComponents.length; i++) {
            let componentData = selectedComponents[i]
            let propEditorInfos = Component.getPropEditors(componentData)
            if (i == 0) {
                commonPropEditorInfos = propEditorInfos || []
            }
            else {
                let items: PropEditorInfo[] = []
                commonPropEditorInfos.forEach(propInfo1 => {
                    propEditorInfos.forEach(propInfo2 => {
                        let propName1 = propInfo1.propName; //propInfo1.propNames.join('.')
                        let propName2 = propInfo2.propName;//propInfo2.propNames.join('.')
                        if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                            items.push(propInfo1)
                        }
                    })
                })
                commonPropEditorInfos = items
            }
        }

        // 各个控件相同的属性值
        let commonFlatProps: { [navName: string]: any }
        for (let i = 0; i < selectedComponents.length; i++) {
            let control = selectedComponents[i]
            let controlProps: { [key: string]: any } = Object.assign({}, control.props);
            delete (controlProps as any).children;
            // controlProps = this.flatProps(controlProps)
            if (i == 0) {
                commonFlatProps = controlProps
            }
            else {
                let obj = {}
                for (let key in commonFlatProps) {
                    if (commonFlatProps[key] == controlProps[key])
                        obj[key] = controlProps[key]
                }
                commonFlatProps = obj
            }
        }

        let editors: { group: string, prop: string, editor: React.ReactElement<any> }[] = []
        for (let i = 0; i < commonPropEditorInfos.length; i++) {
            let propEditorInfo = commonPropEditorInfos[i];
            let propName = propEditorInfo.propName;;
            let editorType = propEditorInfo.editorType;
            let value = this.propValue(propName, commonFlatProps);

            let editorProps: PropEditorProps<any> = {
                value: value, 
                editComponents: selectedComponents,
                updateComponentProp: (value) => {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.props.id, propName: propEditorInfo.propName, value
                    }));
                    designer.updateComponentProps(...componentProps);
                }
            };
            let editor = React.createElement(editorType, editorProps);
            editors.push({ prop: propEditorInfo.propName, editor, group: propEditorInfo.group })
        }

        return editors
    }

    private propValue(propName: string, props: any) {
        if (!propName)
            throw Errors.argumentNull("propName");

        if (!props)
            throw Errors.argumentNull("props");

        let navPropsNames: string[] = propName.split(".");

        let obj: any = props;
        for (let i = 0; i < navPropsNames.length; i++) {
            obj = props[navPropsNames[i]];
            if (obj == null)
                return null;
        }

        return obj;
    }

    private flatProps(props: object, baseName?: string): { [key: string]: object } {
        baseName = baseName ? baseName + '.' : ''
        let obj = {}
        for (let key in props) {
            if (typeof props[key] != 'object') {
                obj[baseName + key] = props[key]
            }
            else {
                Object.assign(obj, this.flatProps(props[key], key))
            }
        }

        return obj
    }


    render() {
        let { designer } = this.state
        let editors = this.getEditors(designer)
        if (editors.length == 0) {
            let empty = this.props.empty
            return <div className="text-center">{empty}</div>
        }

        let groupEditorsArray: { group: string, editors: { prop: string, editor: React.ReactElement<any> }[] }[] = []
        for (let i = 0; i < editors.length; i++) {
            let group = editors[i].group || ''
            let groupEditors = groupEditorsArray.filter(o => o.group == group)[0]
            if (groupEditors == null) {
                groupEditors = { group: editors[i].group, editors: [] }
                groupEditorsArray.push(groupEditors)
            }

            groupEditors.editors.push({ prop: editors[i].prop, editor: editors[i].editor })
        }

        return <React.Fragment>
            {groupEditorsArray.map((g) =>
                <div key={g.group} className="panel panel-default">
                    {g.group ? <div className="panel-heading">{proptDisplayNames[g.group] || g.group}</div> : null}
                    <div className="panel-body">
                        {g.editors.map((o, i) =>
                            <div key={o.prop} className="form-group clearfix">
                                <label key={guid()}>{proptDisplayNames[o.prop] || o.prop}</label> {/* KEY 为 guid，强制更新 */}
                                <div className="control">
                                    {o.editor}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            )}
        </React.Fragment>
    }

    get element() {
        return this._element;
    }

}