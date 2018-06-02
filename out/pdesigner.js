var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var pdesigner;
(function (pdesigner) {
    let customEditorTypes = {};
    class Editor extends React.Component {
        constructor(props) {
            super(props);
            console.assert(this.props.control.props != null);
            this.state = this.props.control.props;
            this.originalRender = this.render;
            this.render = () => {
                return h(pdesigner.DesignerContext.Consumer, null, context => {
                    this.designer = context.designer;
                    return this.originalRender ? this.originalRender() : null;
                });
            };
        }
        setState(state, callback) {
            console.assert(state != null);
            if (this.designer) {
                this.designer.updateControlProps(this.props.control.id, state);
            }
            return super.setState(state, callback);
        }
        static register(controlTypeName, editorType) {
            customEditorTypes[controlTypeName] = editorType;
        }
        static create(control) {
            return __awaiter(this, void 0, void 0, function* () {
                let controlName = control.constructor.name;
                let name = controlName.endsWith('Control') ?
                    controlName.substr(0, controlName.length - 'Control'.length) :
                    controlName;
                let editorPath = `${pdesigner.Control.componentsDir}/${name}/editor`;
                //TODO: 缓存 editorType
                let editorType = customEditorTypes[controlName];
                if (!editorType) {
                    editorType = yield new Promise((resolve, reject) => {
                        requirejs([editorPath], (exports2) => {
                            let editor = exports2['default'];
                            if (editor == null)
                                throw new Error(`Default export of file '${editorPath}' is null.`);
                            resolve(editor);
                        }, (err) => reject(err));
                    });
                }
                let editorProps = { control, key: control.id };
                let editorElement = React.createElement(editorType, editorProps);
                return editorElement;
            });
        }
    }
    pdesigner.Editor = Editor;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    let h = React.createElement;
    let customControlTypes = {};
    class Control extends React.Component {
        constructor(props) {
            super(props);
            this.hasCSS = false;
            this.children = new Array();
            console.assert(this.props.id != null);
            this.originalRender = this.render;
            this.render = Control.render;
            this.originalComponentDidMount = this.componentDidMount;
            this.componentDidMount = Control.componentDidMount;
        }
        get id() {
            let id = this.props.id;
            console.assert(id);
            return id;
        }
        get hasEditor() {
            return true;
        }
        static componentDidMount() {
            let self = this;
            if (self.originalComponentDidMount)
                self.originalComponentDidMount();
            self.element.onclick = function (e) {
                if (!self.hasEditor) {
                    return;
                }
                let className = self.element.className;
                if (className.indexOf(Control.selectedClassName) < 0) {
                    className = `${className} ${Control.selectedClassName}`;
                    self.element.className = className;
                }
                e.stopPropagation();
                e.cancelBubble = true;
                self._designer.controlSelected.fire(self._designer, self);
            };
            self._designer.controlComponentDidMount.fire(self._designer, self);
        }
        static render() {
            let self = this;
            if (typeof self.originalRender != 'function')
                return null;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                self._designer = context.designer;
                let result = context.designer != null ?
                    self.originalRender(createDesignTimeElement) :
                    self.originalRender(React.createElement);
                return result;
            });
        }
        static create(description) {
            return __awaiter(this, void 0, void 0, function* () {
                let controlName = description.name;
                let children = description.children || [];
                let data = description.data || {};
                data.id = description.id;
                let controlType = customControlTypes[controlName];
                if (controlType == null && controlName[0].toUpperCase() == controlName[0]) {
                    let name = controlName.endsWith('Control') ?
                        controlName.substr(0, controlName.length - 'Control'.length) :
                        controlName;
                    let controlPath = `${Control.componentsDir}/${name}/control`;
                    controlType = yield new Promise((resolve, reject) => {
                        requirejs([controlPath], (exports2) => {
                            let controlType = exports2['default'];
                            if (controlType == null)
                                throw new Error(`Default export of file '${controlPath}' is null.`);
                            resolve(controlType);
                        }, (err) => reject(err));
                    });
                    console.assert(controlType != null);
                    Control.register(controlType);
                }
                children.forEach(o => {
                    o.data.key = o.id;
                    o.data.id = o.id;
                });
                let childElements;
                if (children.length)
                    childElements = yield Promise.all(children.map(o => this.create(o)));
                let controlElement = React.createElement(controlType ? controlType : controlName, data, childElements);
                return controlElement;
            });
        }
        static register(controlType) {
            customControlTypes[controlType.name] = controlType;
        }
        export() {
            let children = this.children || [];
            let members = this.persistentMembers || [];
            let state = this.state || {};
            let data = {};
            for (let key in state) {
                if (members.indexOf(key) >= 0)
                    data[key] = state[key];
            }
            let controlDescription = {
                id: this.id,
                name: this.constructor.name,
                data,
                children: children.map(o => o.export())
            };
            return controlDescription;
        }
    }
    Control.componentsDir = 'components';
    Control.selectedClassName = 'selected';
    pdesigner.Control = Control;
    function createDesignTimeElement(type, props, ...children) {
        props = props || {};
        if (typeof type == 'string')
            props.onClick = () => { };
        else if (typeof type != 'string') {
            props.onClick = (event, control) => {
                if (control.context != null) {
                    control.context.designer.selecteControl(control, type);
                }
            };
        }
        if (type == 'a' && props.href) {
            props.href = 'javascript:';
        }
        let args = [type, props];
        for (let i = 2; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        return React.createElement.apply(React, args);
    }
})(pdesigner || (pdesigner = {}));
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
 *
 ********************************************************************************/
var pdesigner;
(function (pdesigner) {
    pdesigner.DesignerContext = React.createContext({
        designer: null
    });
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            this.controlSelected = chitu.Callbacks();
            this.controlComponentDidMount = chitu.Callbacks();
            this.state = { pageData: this.props.pageData };
        }
        updateControlProps(controlId, props) {
            let controlDescription = this.findControl(controlId);
            console.assert(controlDescription != null);
            console.assert(props != null, 'props is null');
            controlDescription.data = controlDescription.data || {};
            for (let key in props) {
                controlDescription.data[key] = props[key];
            }
            this.setState(this.state);
        }
        appendControl(parentId, childControl, beforeControlId) {
            return __awaiter(this, void 0, void 0, function* () {
                let pageData = this.state.pageData;
                let parentControl = this.findControl(parentId);
                console.assert(parentControl != null);
                let controls = parentControl.children = parentControl.children || [];
                let controlIndex = beforeControlId ? parentControl.children.map((o, i) => ({ id: o.id, index: i }))
                    .filter(o => o.id == beforeControlId)
                    .map(o => o.index)[0] + 1 : 0;
                if (controlIndex == controls.length)
                    controls.push(childControl);
                else
                    controls.splice(controlIndex, 0, childControl);
                this.setState(this.state);
            });
        }
        findControl(controlId) {
            let pageData = this.state.pageData;
            let stack = new Array();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.id == controlId)
                    return item;
                stack.push(...(item.children || []));
            }
            return null;
        }
        render() {
            let context = {
                controlSelected: chitu.Callbacks(),
                designer: this
            };
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element },
                h(pdesigner.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    pdesigner.PageDesigner = PageDesigner;
})(pdesigner || (pdesigner = {}));
/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>
var pdesigner;
(function (pdesigner) {
    class ControlPlaceholder extends pdesigner.Control {
        constructor(props) {
            super(props);
            this.state = { controls: [] };
        }
        get hasEditor() { return false; }
        get persistentMembers() {
            return [];
        }
        sortableElement(element, designer) {
            let controls = this.state.controls;
            let previousControlId = null;
            $(element).sortable({
                axis: "y",
                change: () => {
                    for (let i = 0; i < element.children.length; i++) {
                        if (!element.children.item(i).id) {
                            let previewElement = element.children.item(i - 1);
                            previousControlId = previewElement ? previewElement.id : null;
                            break;
                        }
                    }
                },
                receive: (event, ui) => {
                    let helper = ui.helper[0];
                    helper.removeAttribute('style');
                    let componentName = ui.item.attr('data-control-name');
                    let target = ui.item.attr('data-target');
                    console.assert(componentName != null);
                    ui.helper.remove();
                    let ctrl = { name: componentName, id: pdesigner.guid(), data: {} };
                    this.designer.appendControl(this.id, ctrl, previousControlId);
                },
                update: (event, ui) => {
                    let view_controls = [];
                    let footer_controls = [];
                    //===================================================
                    // 排序 view controls
                    // for (let i = 0; i < element.children.length; i++) {
                    //     let child = element.children[i] as HTMLElement;
                    //     let control = controls.filter(o => o.id == child.id)[0];
                    //     console.assert(control != null);
                    //     view_controls[i] = control;
                    // }
                    //===================================================
                    // for (let i = 0; i < this.footerElement.children.length; i++) {
                    //     let child = this.footerElement.children[i] as HTMLElement;
                    //     let control = pageData.controls.filter(o => o.controlId == child.id && o.position == 'footer')[0];
                    //     footer_controls[i] = control;
                    // }
                    // //===================================================
                    // let header_controls = pageData.controls.filter(o => o.position == 'header');
                    // pageData.controls = [...header_controls, ...footer_controls, ...view_controls];
                }
            });
        }
        componentDidMount() {
            if (this.designer) {
                this.sortableElement(this.element, this.designer);
            }
        }
        render(h) {
            let { emptyElement } = this.props;
            emptyElement = emptyElement || h("div", null);
            let controls = this.props.children || [];
            let self = this;
            return h(pdesigner.DesignerContext.Consumer, null, c => h(pdesigner.PageViewContext.Consumer, null, context => {
                self.designer = c.designer;
                return h("div", { className: `place-holder ${pdesigner.ControlToolbar.connectorElementClassName}`, style: this.props.style, ref: (e) => this.element = e || this.element }, controls.length == 0 ? emptyElement : controls);
            }));
        }
    }
    pdesigner.ControlPlaceholder = ControlPlaceholder;
    pdesigner.Control.register(ControlPlaceholder);
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    class ControlToolbar extends React.Component {
        componentDidMount() {
            this.draggable($(`.${ControlToolbar.connectorElementClassName}`));
            this.designer.controlComponentDidMount.add((sender, control) => {
                console.assert(control.element != null);
                this.draggable($(control.element));
            });
        }
        draggable(selector) {
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${ControlToolbar.connectorElementClassName}`),
                helper: "clone",
                revert: "invalid"
            });
            // this.props.componets.forEach(o => this.designer.addComponentDefine(o));
        }
        render() {
            let props = this.props;
            let componets = this.props.componets;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("ul", Object.assign({}, this.props, { ref: (e) => this.toolbarElement = this.toolbarElement || e }), componets.map((c, i) => h("li", { key: i, "data-control-name": c.name },
                    h("div", { className: "btn-link" },
                        h("i", { className: c.icon, style: { fontSize: 44, color: 'black' } })),
                    h("div", null, c.displayName))));
            });
        }
    }
    ControlToolbar.connectorElementClassName = 'control-container';
    pdesigner.ControlToolbar = ControlToolbar;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    class EditorPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { editor: null };
        }
        componentDidMount() {
            this.designer.controlSelected.add((designer, control) => __awaiter(this, void 0, void 0, function* () {
                if (!control.hasEditor) {
                    console.log(`Control ${control.constructor.name} has none editor.`);
                    return;
                }
                let editor = yield pdesigner.Editor.create(control);
                this.setState({ editor });
            }));
        }
        render() {
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, this.props, { ref: (e) => this.element = e || this.element }), this.state.editor);
            });
        }
    }
    pdesigner.EditorPanel = EditorPanel;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    pdesigner.PageViewContext = React.createContext({
        pageView: null
    });
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    pdesigner.guid = guid;
    /**
     * 移动端页面，将 PageData 渲染为移动端页面。
     */
    class PageView extends pdesigner.Control {
        constructor(props) {
            super(props);
        }
        get hasEditor() {
            return this._hasEditor;
        }
        set hasEditor(value) {
            this._hasEditor = value;
        }
        render() {
            let children = React.Children.toArray(this.props.children) || [];
            let pageData = { controls: [] };
            let pageView = this;
            return h("div", Object.assign({}, this.props, { ref: (e) => this.element = e || this.element }),
                h(pdesigner.PageViewContext.Provider, { value: { pageView } }, this.props.children));
        }
    }
    pdesigner.PageView = PageView;
    pdesigner.Control.register(PageView);
})(pdesigner || (pdesigner = {}));
//# sourceMappingURL=pdesigner.js.map