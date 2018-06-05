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
            this.componentDidMount = this.myComponentDidMount;
        }
        get id() {
            let id = this.props.id;
            console.assert(id);
            return id;
        }
        get componentName() {
            var componentName = this.constructor['componentName'];
            console.assert(componentName != null);
            return componentName;
        }
        static htmlDOMProps(props) {
            let result = {};
            if (!props) {
                return result;
            }
            let keys = ['id', 'style', 'className', 'onClick'];
            for (let key in props) {
                if (keys.indexOf(key) >= 0) {
                    result[key] = props[key];
                }
            }
            return result;
        }
        loadControlCSS() {
            return __awaiter(this, void 0, void 0, function* () {
                let componentName = this.componentName;
                console.assert(componentName != null);
                let path = `${Control.componentsDir}/${componentName}/control`;
                requirejs([`less!${path}`]);
            });
        }
        myComponentDidMount() {
            if (this.originalComponentDidMount)
                this.originalComponentDidMount();
            this._designer.controlComponentDidMount.fire(this._designer, this);
            if (this.hasCSS) {
                this.loadControlCSS();
            }
        }
        //createElement(type: string | React.ComponentClass<any>, props: ControlProps<this>, ...children)
        commonCreateElement(type, props, ...children) {
            props = props || {};
            this.originalRef = props.ref;
            props.ref = (e) => {
                if (this.originalRef) {
                    this.originalRef(e);
                }
            };
        }
        createDesignTimeElement(type, props, ...children) {
            console.assert(this._designer != null);
            this.commonCreateElement(type, props, ...children);
            props = props || {};
            props.onClick = (e) => {
                this._designer.selectControl(this);
                e.stopPropagation();
            };
            if (type == 'a' && props.href) {
                props.href = 'javascript:';
            }
            else if (type == 'input') {
                delete props.onClick;
                props.readOnly = true;
            }
            let args = [type, props];
            for (let i = 2; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            return React.createElement.apply(React, args);
        }
        createRuntimeElement(type, props, ...children) {
            this.commonCreateElement(type, props, ...children);
            return React.createElement(type, props, ...children);
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
                        self.originalRender(self.createDesignTimeElement.bind(self)) :
                        self.originalRender(self.createRuntimeElement.bind(self));
                });
                return result;
            });
        }
        static getControlType(componentName) {
            return new Promise((resolve, reject) => {
                let controlType = customControlTypes[componentName];
                if (typeof controlType != 'string') {
                    resolve(controlType);
                    return;
                }
                let controlPath = controlType;
                requirejs([controlPath], (exports2) => {
                    let controlType = exports2['default'];
                    if (controlType == null)
                        throw new Error(`Default export of file '${controlPath}' is null.`);
                    controlType['componentName'] = componentName;
                    customControlTypes[componentName] = controlType;
                    resolve(controlType);
                }, (err) => reject(err));
            });
        }
        static loadTypes(elementData) {
            if (!elementData)
                throw pdesigner.Errors.argumentNull('elementData');
            let stack = new Array();
            stack.push(elementData);
            let ps = new Array();
            while (stack.length > 0) {
                let item = stack.pop();
                let componentName = item.type;
                ps.push(this.getControlType(componentName));
                let children = item.children || [];
                for (let i = 0; i < children.length; i++)
                    stack.push(children[i]);
            }
            return Promise.all(ps);
        }
        static loadAllTypes() {
            let ps = new Array();
            for (let key in customControlTypes) {
                if (typeof customControlTypes[key] == 'string') {
                    ps.push(this.getControlType(key));
                }
            }
            return Promise.all(ps);
        }
        static create(description) {
            let controlElement = this.createElement(description);
            return controlElement;
        }
        static createElement(description) {
            let componentName = description.type;
            let children = description.children || [];
            let data = description.props || {};
            data.id = description.props.id;
            data.key = data.id;
            console.assert(data.id != null);
            let controlType = customControlTypes[componentName];
            let childElements = children.length ? children.map(o => this.createElement(o)) : null;
            if (!controlType) {
                console.log(`${componentName} control class is null.`);
            }
            let controlElement = React.createElement(controlType ? controlType : componentName, data, childElements);
            return controlElement;
        }
        static register(controlName, controlType) {
            if (controlType == null && typeof controlName == 'function') {
                controlType = controlName;
                controlName = controlType.name;
                controlType['componentName'] = controlName;
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
            let result = { type: name, props: { id } };
            if (!this.isEmptyObject(data)) {
                result.props = data;
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
            let result = { type: name, props: { id } };
            if (!this.isEmptyObject(data)) {
                result.props = data;
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
    Control.connectorElementClassName = 'control-container';
    pdesigner.Control = Control;
    function createDesignTimeElement(type, props, ...children) {
        props = props || {};
        // if (typeof type == 'string')
        //     props.onClick = () => { };
        // else if (typeof type != 'string') {
        //     props.onClick = (event, control: Control<any, any>) => {
        //         if (control.context != null) {
        //             control.context.designer.selecteControl(control, type);
        //         }
        //     }
        // }
        if (type == 'a' && props.href) {
            props.href = 'javascript:';
        }
        else if (type == 'input') {
            delete props.onClick;
            props.readOnly = true;
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
            this.undoStack = new Array();
            this.redoStack = new Array();
            //======================================
            // 未保存时的页面数据
            // private previouPageData: string;
            //======================================
            this.snapshootVersion = 0;
            this.controlSelected = chitu.Callbacks();
            this.controlComponentDidMount = chitu.Callbacks();
            this.changed = chitu.Callbacks();
            if (this.props.pageData == null)
                throw new Error('Prop of pageData cannt be null.');
            this.state = { pageData: this.props.pageData };
            this.originalPageData = JSON.parse(JSON.stringify(this.props.pageData));
        }
        set_state(state, isUndoData) {
            super.setState(state);
            let { pageData } = state;
            if (pageData) {
                isUndoData = isUndoData == null ? false : isUndoData;
                if (this.pageDataIsChanged(pageData)) {
                    if (!isUndoData) {
                        this.undoStack.push({ data: JSON.stringify(pageData), version: this.snapshootVersion++ });
                    }
                    this.changed.fire(this, pageData);
                }
            }
        }
        save(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!callback)
                    throw pdesigner.Errors.argumentNull('callback');
                yield callback(this.state.pageData);
                this.originalPageData = JSON.parse(JSON.stringify(this.state.pageData));
                return;
            });
        }
        get canUndo() {
            return this.undoStack.length > 1;
        }
        undo() {
            if (!this.canUndo)
                return;
            let snapshoot = this.undoStack.pop();
            console.assert(this.undoStack.length > 0);
            let pageData = JSON.parse(this.undoStack[this.undoStack.length - 1].data);
            console.assert(typeof pageData == 'object');
            this.redoStack.push(snapshoot);
            this.set_state({ pageData }, true);
        }
        get canRedo() {
            return this.redoStack.length > 0;
        }
        redo() {
            if (!this.canRedo)
                return;
            let snapshoot = this.redoStack.pop();
            let pageData = JSON.parse(snapshoot.data);
            console.assert(typeof pageData == 'object');
            this.set_state({ pageData });
        }
        pageDataIsChanged(pageData) {
            let copy = JSON.parse(this.undoStack[this.undoStack.length - 1].data);
            let isChanged = !this.isEquals(copy, pageData);
            return isChanged;
        }
        // private static compareSkipFields = ['ref'];
        isEquals(obj1, obj2) {
            if ((obj1 == null && obj2 != null) || (obj1 != null && obj2 == null))
                return false;
            if (obj1 == null && obj2 == null)
                return true;
            var type = typeof obj1;
            if (type == 'number' || type == 'string' || obj1 instanceof Date) {
                return obj1 == obj2;
            }
            if (Array.isArray(obj1)) {
                if (!Array.isArray(obj2))
                    return false;
                if (obj1.length != obj2.length)
                    return false;
                for (let i = 0; i < obj1.length; i++) {
                    if (!this.isEquals(obj1[i], obj2[i])) {
                        return false;
                    }
                }
                return true;
            }
            let keys1 = Object.getOwnPropertyNames(obj1)
                .filter(o => !this.skipField(obj1, o))
                .sort();
            let keys2 = Object.getOwnPropertyNames(obj2)
                .filter(o => !this.skipField(obj2, o))
                .sort();
            if (!this.isEquals(keys1, keys2))
                return false;
            for (let i = 0; i < keys1.length; i++) {
                // for (var key in obj1) {
                let key = keys1[i];
                let value1 = obj1[key];
                let value2 = obj2[key];
                if (!this.isEquals(value1, value2)) {
                    return false;
                }
            }
            return true;
        }
        skipField(obj, field) {
            return typeof obj[field] == 'function';
        }
        updateControlProps(controlId, props) {
            let controlDescription = this.findControlData(controlId);
            console.assert(controlDescription != null);
            console.assert(props != null, 'props is null');
            controlDescription.props = controlDescription.props || {};
            for (let key in props) {
                controlDescription.props[key] = props[key];
            }
            this.set_state(this.state);
        }
        sortControlChildren(controlId, childIds) {
            let c = this.findControlData(controlId);
            c.children = childIds.map(o => c.children.filter(a => a.props.id == o)[0]).filter(o => o != null);
            this.set_state(this.state);
        }
        sortChildren(parentId, childIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!parentId)
                    throw pdesigner.Errors.argumentNull('parentId');
                if (!childIds)
                    throw pdesigner.Errors.argumentNull('childIds');
                let pageData = this.state.pageData;
                let parentControl = this.findControlData(parentId);
                console.assert(parentControl != null);
                console.assert(parentControl.children != null);
                console.assert(parentControl.children.length == childIds.length);
                parentControl.children = childIds.map(o => {
                    let child = parentControl.children.filter(a => a.props.id == o)[0];
                    console.assert(child != null, `child ${o} is null`);
                    return child;
                });
                this.set_state(this.state);
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
                let parentControl = this.findControlData(parentId);
                console.assert(parentControl != null);
                parentControl.children = parentControl.children || [];
                parentControl.children.push(childControl);
                this.sortChildren(parentId, childIds);
            });
        }
        /**
         * 选择指定的控件
         * @param control 指定的控件，可以为空，为空表示清空选择。
         */
        selectControl(control) {
            if (!control)
                throw pdesigner.Errors.argumentNull('control');
            // if (!control.hasEditor || control.props.disabled) {
            //     return;
            // }
            // console.assert(control != null);
            this.controlSelected.fire(this, control);
            // if (this.selectedControlId1) {
            //     $(`#${this.selectedControlId1}`).removeClass(Control.selectedClassName);
            // }
            let selectedControlId1 = control ? control.id : null;
            // $(`#${control.id}`).addClass(Control.selectedClassName);
            this.selectedControlId1 = selectedControlId1;
        }
        clearSelectControl() {
            $(`.${pdesigner.Control.selectedClassName}`).removeClass(pdesigner.Control.selectedClassName);
            this.selectedControlId1 = null;
            this.controlSelected.fire(this, null);
        }
        removeControl(controlId) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;
            let isRemoved = this.removeControlFrom(controlId, pageData.children);
            if (isRemoved) {
                this.set_state({ pageData });
            }
        }
        moveControl(controlId, parentId, childIds) {
            let control = this.findControlData(controlId);
            console.assert(control != null, `Cannt find control by id ${controlId}`);
            let pageData = this.state.pageData;
            console.assert(pageData.children);
            this.removeControlFrom(controlId, pageData.children);
            this.appendControl(parentId, control, childIds);
        }
        removeControlFrom(controlId, collection) {
            let controlIndex;
            for (let i = 0; i < collection.length; i++) {
                if (controlId == collection[i].props.id) {
                    controlIndex = i;
                    break;
                }
            }
            if (controlIndex == null) {
                for (let i = 0; i < collection.length; i++) {
                    let o = collection[i];
                    if (o.children && o.children.length > 0) {
                        let isRemoved = this.removeControlFrom(controlId, o.children);
                        if (isRemoved) {
                            return true;
                        }
                    }
                }
                return false;
            }
            if (controlIndex == 0) {
                collection.shift();
            }
            else if (controlIndex == collection.length - 1) {
                collection.pop();
            }
            else {
                collection.splice(controlIndex, 1);
            }
            return true;
        }
        // private findSelectedElement(): ElementData {
        //     let { selectedControlId } = this.state;
        //     if (selectedControlId) {
        //         return this.findControlData(selectedControlId)
        //     }
        //     return null;
        //     //return this.element.querySelector(`.${Control.selectedClassName}`) as HTMLElement;// || pageViwe.element;
        // }
        findControlData(controlId) {
            let pageData = this.state.pageData;
            let stack = new Array();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.props.id == controlId)
                    return item;
                stack.push(...(item.children || []));
            }
            return null;
        }
        onKeyDown(e) {
            const DELETE_KEY_CODE = 46;
            if (e.keyCode == DELETE_KEY_CODE) {
                // let { selectedControlId } = this.state;
                // let element = this.selectedControlId ? this.findControlData(this.selectedControlId) : null;
                // if (element == null) {
                //     return;
                // }
                // console.assert(element.props.id);
                // this.removeControl(element.props.id);
            }
        }
        componentDidMount() {
            console.assert(this.state.pageData != null);
            this.undoStack.push({
                data: JSON.stringify(this.state.pageData),
                version: this.snapshootVersion++
            });
        }
        render() {
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element, onKeyDown: (e) => this.onKeyDown(e) },
                h(pdesigner.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    pdesigner.PageDesigner = PageDesigner;
    pdesigner.DesignerContext = React.createContext({ designer: null });
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
            $(element).sortable({
                axis: "y",
                connectWith: `.${pdesigner.Control.connectorElementClassName}`,
                receive(event, ui) {
                },
                update: (event, ui) => {
                    let element = event.target;
                    if (ui.item && !ui.item[0].id) {
                        console.assert(ui.item.length == 1);
                        let componentName = ui.item.attr('data-control-name');
                        console.assert(componentName);
                        let ctrl = { type: componentName, props: { id: pdesigner.guid() } };
                        ui.item[0].setAttribute('id', ctrl.props.id);
                        //==================================================
                        // 将所有 id 子元素找出来，用于排序
                        let childIds = this.childrenIds(element);
                        //==================================================
                        // 需要 setTimout 才能删除
                        setTimeout(() => {
                            ui.item.remove();
                        });
                        //==================================================
                        this.designer.appendControl(element.id, ctrl, childIds);
                    }
                    else if (ui.item && ui.item[0].id) {
                        console.assert(ui.item.length == 1);
                        let childIds = this.childrenIds(element);
                        if (childIds.indexOf(ui.item[0].id) >= 0) {
                            //==================================================
                            // 需要 setTimout
                            setTimeout(() => {
                                this.designer.moveControl(ui.item[0].id, element.id, childIds);
                            });
                            //==================================================
                        }
                    }
                },
                stop() {
                    // ===============================================
                    // jquery ui 取消操作，让 react 更新 dom
                    // https://stackoverflow.com/questions/29725136/jquery-ui-sortable-with-react-js-buggy
                    $(element).sortable('cancel');
                    // ===============================================
                }
            });
        }
        childrenIds(element) {
            let childIds = new Array();
            for (let i = 0; i < element.children.length; i++) {
                if (!element.children.item(i).id)
                    continue;
                childIds.push(element.children.item(i).id);
            }
            return childIds;
        }
        componentDidMount() {
            if (this.designer) {
                this.sortableElement(this.element, this.designer);
            }
        }
        render(h) {
            let { emptyText, htmlTag } = this.props;
            let emptyElement = h("div", { className: "empty" }, emptyText || '');
            htmlTag = htmlTag || 'div';
            let controls = this.props.children || [];
            let self = this;
            return h(pdesigner.DesignerContext.Consumer, null, c => h(pdesigner.PageViewContext.Consumer, null, context => {
                self.designer = c.designer;
                let props = Object.assign(pdesigner.Control.htmlDOMProps(this.props), {
                    className: `place-holder ${pdesigner.Control.connectorElementClassName}`,
                    style: this.props.style, ref: (e) => this.element = e || this.element
                });
                return h(htmlTag, props, controls.length == 0 ? emptyElement : controls);
                // return <div {...Control.htmlDOMProps(this.props)} className={`place-holder ${Control.connectorElementClassName}`}
                //     style={this.props.style}
                //     ref={(e: HTMLElement) => this.element = e || this.element}>
                //     {controls.length == 0 ? emptyElement : controls}
                // </div>
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
            this.draggable($(`.${pdesigner.Control.connectorElementClassName}`));
            this.designer.controlComponentDidMount.add((sender, control) => {
                console.assert(control.element != null);
                this.draggable($(control.element));
            });
        }
        draggable(selector) {
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${pdesigner.Control.connectorElementClassName}`),
                helper: "clone",
                revert: "invalid",
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
                if (control == null) {
                    this.setState({ editor: null });
                    return;
                }
                if (!control.hasEditor) {
                    console.log(`Control ${control.constructor.name} has none editor.`);
                    return;
                }
                $(`.${pdesigner.Control.selectedClassName}`).removeClass(pdesigner.Control.selectedClassName);
                $(control.element).addClass(pdesigner.Control.selectedClassName);
                let editor = yield pdesigner.Editor.create(control);
                this.setState({ editor });
            }));
        }
        render() {
            let { editor } = this.state;
            let { emptyText } = this.props;
            emptyText = emptyText || '';
            return h(pdesigner.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, pdesigner.Control.htmlDOMProps(this.props), { className: "editor-panel panel panel-primary", ref: (e) => this.element = e || this.element }),
                    h("div", { className: "panel-heading" }, "\u63A7\u4EF6\u5C5E\u6027"),
                    h("div", { className: "panel-body" }, editor ? editor : h("div", { className: "empty" }, emptyText)));
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
            return h("div", Object.assign({}, pdesigner.Control.htmlDOMProps(this.props), { ref: (e) => this.element = e || this.element }),
                h(pdesigner.PageViewContext.Provider, { value: { pageView } }, this.props.children));
        }
    }
    pdesigner.PageView = PageView;
    pdesigner.Control.register(PageView);
})(pdesigner || (pdesigner = {}));
//# sourceMappingURL=pdesigner.js.map