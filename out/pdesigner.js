var pdesigner;
(function (pdesigner) {
    let customEditors = {};
    class Editor extends React.Component {
        constructor(props) {
            super(props);
            console.assert(this.props.control.state != null);
        }
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
        static register(controlTypeName, editorType) {
            customEditors[controlTypeName] = editorType;
        }
        static isRegister(controlTypeName) {
            return customEditors[controlTypeName] != null;
        }
    }
    pdesigner.Editor = Editor;
})(pdesigner || (pdesigner = {}));
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
    let h = React.createElement;
    let customControlTypes = {};
    pdesigner.componentsDir = 'components';
    class Control extends React.Component {
        constructor(props) {
            super(props);
            this.hasCSS = false;
            this.children = new Array();
            this.originalRender = this.render;
            this.render = function () {
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
        static create(description) {
            return __awaiter(this, void 0, void 0, function* () {
                let componentName = description.name;
                let children = description.children || [];
                let data = description.data || {};
                data.id = description.id;
                let controlType = customControlTypes[componentName];
                if (controlType == null && componentName[0].toUpperCase() == componentName[0]) {
                    let name = componentName.endsWith('Control') ?
                        componentName.substr(0, componentName.length - 'Control'.length) :
                        componentName;
                    let controlPath = `${pdesigner.componentsDir}/${name}/control`;
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
                children.forEach(o => o.data.key = o.id);
                let childElements;
                if (children.length)
                    childElements = yield Promise.all(children.map(o => this.create(o)));
                let controlElement = React.createElement(controlType ? controlType : componentName, data, childElements);
                return controlElement;
            });
        }
        static register(controlType) {
            customControlTypes[controlType.name] = controlType;
        }
        static isRegister(controlTypeName) {
            return customControlTypes[controlTypeName] != null;
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
        // private async loadControlType(componentName: string) {
        //     let c = this.componentDefines[componentName];
        //     if (c == null) {
        //         console.log(`Componet define of ${componentName} is not exists.`);
        //         return null;
        //     }
        //     if (c.controlPath == null)
        //         throw new Error(`Control path of '${componentName}' is null.`);
        //     let dir = this.props.componentsDirectory;
        //     let controlPath = dir ? `${dir}/${componentName}` : componentName;
        //     //TODO: 缓存 controlType
        //     let controlType = await new Promise<React.ComponentClass>((resolve, reject) => {
        //         requirejs([c.controlPath],
        //             (exports2) => {
        //                 let controlType: React.ComponentClass = exports2['default'];
        //                 if (controlType == null)
        //                     throw new Error(`Default export of file '${c.controlPath}' is null.`)
        //                 resolve(controlType);
        //             },
        //             (err) => reject(err)
        //         )
        //     })
        // }
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
            // let emptyElement = <div style={{ paddingTop: 26, textAlign: 'center' }}>
            //     请从工具栏拖拉控件到这里
            // </div>
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element },
                h(pdesigner.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    pdesigner.PageDesigner = PageDesigner;
    // class TestControl extends Control<any, any> {
    //     element: HTMLElement;
    //     get persistentMembers(): string[] {
    //         return []
    //     }
    //     render(h?: any) {
    //         let { text } = this.state;
    //         text = text || "FFFF"
    //         return <div ref={(e: HTMLElement) => this.element = e || this.element}>
    //             {text}
    //         </div>
    //     }
    // }
    // PageDesigner.registerControl(TestControl);
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
            if (this.designer) {
                debugger;
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
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, this.props, { ref: (e) => this.element = e || this.element }), editors);
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
            return h("div", Object.assign({}, this.props, { ref: (e) => this.element = e || this.element }),
                h(pdesigner.PageViewContext.Provider, { value: { pageView } }, this.props.children));
        }
    }
    pdesigner.PageView = PageView;
    pdesigner.Control.register(PageView);
})(pdesigner || (pdesigner = {}));
//# sourceMappingURL=pdesigner.js.map