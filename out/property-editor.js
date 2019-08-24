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
define(["require", "exports", "react", "./component", "./common"], function (require, exports, React, component_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PropertyEditor extends React.Component {
        constructor(props) {
            super(props);
            this._element = null;
            this.state = { editors: [] };
        }
        // componentWillReceiveProps(props: EditorProps) {
        //     this.setState({
        //         designer: props.designer,
        //     })
        // }
        static getDerivedStateFromProps(props, state) {
            return { designer: props.designer };
        }
        getEditors(designer) {
            if (designer == null) {
                return [];
            }
            // 各个控件相同的编辑器
            let commonPropEditorInfos = [];
            let componentDatas = designer.selectedComponents;
            for (let i = 0; i < componentDatas.length; i++) {
                let componentData = componentDatas[i];
                let propEditorInfos = component_1.Component.getPropEditors(componentData);
                if (i == 0) {
                    commonPropEditorInfos = propEditorInfos || [];
                }
                else {
                    let items = [];
                    commonPropEditorInfos.forEach(propInfo1 => {
                        propEditorInfos.forEach(propInfo2 => {
                            let propName1 = propInfo1.propName; //propInfo1.propNames.join('.')
                            let propName2 = propInfo2.propName; //propInfo2.propNames.join('.')
                            if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                                items.push(propInfo1);
                            }
                        });
                    });
                    commonPropEditorInfos = items;
                }
            }
            // 各个控件相同的属性值
            let commonFlatProps;
            for (let i = 0; i < componentDatas.length; i++) {
                let control = componentDatas[i];
                let controlProps = Object.assign({}, control.props);
                delete controlProps.children;
                controlProps = this.flatProps(controlProps);
                if (i == 0) {
                    commonFlatProps = controlProps;
                }
                else {
                    let obj = {};
                    for (let key in commonFlatProps) {
                        if (commonFlatProps[key] == controlProps[key])
                            obj[key] = controlProps[key];
                    }
                    commonFlatProps = obj;
                }
            }
            let editors = [];
            for (let i = 0; i < commonPropEditorInfos.length; i++) {
                let propEditorInfo = commonPropEditorInfos[i];
                let propNameParts = propEditorInfo.propName.split(".");
                let propName = propNameParts[propNameParts.length - 1]; //propEditorInfo.propNames[propEditorInfo.propNames.length - 1]
                let editorType = propEditorInfo.editorType;
                let propNames = propNameParts; //propEditorInfo.propNames;
                let editor = React.createElement(editorType, {
                    value: commonFlatProps[propNames.join('.')],
                    onChange: (value) => {
                        for (let i = 0; i < componentDatas.length; i++) {
                            let c = componentDatas[i];
                            console.assert(c.props.id != null);
                            designer.updateControlProps(c.props.id, propNames, value);
                        }
                    }
                });
                editors.push({ prop: propName, editor, group: propEditorInfo.group });
            }
            return editors;
        }
        flatProps(props, baseName) {
            baseName = baseName ? baseName + '.' : '';
            let obj = {};
            for (let key in props) {
                if (typeof props[key] != 'object') {
                    obj[baseName + key] = props[key];
                }
                else {
                    Object.assign(obj, this.flatProps(props[key], key));
                }
            }
            return obj;
        }
        render() {
            let { designer } = this.state;
            let editors = this.getEditors(designer);
            if (editors.length == 0) {
                let empty = this.props.empty;
                return React.createElement("div", { className: "text-center" }, empty);
            }
            let groupEditorsArray = [];
            for (let i = 0; i < editors.length; i++) {
                let group = editors[i].group || '';
                let groupEditors = groupEditorsArray.filter(o => o.group == group)[0];
                if (groupEditors == null) {
                    groupEditors = { group: editors[i].group, editors: [] };
                    groupEditorsArray.push(groupEditors);
                }
                groupEditors.editors.push({ prop: editors[i].prop, editor: editors[i].editor });
            }
            return React.createElement(React.Fragment, null, groupEditorsArray.map((g) => React.createElement("div", { key: g.group, className: "panel panel-default" },
                g.group ? React.createElement("div", { className: "panel-heading" }, common_1.proptDisplayNames[g.group] || g.group) : null,
                React.createElement("div", { className: "panel-body" }, g.editors.map((o, i) => React.createElement("div", { key: o.prop, className: "form-group" },
                    React.createElement("label", { key: common_1.guid() }, common_1.proptDisplayNames[o.prop] || o.prop),
                    " ",
                    React.createElement("div", { className: "control" }, o.editor)))))));
        }
        get element() {
            return this._element;
        }
    }
    exports.PropertyEditor = PropertyEditor;
});
//# sourceMappingURL=property-editor.js.map