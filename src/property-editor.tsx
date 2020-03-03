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
import { PropEditorInfo, Component } from "./component";
import { proptDisplayNames } from "./common";
import { PropEditorProps } from "./prop-editor";
import { Errors } from "./errors";
import { ComponentData } from "./models";
import { ComponentDataHandler } from "./component-data-handler";


export interface EditorProps extends React.Props<PropertyEditor> {
    designer: ComponentDataHandler,
    empty: string | JSX.Element,
    customRender?: (editComponents: ComponentData[], items: PropertyEditorInfo[]) => JSX.Element
}

interface EditorState {
    // designer: ComponentDataHandler | null,
    groupedEditors: GroupedEditor[]
}

export interface PropertyEditorInfo {
    group: string
    prop: string
    displayName: string
    editor: React.ReactElement<any>
}

type GroupedEditor = { group: string, prop: string, editor: React.ReactElement<any> };

export class PropertyEditor extends React.Component<EditorProps, EditorState>{

    private _element: HTMLElement | null = null;

    constructor(props: EditorProps) {
        super(props);

        this.state = { groupedEditors: [] };

        this.props.designer.componentSelected.add(() => {
            let editors = this.getEditors(this.props.designer);
            this.setState({ groupedEditors: editors });
        })
    }

    // static getDerivedStateFromProps(props: EditorProps, state: EditorState): Partial<EditorState> {
    //     return { designer: props.designer };
    // }

    private getEditors(designer: ComponentDataHandler): GroupedEditor[] {
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

        let editors: GroupedEditor[] = []
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
                    designer.updateComponentProps(componentProps);
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
            obj = obj[navPropsNames[i]];
            if (obj == null)
                return null;
        }

        return obj;
    }

    render() {
        let { designer } = this.props;
        let editors = this.state.groupedEditors; //this.getEditors(designer)
        if (editors.length == 0) {
            let empty = this.props.empty
            return <div className="text-center">{empty}</div>
        }

        if (this.props.customRender) {
            let items = editors.map(o => Object.assign({ displayName: proptDisplayNames[o.prop] || o.prop }, o));
            let r = this.props.customRender(designer.selectedComponents, items);
            if (r != null) {
                return r;
            }
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
                                <label>{proptDisplayNames[o.prop] || o.prop}</label>
                                <div className="control">
                                    <ErrorBoundary>
                                        {o.editor}
                                    </ErrorBoundary>
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


export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
        debugger
    }

    render() {
        let { error } = this.state || {} as this["state"];
        if (error) {
            // You can render any custom fallback UI
            return <div className="error">
                <div>{error.message}</div>
                <div>{error.stack}</div>
            </div>;
        }
        return this.props.children;
    }
}
