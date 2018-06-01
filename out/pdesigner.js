var pdesigner;
(function (pdesigner) {
    let customEditors = {};
    class Editor extends React.Component {
        constructor(props) {
            super(props);
            console.assert(this.props.control.state != null);
        }
        get state() {
            return this._state;
        }
        /**
         * 重写 set state， 在第一次赋值，将控件中 state 的持久化成员赋值过来。
         */
        set state(value) {
            value = value || {};
            if (this._state != null) {
                this._state = value;
                return;
            }
            var state = {};
            let keys = this.props.control.persistentMembers || [];
            let controlState = this.props.control.state;
            for (let i = 0; i < keys.length; i++) {
                var prop = controlState[keys[i]];
                if (prop !== undefined)
                    state[keys[i]] = prop;
            }
            this._state = Object.assign(value, state);
            ;
        }
        // get elementPage() {
        //     return this.props.elementPage;
        // }
        componentDidUpdate() {
            let control = this.props.control;
            console.assert(control != null);
            let controlState = control.state;
            let keys = control.persistentMembers;
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                controlState[key] = this.state[key];
            }
            control.setState(controlState);
        }
        static path(controlName) {
            return `${pdesigner.componentsDir}/${controlName}/editor`;
        }
        loadEditorCSS() {
            var typeName = this.constructor.name;
            typeName = typeName.replace('Editor', '');
            typeName = typeName[0].toLowerCase() + typeName.substr(1);
            requirejs([`less!${pdesigner.componentsDir}/${typeName}/editor`]);
        }
        bindInputElement(e, obj, fieldName, fieldType) {
            if (!e)
                return;
            if (typeof obj == 'string') {
                fieldName = obj;
                obj = this.state;
            }
            e.value = `${obj[fieldName] || ''}`;
            e.onchange = () => {
                if (fieldType == 'number') {
                    obj[fieldName] = Number.parseFloat(e.value);
                }
                else {
                    obj[fieldName] = e.value;
                }
                this.setState(this.state);
            };
        }
        bindCheckElement(e, obj, fieldName, fieldType) {
            if (!e)
                return;
            if (arguments.length == 3) {
                fieldName = arguments[1];
                fieldType = arguments[2];
                obj = this.state;
            }
            let parseValue = (text) => {
                let value;
                if (fieldType == 'number') {
                    value = text.indexOf('.') > 0 ? Number.parseFloat(text) : Number.parseInt(text);
                }
                else if (fieldType == 'boolean') {
                    value = text == 'false' ? false : text == 'true' ? true : null;
                }
                else {
                    value = text;
                }
                return value;
            };
            let sourceValue = obj[fieldName];
            let targetValue = parseValue(e.value);
            e.checked = sourceValue == targetValue;
            e.onchange = () => {
                let value = parseValue(e.value);
                obj[fieldName] = value;
                this.setState(this.state);
            };
        }
        static register(controlTypeName, editorType) {
            customEditors[controlTypeName] = editorType;
        }
        static createEditorElement(control) {
            let controlTypeName = control.constructor.name;
            let editorType = customEditors[controlTypeName];
            if (editorType == null)
                return null;
            // if (!Editor.isRegister(controlTypeName)) {
            // await this.designer.registerEditor(controlTypeName);
            // }
            debugger;
            let props = { control, key: control.id };
            return React.createElement(editorType, props);
        }
        static isRegister(controlTypeName) {
            return customEditors[controlTypeName] != null;
        }
    }
    pdesigner.Editor = Editor;
})(pdesigner || (pdesigner = {}));
var pdesigner;
(function (pdesigner) {
    let h = React.createElement;
    let customControls = {};
    class Control extends React.Component {
        constructor(props) {
            super(props);
            this.hasCSS = false;
            this.children = new Array();
            this.setStateTimes = 0;
            this.originalRender = this.render;
            this.render = function () {
                let self = this;
                if (typeof self.originalRender != 'function')
                    return null;
                return h(pdesigner.DesignerContext.Consumer, null, context => {
                    // if (context.designer) {
                    //     console.assert(self.element != null);
                    //     self.element.onclick = function () {
                    //         context.designer.controlSelected.fire(context.designer, self)
                    //     }
                    // }
                    self._designer = context.designer;
                    let result = context.designer != null ?
                        self.originalRender(createDesignTimeElement) :
                        self.originalRender(React.createElement);
                    return result;
                });
            };
            this.originalComponentDidMount = this.componentDidMount;
            this.componentDidMount = function () {
                let self = this;
                if (self.originalComponentDidMount)
                    self.originalComponentDidMount();
                self.element.onclick = function (e) {
                    e.stopPropagation();
                    e.cancelBubble = true;
                    self._designer.controlSelected.fire(self._designer, self);
                };
            };
        }
        get id() {
            return this.props.id;
        }
        get state() {
            return this._state;
        }
        /**
         * 重写 set state， 在第一次赋值，将 props 的持久化成员赋值过来。
         */
        set state(value) {
            value = value || {};
            if (this._state != null) {
                this._state = value;
                return;
            }
            var state = {};
            let keys = this.persistentMembers || [];
            for (let i = 0; i < keys.length; i++) {
                var prop = this.props[keys[i]];
                if (prop !== undefined)
                    state[keys[i]] = prop;
            }
            this._state = Object.assign(value, state);
            ;
        }
        get hasEditor() {
            return true;
        }
        static register(controlType) {
            customControls[controlType.name] = controlType;
        }
        static isRegister(name) {
            return customControls[name] != null;
        }
        setState(state, callback) {
            // //=====================================================
            // // 忽略第一次设置，把第一次设置作为初始化
            // if (this.setStateTimes > 0)
            //     this.stateChanged.fire(this, state);
            // //=====================================================
            // this.setStateTimes = this.setStateTimes + 1;
            return super.setState(state, callback);
        }
        componentWillReceiveProps() {
            // debugger;
            let keys = this.persistentMembers || [];
            for (let i = 0; i < keys.length; i++) {
                var prop = this.props[keys[i]];
                if (prop !== undefined)
                    this.state[keys[i]] = prop;
            }
        }
        static createElement(description) {
            let controlType = customControls[description.name];
            let children = description.children || [];
            let data = description.data || {};
            data.id = description.id;
            let element = React.createElement(controlType ? controlType : description.name, data, children.length > 0 ? children.map(o => {
                o.data.key = o.id;
                return Control.createElement(o);
            }) : null);
            return element;
        }
        export() {
            let children = this.children || [];
            let members = this.persistentMembers || [];
            let state = this.state || {};
            let data = { id: this.props.id };
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
    pdesigner.Control = Control;
    // export class GenericControl extends Control<any, any> {
    //     get persistentMembers() {
    //         return [];
    //     };
    //     render() {
    //         React.createElement("input")
    //         return <div></div>;
    //     }
    // }
    pdesigner.componentsDir = 'components';
    // interface ControlProps<T> extends React.Props<T> {
    //     mobilePage: any
    // }
    // interface ControlConstructor {
    //     new(props): Control<any, any>
    // }
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
    // let components: { [key: string]: React.ComponentClass<any> } = {};
    // function component(name: string) {
    //     return function (constructor: React.ComponentClass<any>) {
    //         components[name] = constructor;
    //     }
    // }
    // export interface ComponentClass<T> extends React.ComponentClass<T> {
    //     attributes: { editorPath?: string, editorExport?: string }
    // }
    // export interface ControlState {
    //     persistentMembers: (keyof this)[];
    // }
})(pdesigner || (pdesigner = {}));
/// <reference path="page-control.tsx"/>
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
    class ControlPlaceholder extends pdesigner.Control {
        constructor(props) {
            super(props);
            this.state = { controls: [] };
        }
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
                    // let children = element.children;
                    // let controlIndex = previousControlId ? controls.map((o, i) => ({ id: o.id, index: i }))
                    //     .filter(o => o.id == previousControlId)
                    //     .map(o => o.index)[0] + 1 : 0;
                    let ctrl = { name: componentName, id: pdesigner.guid(), data: {} };
                    // if (controlIndex == controls.length)
                    //     controls.push(ctrl);
                    // else
                    //     controls.splice(controlIndex, 0, ctrl);
                    // this.setState(this.state);
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
        renderControls(controls, pageView) {
            console.assert(pageView);
            return h(pdesigner.DesignerContext.Consumer, null, context => context.designer != null ?
                this.renderDesigntimeControls(controls, pageView) :
                this.renderRuntimeControls(controls, pageView));
        }
        renderDesigntimeControls(controls, pageView) {
            controls = controls || [];
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                return controls.map((o, i) => h("div", { id: o.id, key: o.id, ref: (e) => __awaiter(this, void 0, void 0, function* () {
                        if (!e)
                            return;
                        var c = yield this.createControlInstance(o, e, pageView);
                        var componet = Object.assign(c.control, { id: o.id, name: o.name });
                        this.controls.push(componet);
                        if (o.selected != 'disabled') {
                            e.onclick = (event) => {
                                controls.filter(o => o.selected == true).forEach(o => o.selected = false);
                                // this.props.designTime.controlSelected(c.control, c.controlType);
                                if (context.designer.controlSelected) {
                                    debugger;
                                    // context.controlSelected.fire(this, c.control, c.controlType);
                                }
                                event.preventDefault();
                            };
                        }
                        // if (o.selected == true) {
                        //     this.selecteControl = c;
                        // }
                        // if (this.props.controlCreated)
                        //     this.props.controlCreated(componet);
                    }) }));
            });
        }
        renderRuntimeControls(controls, pageView) {
            return controls.map((o, i) => h("div", { id: o.id, key: o.id, ref: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!e)
                        return;
                    var c = yield this.createControlInstance(o, e, pageView);
                    var componet = Object.assign(c.control, { id: o.id, name: o.name });
                    this.controls.push(componet);
                    // if (this.props.controlCreated)
                    //     this.props.controlCreated(componet);
                }) }));
        }
        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        createControlInstance(controlData, element, pageView) {
            return __awaiter(this, void 0, void 0, function* () {
                let { id, name, data } = controlData;
                let types = yield pdesigner.PageView.getControlType(name);
                let props = Object.assign({}, data || {});
                // props.mobilePage = this;
                let control = yield new Promise((resolve, reject) => {
                    try {
                        let reactElement = React.createElement(types.Control, props, { ref: (e) => resolve(e) });
                        ReactDOM.render(h(pdesigner.PageViewContext.Provider, { value: { pageView } }, reactElement), element);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                element.className = `${name}-control`;
                // control.id = id;
                let result = { control, controlType: types.Control };
                return result;
            });
        }
        componentDidMount() {
            this.sortableElement(this.element, this.designer);
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
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${ControlToolbar.connectorElementClassName}`),
                helper: "clone",
                revert: "invalid"
            });
            this.props.componets.forEach(o => this.designer.addComponentDefine(o));
        }
        render() {
            let props = this.props;
            let componets = this.props.componets;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("ul", { className: props.className, style: props.style, ref: (e) => this.toolbarElement = this.toolbarElement || e }, componets.map((c, i) => h("li", { key: i, "data-control-name": c.name },
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
            this.state = { activeControlId: '', editors: {} };
        }
        componentDidMount() {
            this.designer.controlSelected.add((designer, control) => __awaiter(this, void 0, void 0, function* () {
                let controlTypeName = control.constructor.name;
                let editors = this.state.editors;
                let editor = editors[control.id];
                if (!editor) {
                    editor = yield designer.createEditorElement(control);
                    if (editor)
                        editors[control.id] = editor;
                }
                this.setState({ activeControlId: control.id });
            }));
        }
        render() {
            let editors = [];
            for (let key in this.state.editors) {
                let editor = this.state.editors[key];
                console.assert(editor != null);
                editors.push(editor);
            }
            let { className, style } = this.props;
            debugger;
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, { className, style }, { ref: (e) => this.element = e || this.element }), editors);
            });
        }
    }
    pdesigner.EditorPanel = EditorPanel;
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
    class TestControl extends pdesigner.Control {
        get persistentMembers() {
            return [];
        }
        render(h) {
            let { text } = this.state;
            text = text || "FFFF";
            return h("div", { ref: (e) => this.element = e || this.element }, text);
        }
    }
    pdesigner.Control.register(TestControl);
    pdesigner.DesignerContext = React.createContext({
        // controlSelected: null as chitu.Callback2<PageView, Control<any, any>, React.ComponentClass<any>>,
        designer: null
    });
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            this.controlSelected = chitu.Callbacks();
            this.componentDefines = {};
            this.state = { pageData: this.props.pageData };
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
                debugger;
                if (!pdesigner.Control.isRegister(name) || !pdesigner.Editor.isRegister(name))
                    yield this.loadComponent(childControl.name);
                this.setState(this.state);
            });
        }
        registerEditor(componentName) {
            let c = this.componentDefines[componentName];
            if (c == null)
                throw new Error(`Componet define of '${componentName}' is not exists`);
            let editorPath = c.editorPath;
            if (!editorPath)
                throw Error(`Editor path of ${componentName} is null`);
            return new Promise((resolve, reject) => {
                requirejs([c.editorPath], (exports2) => {
                    let editor = exports2['default'];
                    if (editor == null)
                        throw new Error(`File of '${c.editorPath}' export default is null.`);
                    pdesigner.Editor.register(componentName, editor);
                    resolve();
                }, (err) => reject(err));
            });
        }
        loadComponent(componentName) {
            return __awaiter(this, void 0, void 0, function* () {
                let c = this.componentDefines[componentName];
                if (c == null)
                    throw new Error(`Componet define is not exists`);
                return new Promise((resolve, reject) => {
                    requirejs([c.controlPath, c.editorPath], (exports1, exports2) => {
                        let control = exports1['default'];
                        let editor = exports2['default'];
                        console.assert(control != null);
                        console.assert(editor != null);
                        pdesigner.Control.register(control);
                        pdesigner.Editor.register(control.name, editor);
                        resolve();
                    }, (err) => reject(err));
                });
            });
        }
        addComponentDefine(item) {
            this.componentDefines[item.name] = item;
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
        createEditorElement(control) {
            return __awaiter(this, void 0, void 0, function* () {
                let controlTypeName = control.constructor.name;
                let c = this.componentDefines[controlTypeName];
                if (c == null) {
                    console.log(`Componet define of ${controlTypeName} is not exists.`);
                    return null;
                }
                if (c.editorPath == null)
                    throw new Error(`Editor path of '${controlTypeName}' is null.`);
                //TODO: 缓存 editorType
                let editorType = yield new Promise((resolve, reject) => {
                    requirejs([c.editorPath], (exports2) => {
                        let editor = exports2['default'];
                        if (editor == null)
                            throw new Error(`Default export of file '${c.editorPath}' is null.`);
                        pdesigner.Editor.register(control.name, editor);
                        resolve(editor);
                    }, (err) => reject(err));
                });
                let editorProps = { control, key: control.id };
                let editorElement = React.createElement(editorType, editorProps);
                return editorElement;
            });
        }
        render() {
            let context = {
                controlSelected: chitu.Callbacks(),
                designer: this
            };
            let emptyElement = h("div", { style: { paddingTop: 26, textAlign: 'center' } }, "\u8BF7\u4ECE\u5DE5\u5177\u680F\u62D6\u62C9\u63A7\u4EF6\u5230\u8FD9\u91CC");
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element },
                h(pdesigner.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    pdesigner.PageDesigner = PageDesigner;
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
            this.headerControlsCount = 0;
            this.footerControlsCount = 0;
            this.viewControlsCount = 0;
            this.createdControlCount = 0;
            this.state = {};
            this.controls = [];
        }
        static getInstanceByElement(element) {
            return element.mobilePage;
        }
        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        createControlInstance(controlData, element) {
            return __awaiter(this, void 0, void 0, function* () {
                let { name, data, selected } = controlData;
                // let id = data.id;
                console.assert(data != null);
                let types = yield PageView.getControlType(name);
                let props = Object.assign({}, data);
                let control = yield new Promise((resolve, reject) => {
                    let reactElement = React.createElement(types.Control, props, { ref: (e) => resolve(e) });
                    ReactDOM.render(h(pdesigner.PageViewContext.Provider, { value: { pageView: this } }, reactElement), element);
                });
                element.className = `${name}-control`;
                // control.id = id;
                let result = { control, controlType: types.Control };
                return result;
            });
        }
        /**
         * 获取控件在类型
         * @param controlName 控件的名称
         */
        static getControlType(controlName) {
            let arr = controlName.split(':');
            let fileName = arr[0];
            let name = arr[1] || 'default';
            let filePath = `${pdesigner.componentsDir}/${fileName}/control`;
            return new Promise((resolve, reject) => {
                requirejs([filePath], function (exports) {
                    resolve({ Control: exports[name], Props: exports.Props });
                });
            });
        }
        componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        renderRuntimeControls(controls) {
            controls = controls || [];
            return controls.map((o, i) => h("div", { id: o.id, key: o.id, ref: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!e)
                        return;
                    var c = yield this.createControlInstance(o, e);
                    var componet = Object.assign(c.control, { controlId: o.id, controlName: o.name });
                    this.controls.push(componet);
                    // if (this.props.controlCreated)
                    //     this.props.controlCreated(componet);
                }) }));
        }
        merge(pageData, productTemplate) {
            console.assert(productTemplate != null);
            console.assert(pageData != null);
            pageData.controls = pageData.controls.filter(o => o.save != false);
            //===========================================================
            // 复制一份数据，不要在源数据上修改
            productTemplate = JSON.parse(JSON.stringify(productTemplate));
            // pageData = JSON.parse(JSON.stringify(pageData));
            //===========================================================
            // 模板里面的控件，不需要保存
            productTemplate.controls.forEach(o => o.save = false);
            for (let i = 0; i < pageData.controls.length; i++) {
                let sourceControl = pageData.controls[i];
                // let templateControlId = templateControlIds[sourceControl.controlName];
                let controlIndex;
                // if (templateControlId != null) {
                //     for (let i = 0; i < productTemplate.controls.length; i++) {
                //         if (productTemplate.controls[i].controlId == templateControlId) {
                //             controlIndex = i;
                //             break;
                //         }
                //     }
                // }
                let existsControl = productTemplate.controls.filter(o => o.id == sourceControl.id)[0];
                if (existsControl) {
                    continue;
                }
                if (controlIndex != null) {
                    let i = controlIndex;
                    productTemplate.controls[i] = sourceControl;
                }
                else {
                }
            }
            // productTemplate.controls = productTemplate.controls.filter(o => o.controlId != templateControlIds.other);
            pageData.controls = productTemplate.controls;
            //Object.assign(pageData, productTemplate);
            // return productTemplate;
        }
        render() {
            let children = React.Children.toArray(this.props.children) || [];
            // let { pageData, template } = this.props;
            let pageData = { controls: [] };
            // if (template) {
            //     this.merge(pageData, template);
            // }
            this.viewControlsCount = 0;
            this.viewControlsCount = pageData.controls.filter(o => o.position == 'view').length; //this.viewControlsCount + (pageData.view.controls || []).length;
            let pageView = this;
            return h("div", { className: this.props.className, style: this.props.style, ref: (e) => this.element = e || this.element },
                h(pdesigner.PageViewContext.Provider, { value: { pageView } }, this.props.children));
        }
    }
    pdesigner.PageView = PageView;
    pdesigner.Control.register(PageView);
})(pdesigner || (pdesigner = {}));
//# sourceMappingURL=pdesigner.js.map