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
                let componentName = control.componentName;
                let editorType = customEditorTypes[componentName];
                if (!editorType) {
                    throw new Error(`${componentName} editor type is not exists.`);
                }
                if (typeof editorType == 'string') {
                    editorType = yield new Promise((resolve, reject) => {
                        let editorPath = editorType;
                        requirejs([editorPath], (exports2) => {
                            let editor = exports2['default'];
                            if (editor == null)
                                throw new Error(`Default export of file '${editorPath}' is null.`);
                            resolve(editor);
                        }, (err) => reject(err));
                    });
                    customEditorTypes[componentName] = editorType;
                }
                let editorProps = { control, key: control.id };
                let editorElement = React.createElement(editorType, editorProps);
                return editorElement;
            });
        }
    }
    pdesigner.Editor = Editor;
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
    let h = React.createElement;
    let customControlTypes = {};
    class Control extends React.Component {
        constructor(props) {
            super(props);
            this.hasCSS = false;
            this.hasEditor = true;
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
        get componentName() {
            if (!this._componentName)
                this._componentName = this.props.componentName;
            console.assert(this._componentName);
            return this._componentName;
        }
        htmlProps() {
            let props = {};
            let keys = ['id', 'style', 'className'];
            for (let key in this.props) {
                if (keys.indexOf(key) >= 0) {
                    props[key] = this.props[key];
                }
            }
            return props;
        }
        loadControlCSS() {
            return __awaiter(this, void 0, void 0, function* () {
                let componentName = this.componentName;
                console.assert(componentName != null);
                let path = `${Control.componentsDir}/${componentName}/control`;
                requirejs([`less!${path}`]);
            });
        }
        static componentDidMount() {
            let self = this;
            if (self.originalComponentDidMount)
                self.originalComponentDidMount();
            self.element.onclick = function (e) {
                if (!self.hasEditor || self.props.disabled) {
                    self.props.disabled ?
                        console.log(`Control ${self.constructor.name} is disabled.`) :
                        console.log(`Control ${self.constructor.name} has none editor.`);
                    return;
                }
                let pageViwe = self instanceof pdesigner.PageView ? self : self._pageView;
                console.assert(pageViwe != null);
                let previousSelected = pageViwe.element.querySelector(`.${Control.selectedClassName}`) || pageViwe.element;
                previousSelected.className = previousSelected.className.replace(Control.selectedClassName, '');
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
            if (self.hasCSS) {
                self.loadControlCSS();
            }
        }
        static render() {
            let self = this;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                self._designer = context.designer;
                let result = h(pdesigner.PageViewContext.Consumer, null, context1 => {
                    self._pageView = context1.pageView;
                    if (typeof self.originalRender != 'function')
                        return null;
                    return context.designer != null ?
                        self.originalRender(createDesignTimeElement) :
                        self.originalRender(React.createElement);
                });
                return result;
            });
        }
        static create(description) {
            return __awaiter(this, void 0, void 0, function* () {
                let componentName = description.name;
                let children = description.children || [];
                let data = description.data || {};
                data.id = description.id;
                let controlType = customControlTypes[componentName];
                if (typeof controlType == 'string') {
                    let controlPath = controlType; //`${Control.componentsDir}/${name}/control`;
                    controlType = yield new Promise((resolve, reject) => {
                        requirejs([controlPath], (exports2) => {
                            let controlType = exports2['default'];
                            if (controlType == null)
                                throw new Error(`Default export of file '${controlPath}' is null.`);
                            resolve(controlType);
                        }, (err) => reject(err));
                    });
                    console.assert(controlType != null);
                    customControlTypes[componentName] = controlType;
                }
                if (controlType) {
                    data.componentName = componentName;
                }
                else {
                    console.log(`${componentName} control class is null.`);
                }
                children.forEach(o => {
                    o.data = o.data || {};
                    o.data.key = o.id;
                    o.data.id = o.id;
                });
                let childElements;
                if (children.length)
                    childElements = yield Promise.all(children.map(o => this.create(o)));
                console.assert(data.id != null);
                let controlElement = React.createElement(controlType ? controlType : componentName, data, childElements);
                // console.assert(typeof controlElement.type == 'string', `Typeof ${componentName} control type is ${typeof controlElement.type} `);
                return controlElement;
            });
        }
        static register(controlName, controlType) {
            if (controlType == null && typeof controlName == 'function') {
                controlType = controlName;
                controlName = controlType.name;
            }
            if (!controlName)
                throw pdesigner.Errors.argumentNull('controlName');
            if (!controlType)
                throw pdesigner.Errors.argumentNull('controlType');
            customControlTypes[controlName] = controlType;
        }
        static getComponentNameByType(type) {
            for (let key in customControlTypes) {
                if (customControlTypes[key] == type)
                    return key;
            }
            return null;
        }
        static export(control) {
            let id = control.props.id;
            console.assert(id != null);
            let name = control.componentName;
            console.assert(name != null);
            let data = Control.trimProps(control.props);
            let childElements;
            if (control.props.children != null) {
                childElements = Array.isArray(control.props.children) ?
                    control.props.children :
                    [control.props.children];
            }
            let result = { id, name };
            if (!this.isEmptyObject(data)) {
                result.data = data;
            }
            if (childElements) {
                result.children = childElements.map(o => Control.exportElement(o));
            }
            return result;
        }
        static exportElement(element) {
            let controlType = element.type;
            console.assert(controlType != null, `Element type is null.`);
            let id = element.props.id;
            let name = typeof controlType == 'function' ? this.getComponentNameByType(controlType) : controlType;
            let data = Control.trimProps(element.props);
            let childElements;
            if (element.props.children) {
                childElements = Array.isArray(element.props.children) ?
                    element.props.children : [element.props.children];
            }
            let result = { id, name };
            if (!this.isEmptyObject(data)) {
                result.data = data;
            }
            if (childElements) {
                result.children = childElements.map(o => this.exportElement(o));
            }
            return result;
        }
        static trimProps(props) {
            let data = {};
            let skipFields = ['id', 'componentName', 'key', 'ref', 'children'];
            for (let key in props) {
                let isSkipField = skipFields.indexOf(key) >= 0;
                if (key[0] == '_' || isSkipField) {
                    continue;
                }
                data[key] = props[key];
            }
            return data;
        }
        static isEmptyObject(obj) {
            if (obj == null)
                return true;
            let names = Object.getOwnPropertyNames(obj);
            return names.length == 0;
        }
    }
    Control.componentsDir = 'components';
    Control.selectedClassName = 'control-selected';
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
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            this.controlSelected = chitu.Callbacks();
            this.controlComponentDidMount = chitu.Callbacks();
            this.state = { pageData: this.props.pageData };
        }
        static createContext(value) {
            return React.createContext(value);
        }
        // selectControl(controlId: string): any {
        //     let c = this.findControl(controlId);
        //     console.assert(c != null);
        //     this.setState({ selectedControlId: c.id });
        // }
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
        sortControlChildren(controlId, childIds) {
            let c = this.findControl(controlId);
            c.children = childIds.map(o => c.children.filter(a => a.id == o)[0]).filter(o => o != null);
            this.setState(this.state);
        }
        sortChildren(parentId, childIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!parentId)
                    throw pdesigner.Errors.argumentNull('parentId');
                if (!childIds)
                    throw pdesigner.Errors.argumentNull('childIds');
                let pageData = this.state.pageData;
                let parentControl = this.findControl(parentId);
                console.assert(parentControl != null);
                console.assert(parentControl.children != null);
                console.assert(parentControl.children.length == childIds.length);
                parentControl.children = childIds.map(o => {
                    let child = parentControl.children.filter(a => a.id == o)[0];
                    console.assert(child != null, `child ${o} is null`);
                    return child;
                });
                this.setState(this.state);
            });
        }
        appendControl(parentId, childControl, childIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!parentId)
                    throw pdesigner.Errors.argumentNull('parentId');
                if (!childControl)
                    throw pdesigner.Errors.argumentNull('childControl');
                if (!childIds)
                    throw pdesigner.Errors.argumentNull('childIds');
                let parentControl = this.findControl(parentId);
                console.assert(parentControl != null);
                parentControl.children = parentControl.children || [];
                parentControl.children.push(childControl);
                this.sortChildren(parentId, childIds);
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
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element },
                h(pdesigner.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    pdesigner.PageDesigner = PageDesigner;
    pdesigner.DesignerContext = PageDesigner.createContext({ designer: null });
})(pdesigner || (pdesigner = {}));
/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>
var pdesigner;
(function (pdesigner) {
    class ControlPlaceholder extends pdesigner.Control {
        constructor(props) {
            super(props);
            this.state = { controls: [] };
            this.hasEditor = false;
        }
        get persistentMembers() {
            return [];
        }
        sortableElement(element, designer) {
            let controls = this.state.controls;
            let ctrl = null;
            let childIds;
            $(element).sortable({
                axis: "y",
                change: () => {
                },
                receive: (event, ui) => {
                    let componentName = ui.item.attr('data-control-name');
                    ctrl = { id: pdesigner.guid(), name: componentName, data: {} };
                    ui.helper[0].setAttribute('id', ctrl.id);
                    childIds = new Array();
                    for (let i = 0; i < element.children.length; i++) {
                        if (!element.children.item(i).id)
                            continue;
                        childIds.push(element.children.item(i).id);
                    }
                    let helper = ui.helper[0];
                    helper.removeAttribute('style');
                    ui.helper.remove();
                },
                update: (event, ui) => {
                    if (ctrl) {
                        this.designer.appendControl(this.id, ctrl, childIds);
                        ctrl = null;
                    }
                    else {
                        let childIds = new Array();
                        for (let i = 0; i < element.children.length; i++)
                            childIds.push(element.children.item(i).id);
                        this.designer.sortChildren(this.id, childIds);
                    }
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
                return h("div", Object.assign({}, this.htmlProps(), { className: `place-holder ${pdesigner.ComponentToolbar.connectorElementClassName}`, style: this.props.style, ref: (e) => this.element = e || this.element }), controls.length == 0 ? emptyElement : controls);
            }));
        }
    }
    pdesigner.ControlPlaceholder = ControlPlaceholder;
    pdesigner.Control.register(ControlPlaceholder);
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    class ComponentToolbar extends React.Component {
        componentDidMount() {
            this.draggable($(`.${ComponentToolbar.connectorElementClassName}`));
            this.designer.controlComponentDidMount.add((sender, control) => {
                console.assert(control.element != null);
                this.draggable($(control.element));
            });
        }
        draggable(selector) {
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${ComponentToolbar.connectorElementClassName}`),
                helper: "clone",
                revert: "invalid"
            });
            // this.props.componets.forEach(o => this.designer.addComponentDefine(o));
        }
        render() {
            let props = {};
            for (let k in this.props) {
                if (k == 'componets')
                    continue;
                props[k] = this.props[k];
            }
            let componets = this.props.componets;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, props, { className: "component-panel panel panel-primary" }),
                    h("div", { className: "panel-heading" }, "\u5DE5\u5177\u680F"),
                    h("div", { className: "panel-body" },
                        h("ul", { ref: (e) => this.toolbarElement = this.toolbarElement || e }, componets.map((c, i) => h("li", { key: i, "data-control-name": c.name },
                            h("div", { className: "btn-link" },
                                h("i", { className: c.icon, style: { fontSize: 44, color: 'black' } })),
                            h("div", null, c.displayName))))));
            });
        }
    }
    ComponentToolbar.connectorElementClassName = 'control-container';
    pdesigner.ComponentToolbar = ComponentToolbar;
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
                return h("div", Object.assign({}, this.props, { className: "editor-panel panel panel-primary", ref: (e) => this.element = e || this.element }),
                    h("div", { className: "panel-heading" }, "\u63A7\u4EF6\u5C5E\u6027"),
                    h("div", { className: "panel-body" }, this.state.editor));
            });
        }
    }
    pdesigner.EditorPanel = EditorPanel;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    class Errors {
        static argumentNull(argumentName) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
    }
    pdesigner.Errors = Errors;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    pdesigner.PageViewContext = React.createContext({ pageView: null });
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
            return h("div", Object.assign({}, this.htmlProps(), { ref: (e) => this.element = e || this.element }),
                h(pdesigner.PageViewContext.Provider, { value: { pageView } }, this.props.children));
        }
    }
    pdesigner.PageView = PageView;
    pdesigner.Control.register(PageView);
})(pdesigner || (pdesigner = {}));
//# sourceMappingURL=pdesigner.js.map