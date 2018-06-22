var jueying;
(function (jueying) {
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    jueying.guid = guid;
    jueying.classNames = {
        controlSelected: `control-selected `,
        emptyTemplates: `empty-templates`,
        loadingTemplates: `loading-templates`,
        templateSelected: `template-selected`,
        templateDialog: `template-dialog`,
    };
    // let templateDialog = {
    //     nameHeight: 40,
    //     fontSize: 22
    // }
    let element = document.createElement('style');
    element.type = 'text/css';
    element.innerHTML = `
        .${jueying.classNames.controlSelected} {
            border: solid 1px #337ab7!important;
        }
        .${jueying.classNames.emptyTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${jueying.classNames.loadingTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${jueying.classNames.templateSelected} .page-view {
            border: solid 1px #337ab7!important;
        }
        .${jueying.classNames.templateDialog} .name span {
            color: white;
        }
        .validationMessage {
            position: absolute;
            margin-top: -60px;
            background-color: red;
            color: white;
            padding: 4px 10px;
        }
    `;
    /*
        .${classNames.templateDialog} .name {
            margin-top: -${templateDialog.nameHeight}px;
            height: ${templateDialog.nameHeight}px;
            font-size: ${templateDialog.fontSize}px;
            text-align: center;
            padding-top: 6px;
            background-color: black;
            opacity: 0.5;
        }
    */
    document.head.appendChild(element);
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    class Editor extends React.Component {
        constructor(props) {
            super(props);
            console.assert(this.props.control.props != null);
            let controlProps = Object.assign({}, this.props.control.props);
            delete controlProps.children;
            this.state = JSON.parse(JSON.stringify(controlProps));
            this.originalRender = this.render;
            this.render = () => {
                return this.originalRender ? this.originalRender() : null;
            };
        }
        get designer() {
            return this.props.control.designer;
        }
        get element() {
            return this._element;
        }
        setState(state, callback) {
            console.assert(state != null);
            if (this.designer) {
                this.designer.updateControlProps(this.props.control.id, state);
            }
            return super.setState(state, callback);
        }
        Element(...children) {
            return React.createElement('div', {
                ref: (e) => {
                    this._element = e || this._element;
                }
            }, ...children);
        }
    }
    jueying.Editor = Editor;
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    let customControlTypes = {};
    let allInstance = {};
    class ControlFactory {
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
        static exportElement(element) {
            let controlType = element.type;
            console.assert(controlType != null, `Element type is null.`);
            let id = element.props.id;
            let name = typeof controlType == 'function' ? this.getComponentNameByType(controlType) : controlType;
            let data = this.trimProps(element.props);
            let childElements;
            if (element.props.children) {
                childElements = Array.isArray(element.props.children) ?
                    element.props.children : [element.props.children];
            }
            let result = { type: name, props: { id } };
            result.props = data;
            if (childElements) {
                result.children = childElements.map(o => this.exportElement(o));
            }
            return result;
        }
        static getComponentNameByType(type) {
            for (let key in customControlTypes) {
                if (customControlTypes[key] == type)
                    return key;
            }
            return null;
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
        static create(args, designer) {
            try {
                let c = customControlTypes[args.type];
                let type = args.type;
                let componentName = args.type;
                let controlType = customControlTypes[componentName];
                if (controlType) {
                    type = controlType;
                }
                let children = args.children ? args.children.map(o => this.create(o, designer)) : null;
                return React.createElement(jueying.DesignerContext.Consumer, { key: jueying.guid(), children: null }, (context) => {
                    let props = JSON.parse(JSON.stringify(args.props));
                    return React.createElement(type, props, children);
                });
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }
        static register(controlName, controlType) {
            if (controlType == null && typeof controlName == 'function') {
                controlType = controlName;
                controlName = controlType.name;
                controlType['componentName'] = controlName;
            }
            if (!controlName)
                throw jueying.Errors.argumentNull('controlName');
            if (!controlType)
                throw jueying.Errors.argumentNull('controlType');
            customControlTypes[controlName] = controlType;
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
        static createElement(control, type, props, ...children) {
            if (control != null && control.isDesignMode != null)
                return ControlFactory.createDesignTimeElement(control, type, props, ...children);
            return ControlFactory.createRuntimeElement(control, type, props, ...children);
        }
        static createDesignTimeElement(control, type, props, ...children) {
            props = props || {};
            if (props.id != null)
                props.key = props.id;
            if (type == 'a' && props.href) {
                props.href = 'javascript:';
            }
            else if (type == 'input' || type == 'button') {
                delete props.onClick;
                props.readOnly = true;
            }
            return React.createElement(type, props, ...children);
        }
        static createRuntimeElement(instance, type, props, ...children) {
            if (props != null && props.id != null)
                props.key = props.id;
            return React.createElement(type, props, ...children);
        }
    }
    jueying.ControlFactory = ControlFactory;
})(jueying || (jueying = {}));
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var jueying;
(function (jueying) {
    let h = React.createElement;
    let customControlTypes = {};
    let allInstance = {};
    class Control extends React.Component {
        constructor(props) {
            super(props);
            this.hasCSS = false;
            console.assert(this.props.id != null);
            this.originalRender = this.render;
            this.render = Control.render;
            this.originalComponentDidMount = this.componentDidMount;
            this.componentDidMount = this.myComponentDidMount;
            allInstance[this.props.id] = this;
        }
        get id() {
            let id = this.props.id;
            console.assert(id);
            return id;
        }
        get isDesignMode() {
            if (this.props.designMode != null)
                return this.props.designMode;
            return this.designer != null;
        }
        get componentName() {
            var componentName = this.constructor['componentName'];
            console.assert(componentName != null);
            return componentName;
        }
        get designer() {
            return this._designer;
        }
        get hasEditor() {
            return jueying.EditorFactory.hasEditor(this.constructor.name);
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
            if (this.designer)
                this.designer.controlComponentDidMount.fire(this);
            if (this.hasCSS) {
                this.loadControlCSS();
            }
        }
        Element(type, props, ...children) {
            if (typeof type == 'string' && typeof (props) == 'object' && !React.isValidElement(props)) {
                //Element(type: string, props: ControlProps<this>, ...children: JSX.Element[])
            }
            else if (typeof type == 'string' && (props == null || typeof (props) == 'object' && React.isValidElement(props) ||
                typeof (props) == 'string')) {
                // Element(type: string, ...children: JSX.Element[])
                children = children || [];
                if (props)
                    children.unshift(props);
                props = {};
                if (children.length == 0)
                    children = null;
            }
            else if (typeof type == 'object' && React.isValidElement(type) && props == null) {
                children = [type];
                type = 'div';
                props = {};
            }
            else if (typeof type == 'object' && !React.isValidElement(type) && React.isValidElement(props)) {
                children = [props];
                props = type;
                type = 'div';
            }
            else {
                throw new Error('not implement');
            }
            if (this.props.id)
                props.id = this.props.id;
            if (this.props.style) {
                props.style = props.style ? Object.assign(props.style, this.props.style) : this.props.style;
            }
            if (this.props.className)
                props.className = this.props.className;
            if (this.props.tabIndex)
                props.tabIndex = this.props.tabIndex;
            if (this.isDesignMode && typeof type == 'string') {
                props.onClick = (e) => {
                    if (this.designer) {
                        this.designer.selectControl(this);
                        e.stopPropagation();
                    }
                };
            }
            let originalRef = props.ref;
            props.ref = (e) => {
                if (originalRef) {
                    originalRef(e);
                }
                this.element = e || this.element;
            };
            try {
                return jueying.ControlFactory.createElement(this, type, props, ...children);
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }
        static render() {
            let self = this;
            return h(jueying.DesignerContext.Consumer, null, context => {
                self._designer = context.designer;
                if (typeof self.originalRender != 'function')
                    return null;
                let h = (type, props, ...children) => jueying.ControlFactory.createElement(self, type, props, ...children);
                return self.originalRender(h);
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
                throw jueying.Errors.argumentNull('elementData');
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
            return jueying.ControlFactory.loadAllTypes();
        }
        static getInstance(id) {
            if (!id)
                throw jueying.Errors.argumentNull('id');
            return allInstance[id];
        }
        static create(args, designer) {
            return jueying.ControlFactory.create(args);
        }
        static getComponentNameByType(type) {
            for (let key in customControlTypes) {
                if (customControlTypes[key] == type)
                    return key;
            }
            return null;
        }
    }
    Control.tabIndex = 1;
    Control.componentsDir = 'components';
    // static selectedClassName = 'control-selected';
    Control.connectorElementClassName = 'control-container';
    Control.controlTypeName = 'data-control-name';
    jueying.Control = Control;
    function createDesignTimeElement(type, props, ...children) {
        props = props || {};
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
})(jueying || (jueying = {}));
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
var jueying;
(function (jueying) {
    class Callback {
        constructor() {
            this.funcs = new Array();
        }
        add(func) {
            this.funcs.push(func);
        }
        remove(func) {
            this.funcs = this.funcs.filter(o => o != func);
        }
        fire(args) {
            this.funcs.forEach(o => o(args));
        }
        static create() {
            return new Callback();
        }
    }
    jueying.Callback = Callback;
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            // private undoStack = new Array<Snapshoot>();
            // private redoStack = new Array<Snapshoot>();
            //======================================
            // 未保存时的页面数据
            // private originalPageData: ElementData;
            //======================================
            // 未保存时的页面数据
            // private previouPageData: string;
            //======================================
            this.snapshootVersion = 0;
            this.controlSelected = Callback.create();
            this.controlComponentDidMount = Callback.create();
            this.changed = Callback.create();
            // if (this.props.pageData == null)
            //     throw new Error('Prop of pageData cannt be null.');
            this.state = { pageData: this.props.pageData };
            // this.originalPageData = JSON.parse(JSON.stringify(this.props.pageData)) as ElementData;
        }
        componentWillReceiveProps(props) {
            debugger;
            this.setState({ pageData: props.pageData });
        }
        // private set_state(
        //     state: PageDesignerState,
        //     isUndoData?: boolean
        // ): void {
        //     super.setState(state);
        //     let { pageData } = state;
        //     if (pageData) {
        //         isUndoData = isUndoData == null ? false : isUndoData;
        //         if (this.pageDataIsChanged(pageData)) {
        //             if (!isUndoData) {
        //                 this.undoStack.push({ data: JSON.stringify(pageData), version: this.snapshootVersion++ });
        //             }
        //             this.changed.fire(pageData);
        //         }
        //     }
        // }
        // async save(callback: (pageData: ElementData) => Promise<any>) {
        //     if (!callback) throw Errors.argumentNull('callback');
        //     await callback(this.state.pageData);
        //     this.originalPageData = JSON.parse(JSON.stringify(this.state.pageData));
        //     return;
        // }
        get pageData() {
            return this.state.pageData;
        }
        set pageData(value) {
            this.setState({ pageData: value });
        }
        // get canUndo() {
        //     return this.undoStack.length > 1;
        // }
        // undo() {
        //     if (!this.canUndo)
        //         return;
        //     let snapshoot = this.undoStack.pop();
        //     console.assert(this.undoStack.length > 0);
        //     let pageData: ElementData = JSON.parse(this.undoStack[this.undoStack.length - 1].data);
        //     console.assert(typeof pageData == 'object');
        //     this.redoStack.push(snapshoot);
        //     this.set_state({ pageData }, true);
        // }
        // get canRedo() {
        //     return this.redoStack.length > 0;
        // }
        // redo() {
        //     if (!this.canRedo)
        //         return;
        //     let snapshoot = this.redoStack.pop();
        //     type PageDataType = this['state']['pageData']
        //     let pageData: PageDataType = JSON.parse(snapshoot.data);
        //     console.assert(typeof pageData == 'object');
        //     this.set_state({ pageData });
        // }
        // private pageDataIsChanged(pageData: ElementData) {
        //     type PageData = this['state']['pageData'];
        //     let copy = JSON.parse(this.undoStack[this.undoStack.length - 1].data) as PageData;
        //     let isChanged = !this.isEquals(copy, pageData);
        //     return isChanged;
        // }
        // private isEquals(obj1: object, obj2: object) {
        //     if ((obj1 == null && obj2 != null) || (obj1 != null && obj2 == null))
        //         return false;
        //     if (obj1 == null && obj2 == null)
        //         return true;
        //     var type = typeof obj1;
        //     if (type == 'number' || type == 'string' || obj1 instanceof Date) {
        //         return obj1 == obj2;
        //     }
        //     if (Array.isArray(obj1)) {
        //         if (!Array.isArray(obj2))
        //             return false;
        //         if (obj1.length != obj2.length)
        //             return false;
        //         for (let i = 0; i < obj1.length; i++) {
        //             if (!this.isEquals(obj1[i], obj2[i])) {
        //                 return false;
        //             }
        //         }
        //         return true;
        //     }
        //     let keys1 = Object.getOwnPropertyNames(obj1)
        //         .filter(o => !this.skipField(obj1, o))
        //         .sort();
        //     let keys2 = Object.getOwnPropertyNames(obj2)
        //         .filter(o => !this.skipField(obj2, o))
        //         .sort();
        //     if (!this.isEquals(keys1, keys2))
        //         return false;
        //     for (let i = 0; i < keys1.length; i++) {
        //         let key = keys1[i];
        //         let value1 = obj1[key];
        //         let value2 = obj2[key];
        //         if (!this.isEquals(value1, value2)) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }
        // private skipField(obj: any, field: string): boolean {
        //     return typeof obj[field] == 'function';
        // }
        updateControlProps(controlId, props) {
            let controlDescription = this.findControlData(controlId);
            console.assert(controlDescription != null);
            console.assert(props != null, 'props is null');
            controlDescription.props = controlDescription.props || {};
            for (let key in props) {
                controlDescription.props[key] = props[key];
            }
            this.setState(this.state);
        }
        sortControlChildren(controlId, childIds) {
            let c = this.findControlData(controlId);
            c.children = childIds.map(o => c.children.filter(a => a.props.id == o)[0]).filter(o => o != null);
            let { pageData } = this.state;
            this.setState({ pageData });
        }
        sortChildren(parentId, childIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!parentId)
                    throw jueying.Errors.argumentNull('parentId');
                if (!childIds)
                    throw jueying.Errors.argumentNull('childIds');
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
                this.setState({ pageData });
            });
        }
        appendControl(parentId, childControl, childIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!parentId)
                    throw jueying.Errors.argumentNull('parentId');
                if (!childControl)
                    throw jueying.Errors.argumentNull('childControl');
                // if (!childIds) throw Errors.argumentNull('childIds');
                let parentControl = this.findControlData(parentId);
                console.assert(parentControl != null);
                parentControl.children = parentControl.children || [];
                parentControl.children.push(childControl);
                if (childIds)
                    this.sortChildren(parentId, childIds);
                else {
                    let { pageData } = this.state;
                    this.setState({ pageData });
                }
                let control = jueying.Control.getInstance(childControl.props.id);
                console.assert(control != null);
                this.selectControl(control);
            });
        }
        setControlPosition(controlId, left, top) {
            return __awaiter(this, void 0, void 0, function* () {
                let control = this.findControlData(controlId);
                if (!control)
                    throw new Error(`Control ${controlId} is not exits.`);
                let style = control.props.style = (control.props.style || {});
                style.left = left;
                style.top = top;
                let { pageData } = this.state;
                this.setState({ pageData });
            });
        }
        selectControlById(controlId) {
            let control = jueying.Control.getInstance(controlId);
            this.selectControl(control);
        }
        /**
         * 选择指定的控件
         * @param control 指定的控件，可以为空，为空表示清空选择。
         */
        selectControl(control) {
            if (!control)
                throw jueying.Errors.argumentNull('control');
            this.controlSelected.fire(control);
            let selectedControlId1 = control ? control.id : null;
            this.selectedControlId1 = selectedControlId1;
            if (!control.hasEditor) {
                console.log(`Control ${control.constructor.name} has none editor.`);
                return;
            }
            $(`.${jueying.classNames.controlSelected}`).removeClass(jueying.classNames.controlSelected);
            $(control.element).addClass(jueying.classNames.controlSelected);
            if (selectedControlId1) {
                setTimeout(() => {
                    $(`#${selectedControlId1}`).focus();
                    console.log(`focuse ${selectedControlId1} element`);
                }, 100);
            }
        }
        clearSelectControl() {
            $(`.${jueying.classNames.controlSelected}`).removeClass(jueying.classNames.controlSelected);
            this.selectedControlId1 = null;
            this.controlSelected.fire(null);
        }
        removeControl(controlId) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;
            let isRemoved = this.removeControlFrom(controlId, pageData.children);
            if (isRemoved) {
                this.setState({ pageData });
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
        findControlData(controlId) {
            let pageData = this.state.pageData;
            if (!pageData)
                throw jueying.Errors.pageDataIsNull();
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
                let selectedControlId = this.selectedControlId1;
                let element = selectedControlId ? this.findControlData(selectedControlId) : null;
                if (element == null) {
                    return;
                }
                console.assert(element.props.id);
                this.removeControl(element.props.id);
            }
        }
        componentDidMount() {
            // console.assert(this.state.pageData != null);
            // this.undoStack.push({
            //     data: JSON.stringify(this.state.pageData),
            //     version: this.snapshootVersion++
            // });
        }
        render() {
            let designer = this;
            return h("div", { className: "pdesigner", ref: (e) => this.element = e || this.element, onKeyDown: (e) => this.onKeyDown(e) },
                h(jueying.DesignerContext.Provider, { value: { designer } }, this.props.children));
        }
    }
    jueying.PageDesigner = PageDesigner;
    let value = { designer: null };
    jueying.DesignerContext = React.createContext(value);
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    let customEditorTypes = {};
    class EditorFactory {
        static register(controlTypeName, editorType) {
            customEditorTypes[controlTypeName] = editorType;
        }
        static create(control) {
            return __awaiter(this, void 0, void 0, function* () {
                if (control == null)
                    throw jueying.Errors.argumentNull('control');
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
        static hasEditor(controlTypeName) {
            return customEditorTypes[controlTypeName] != null;
        }
    }
    jueying.EditorFactory = EditorFactory;
})(jueying || (jueying = {}));
/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>
/// <reference path="control-factory.tsx"/>
/// <reference path="editor-factory.tsx"/>
var jueying;
(function (jueying) {
    class ControlPlaceholder extends jueying.Control {
        constructor(props) {
            super(props);
            this.state = { controls: [] };
        }
        sortableElement(element, designer) {
            let controls = this.state.controls;
            $(element).sortable({
                axis: "y",
                connectWith: `.${jueying.Control.connectorElementClassName}`,
                receive(event, ui) {
                },
                update: (event, ui) => {
                    let element = event.target;
                    if (ui.item && !ui.item[0].id) { // 添加操作
                        console.assert(ui.item.length == 1);
                        let componentName = ui.item.attr('data-control-name');
                        console.assert(componentName);
                        let ctrl = { type: componentName, props: { id: jueying.guid() } };
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
                    else if (ui.item && ui.item[0].id) { // 更新操作
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
        droppableElement(element, designer) {
            let controls = this.state.controls;
            $(element).droppable({
                activate: function (event, ui) {
                    ui.helper.css({
                        'position': 'absolute',
                        'z-index': 1000,
                    });
                },
                drop: (event, ui) => {
                    let element = event.target;
                    console.assert(ui.draggable != null);
                    if (ui.draggable.attr(jueying.Control.controlTypeName)) { // 添加操作 //&& !ui.draggable[0].id
                        console.assert(ui.draggable.length == 1);
                        let componentName = ui.draggable.attr('data-control-name');
                        console.assert(componentName);
                        let baseRect = this.element.getClientRects()[0];
                        let iconRect = ui.helper[0].getClientRects()[0];
                        if (!iconRect)
                            return;
                        let left = iconRect.left - baseRect.left;
                        let top = iconRect.top - baseRect.top;
                        let ctrl = {
                            type: componentName,
                            props: {
                                id: jueying.guid(),
                                style: {
                                    position: 'absolute',
                                    left,
                                    top,
                                }
                            }
                        };
                        this.designer.appendControl(element.id, ctrl);
                        $(`#${ctrl.props.id}`).draggable();
                    }
                    else {
                        let ctrlId = ui.draggable.attr('id');
                        let pos = ui.draggable.position();
                        this.designer.setControlPosition(ctrlId, pos.left, pos.top);
                        this.designer.selectControlById(ctrlId);
                    }
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
                if (this.pageView.layout == 'flowing') {
                    this.sortableElement(this.element, this.designer);
                }
                else {
                    this.droppableElement(this.element, this.designer);
                    this.designer.controlSelected.add((ctrl) => {
                        if ($(ctrl.element).parents(`#${this.element.id}`).length) {
                            console.assert(ctrl.id, 'control id is null or empty.');
                            $(ctrl.element).draggable();
                        }
                    });
                }
            }
        }
        render(h) {
            let { emptyText, htmlTag } = this.props;
            let emptyElement = h("div", { className: "empty" }, emptyText || '');
            htmlTag = htmlTag || 'div';
            let controls = this.props.children || [];
            let self = this;
            return h(jueying.PageViewContext.Consumer, null, c => {
                this.pageView = c.pageView;
                return this.Element(htmlTag, h(React.Fragment, null, controls.length == 0 ? emptyElement : controls));
            });
        }
    }
    ControlPlaceholder.defaultProps = {
        className: `place-holder ${jueying.Control.connectorElementClassName}`,
        layout: 'flowing'
    };
    jueying.ControlPlaceholder = ControlPlaceholder;
    jueying.ControlFactory.register(ControlPlaceholder);
    class ControlPlaceholderEditor extends jueying.Editor {
        render() {
            let { name } = this.state;
            let props = {};
            return this.Element(h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } })))));
        }
    }
    jueying.ControlPlaceholderEditor = ControlPlaceholderEditor;
    jueying.EditorFactory.register('ControlPlaceholder', ControlPlaceholderEditor);
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    class ComponentToolbar extends React.Component {
        componentDidMount() {
            this.draggable($(`.${jueying.Control.connectorElementClassName}`));
            this.designer.controlComponentDidMount.add((control) => {
                console.assert(control.element != null);
                this.draggable($(control.element));
            });
        }
        draggable(selector) {
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${jueying.Control.connectorElementClassName}`),
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
            //key={i} data-control-name={c.name}
            let componets = this.props.componets;
            return h(jueying.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, props, { className: "component-panel panel panel-primary" }),
                    h("div", { className: "panel-heading" }, "\u5DE5\u5177\u680F"),
                    h("div", { className: "panel-body" },
                        h("ul", { ref: (e) => this.toolbarElement = this.toolbarElement || e }, componets.map((c, i) => {
                            let props = { key: i };
                            props[jueying.Control.controlTypeName] = c.name;
                            return h("li", Object.assign({}, props),
                                h("div", { className: "btn-link" },
                                    h("i", { className: c.icon, style: { fontSize: 44, color: 'black' } })),
                                h("div", null, c.displayName));
                        }))));
            });
        }
    }
    jueying.ComponentToolbar = ComponentToolbar;
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    class EditorPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { editor: null };
        }
        componentDidMount() {
            this.designer.controlSelected.add((control) => __awaiter(this, void 0, void 0, function* () {
                if (control == null) {
                    this.setState({ editor: null });
                    return;
                }
                if (!control.hasEditor) {
                    console.log(`Control ${control.constructor.name} has none editor.`);
                    return;
                }
                let editor = yield jueying.EditorFactory.create(control);
                this.setState({ editor });
            }));
        }
        render() {
            let { editor } = this.state;
            let { emptyText } = this.props;
            emptyText = emptyText || '';
            return h(jueying.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
                return h("div", Object.assign({}, jueying.Control.htmlDOMProps(this.props), { className: "editor-panel panel panel-primary", ref: (e) => this.element = e || this.element }),
                    h("div", { className: "panel-heading" }, "\u63A7\u4EF6\u5C5E\u6027"),
                    h("div", { className: "panel-body" }, editor ? editor : h("div", { className: "empty" }, emptyText)));
            });
        }
    }
    jueying.EditorPanel = EditorPanel;
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    class Errors {
        static argumentNull(argumentName) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
        static pageDataIsNull() {
            return new Error(`Page data is null.`);
        }
    }
    jueying.Errors = Errors;
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    jueying.PageViewContext = React.createContext({ pageView: null });
    /**
     * 移动端页面，将 PageData 渲染为移动端页面。
     */
    class PageView extends jueying.Control {
        constructor(props) {
            super(props);
        }
        get layout() {
            return this.props.layout;
        }
        render(h) {
            let children = React.Children.toArray(this.props.children) || [];
            let pageData = { controls: [] };
            let pageView = this;
            return this.Element(h(React.Fragment, null,
                h(jueying.PageViewContext.Provider, { value: { pageView } }, this.props.children)));
        }
    }
    PageView.defaultProps = { layout: 'flowing' };
    jueying.PageView = PageView;
    jueying.ControlFactory.register(PageView);
    class PageViewEditor extends jueying.Editor {
        render() {
            let { name, layout } = this.state;
            return this.Element(h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } }))),
                h("div", { className: "form-group" },
                    h("label", null, "\u5E03\u5C40"),
                    h("div", { className: "control" },
                        h("select", { className: "form-control", value: layout || '', disabled: true },
                            h("option", { value: "flowing" }, "\u6D41\u5F0F\u5B9A\u4F4D"),
                            h("option", { value: "absolute" }, "\u7EDD\u5BF9\u5B9A\u4F4D"))))));
        }
    }
    jueying.PageViewEditor = PageViewEditor;
    jueying.EditorFactory.register("PageView", PageViewEditor);
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    var extentions;
    (function (extentions) {
        extentions.classNames = {
            controlSelected: `control-selected `,
            emptyTemplates: `empty-templates`,
            loadingTemplates: `loading-templates`,
            templateSelected: `template-selected`,
            templateDialog: `template-dialog`,
            emptyDocument: `empty-document`,
        };
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
        extentions.guid = guid;
        let templateDialog = {
            nameHeight: 40,
            fontSize: 22
        };
        let element = document.createElement('style');
        element.type = 'text/css';
        element.innerHTML = `
        .${extentions.classNames.controlSelected} {
            border: solid 1px #337ab7!important;
        }
        .${extentions.classNames.emptyTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${extentions.classNames.loadingTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${extentions.classNames.templateSelected} .page-view {
            border: solid 1px #337ab7!important;
        }
        .${extentions.classNames.templateDialog} .name {
            margin-top: -${templateDialog.nameHeight}px;
            height: ${templateDialog.nameHeight}px;
            font-size: ${templateDialog.fontSize}px;
            text-align: center;
            padding-top: 6px;
            background-color: black;
            opacity: 0.5;
        }
        .${extentions.classNames.templateDialog} .name span {
            color: white;
        }
        .${extentions.classNames.emptyDocument} {
            text-align: center;
            padding: 100px 0;
        }
    `;
        document.head.appendChild(element);
    })(extentions = jueying.extentions || (jueying.extentions = {}));
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    var extentions;
    (function (extentions) {
        class DesignerFramework extends React.Component {
            constructor(props) {
                super(props);
                this.names = [];
                this.state = { changed: false, canUndo: false, canRedo: false };
            }
            namedControl(control) {
                let props = control.props;
                if (!props.name) {
                    let num = 0;
                    let name;
                    do {
                        num = num + 1;
                        name = `${control.type}${num}`;
                    } while (this.names.indexOf(name) >= 0);
                    this.names.push(name);
                    props.name = name;
                }
                if (!control.children || control.children.length == 0) {
                    return;
                }
                for (let i = 0; i < control.children.length; i++) {
                    this.namedControl(control.children[i]);
                }
            }
            static get dialogsElement() {
                let id = 'designer-framework-dialogs';
                let element = document.getElementById(id);
                if (!element) {
                    element = document.createElement('div');
                    element.id = id;
                    document.body.appendChild(element);
                }
                return element;
            }
            undo() {
                // this.pageDesigner.undo();
            }
            redo() {
                // this.pageDesigner.redo();
            }
            save() {
                // return this.pageDesigner.save(((pageData) => {
                //     localStorage.setItem(pageData.props.id, JSON.stringify(pageData));
                //     return Promise.resolve(pageData);
                // }));
            }
            assingControlIds(data) {
                // data.props.id = guid();
                let stack = new Array();
                stack.push(data);
                while (stack.length > 0) {
                    let item = stack.pop();
                    item.props.id = extentions.guid();
                    if (item.children != null && item.children.length > 0) {
                        for (let i = 0; i < item.children.length; i++)
                            stack.push(item.children[i]);
                    }
                }
            }
            fetchTemplates() {
                return __awaiter(this, void 0, void 0, function* () {
                    return extentions.templates;
                });
            }
            newFile() {
                return __awaiter(this, void 0, void 0, function* () {
                    extentions.TemplateDialog.show(() => this.fetchTemplates(), (tmp, fileName) => {
                        let pageData = JSON.parse(JSON.stringify(tmp.pageData));
                        let { pageDocuments } = this.state;
                        pageDocuments = pageDocuments || [];
                        pageDocuments.push({ pageData, name: fileName });
                        // this.pageDesigner.setState({ pageData });
                        // this.pageDesigner.pageData = pageData;
                        this.setState({
                            pageDocuments,
                            acitveDocumentIndex: pageDocuments.length - 1
                        });
                    });
                });
            }
            componentDidMount() {
                this.pageDesigner.changed.add(() => {
                    this.setState({
                        changed: true,
                        canRedo: false,
                        canUndo: false,
                    });
                });
            }
            render() {
                let { changed, canRedo, canUndo, acitveDocumentIndex, pageDocuments } = this.state;
                let { componets, title } = this.props;
                pageDocuments = pageDocuments || [];
                console.assert(pageDocuments != null);
                let pageDocument = acitveDocumentIndex != null ? pageDocuments[acitveDocumentIndex] : null;
                return h(jueying.PageDesigner, { pageData: pageDocument ? pageDocument.pageData : null, ref: (e) => this.pageDesigner = e || this.pageDesigner },
                    h("ul", null,
                        h("li", { className: "pull-left" },
                            h("h3", { style: { margin: 0, padding: '0 0 0 10px' } }, title || '')),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", disabled: !changed, ref: (e) => {
                                    if (!e)
                                        return;
                                    // ui.buttonOnClick(e, (event) => {
                                    //     return this.save()
                                    // }, { toast: '保存成功' })
                                } },
                                h("i", { className: "icon-save" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u4FDD\u5B58"))),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", disabled: !canRedo, onClick: () => this.redo() },
                                h("i", { className: "icon-repeat" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u91CD\u505A"))),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", disabled: !canUndo, onClick: () => this.undo() },
                                h("i", { className: "icon-undo" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u64A4\u9500"))),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", disabled: changed },
                                h("i", { className: "icon-eye-open" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u9884\u89C8"))),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", onClick: () => this.newFile() },
                                h("i", { className: "icon-file" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u65B0\u5EFA"))),
                        h("li", { className: "pull-right" },
                            h("button", { className: "btn btn-primary", ref: (e) => {
                                    if (!e)
                                        return;
                                    // ui.buttonOnClick(e, (event) => {
                                    //     return this.save()
                                    // }, { toast: '保存成功' })
                                } },
                                h("i", { className: "icon-folder-open" }),
                                h("span", { style: { paddingLeft: 4 } }, "\u6253\u5F00")))),
                    h("div", { className: "clearfix" }),
                    h("hr", { style: { margin: 0, borderWidth: 4 } }),
                    h(jueying.ComponentToolbar, { className: "component-panel", componets: componets }),
                    h(jueying.EditorPanel, { emptyText: "未选中控件，点击页面控件，可以编辑选中控件的属性" }),
                    h(jueying.DesignerContext.Consumer, null, context => {
                        let designer = context.designer;
                        let element;
                        if (designer.pageData) {
                            this.namedControl(designer.pageData);
                            element = jueying.Control.create(designer.pageData);
                        }
                        return h("div", { className: "main-panel", onClick: (e) => {
                                if (designer.pageData) {
                                    let pageViewId = designer.pageData.props.id;
                                    designer.selectControlById(pageViewId);
                                }
                            } }, element ?
                            h(React.Fragment, null,
                                h("ul", { className: "nav nav-tabs" }, pageDocuments.map((o, i) => h("li", { key: i, role: "presentation", className: i == acitveDocumentIndex ? 'active' : null },
                                    h("a", { href: "#" }, o.name)))),
                                h("div", { className: "page-container" }, element)) :
                            h("div", { className: extentions.classNames.emptyDocument }, "\u6682\u65E0\u6253\u5F00\u7684\u6587\u6863\uFF0C\u70B9\u51FB\u6253\u5F00\u6587\u6863"));
                    }));
            }
        }
        extentions.DesignerFramework = DesignerFramework;
    })(extentions = jueying.extentions || (jueying.extentions = {}));
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    var extentions;
    (function (extentions) {
        class LocalDocumentStorage {
            list() {
                return __awaiter(this, void 0, void 0, function* () {
                    // throw new Error("Method not implemented.");
                    let items = new Array();
                    for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (!key.startsWith(LocalDocumentStorage.prefix)) {
                            continue;
                        }
                        let text = localStorage.getItem(key);
                        items.push(JSON.parse(text));
                    }
                    return items;
                });
            }
            load(name) {
                return __awaiter(this, void 0, void 0, function* () {
                    let key = `${LocalDocumentStorage.prefix}_${name}`;
                    let text = localStorage.getItem(name);
                    if (text == null)
                        return null;
                    return JSON.parse(text);
                });
            }
            save(name, doc) {
                return __awaiter(this, void 0, void 0, function* () {
                    let key = `${LocalDocumentStorage.prefix}_${name}`;
                    let value = JSON.stringify(doc);
                    localStorage.setItem(key, value);
                });
            }
            remove(name) {
                return __awaiter(this, void 0, void 0, function* () {
                    let key = `${LocalDocumentStorage.prefix}_${name}`;
                    localStorage.removeItem(key);
                });
            }
        }
        LocalDocumentStorage.prefix = 'pdc';
        extentions.LocalDocumentStorage = LocalDocumentStorage;
    })(extentions = jueying.extentions || (jueying.extentions = {}));
})(jueying || (jueying = {}));
/// <reference path="comon.tsx"/>
var jueying;
(function (jueying) {
    var extentions;
    (function (extentions) {
        // let pd = jueying;
        class PageViewContainer extends React.Component {
            render() {
                let { phone_screen_width, phone_screen_height, scale } = PageViewContainer;
                let transform = `translateX(-${phone_screen_width * (1 - scale) / 2}px) translateY(-${phone_screen_height * (1 - scale) / 2}px) scale(${scale})`;
                let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
                return h("div", { style: style }, this.props.children);
            }
        }
        PageViewContainer.phone_screen_width = 320;
        PageViewContainer.phone_screen_height = 568;
        PageViewContainer.scale = 0.6;
        PageViewContainer.phone_height = PageViewContainer.phone_screen_height * PageViewContainer.scale;
        PageViewContainer.phone_width = PageViewContainer.phone_screen_width * PageViewContainer.scale;
        class TemplateDialog extends React.Component {
            constructor(props) {
                super(props);
                this.state = { templates: null, pageIndex: 0, selectedTemplateIndex: 0 };
            }
            selectTemplate(templateIndex) {
                this.setState({ selectedTemplateIndex: templateIndex });
            }
            confirm() {
                return __awaiter(this, void 0, void 0, function* () {
                    let isValid = yield this.validator.check();
                    if (!isValid)
                        return Promise.reject();
                    if (this.callback) {
                        let { templates, selectedTemplateIndex, fileName } = this.state;
                        let template = templates[selectedTemplateIndex];
                        this.callback(template, fileName);
                        this.close();
                    }
                });
            }
            loadTemplates(pageIndex) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!this.fetchTemplates)
                        return;
                    if (this.currentPageIndex == pageIndex)
                        return;
                    let tmps = yield this.fetchTemplates();
                    this.setState({ templates: tmps });
                    this.currentPageIndex = pageIndex;
                });
            }
            componentDidMount() {
                this.validator = new dilu.FormValidator(dialog_element, { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] });
            }
            render() {
                let { pageIndex, templates, selectedTemplateIndex, fileName } = this.state;
                this.loadTemplates(pageIndex);
                let height = PageViewContainer.phone_height;
                let width = PageViewContainer.phone_width;
                let style = {
                    float: 'left', height, width,
                };
                let margin = 15; // 间距
                let count = 3;
                let dialog_header_height = 50;
                let dialog_footer_height = 70;
                let dialog_content_width = width * count + margin * (count + 1);
                return h("div", { className: "modal-dialog" },
                    h("div", { className: "modal-content", style: { width: dialog_content_width } },
                        h("div", { className: "modal-header" },
                            h("button", { type: "button", className: "close", onClick: () => ui.hideDialog(dialog_element) },
                                h("span", { "aria-hidden": "true" }, "\u00D7")),
                            h("h4", { className: "modal-title" }, "\u9009\u62E9\u6A21\u677F")),
                        h("div", { className: "modal-body clearfix" },
                            h("div", { className: "form-group" }, templates == null ?
                                h("div", { className: extentions.classNames.loadingTemplates }, "\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D") :
                                templates.length == 0 ?
                                    h("div", { className: extentions.classNames.emptyTemplates }, "\u6682\u65E0\u6A21\u7248\u6570\u636E") :
                                    h(React.Fragment, null,
                                        templates.map((o, i) => h("div", { key: i, style: { width, height, float: i == templates.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }, onClick: () => this.selectTemplate(i), className: i == selectedTemplateIndex ? extentions.classNames.templateSelected : null },
                                            h(PageViewContainer, null,
                                                jueying.ControlFactory.create(o.pageData),
                                                h("div", { className: "name" },
                                                    h("span", null, o.name))))),
                                        h("div", { className: "clearfix" }))),
                            h("div", { className: "form-group", style: { marginBottom: 0 } },
                                h("label", { className: "pull-left" }, "\u6587\u4EF6\u540D"),
                                h("div", { style: { marginLeft: 100 } },
                                    h("input", { name: "fileName", className: "form-control", value: fileName || '', onChange: (e) => {
                                            fileName = e.target.value;
                                            this.setState({ fileName });
                                        } })))),
                        h("div", { className: "modal-footer" },
                            h("button", { className: "btn btn-default", onClick: () => this.close() }, "\u53D6\u6D88"),
                            h("button", { className: "btn btn-primary", onClick: () => this.confirm() }, "\u786E\u5B9A"))));
            }
            open() {
                this.setState({ pageIndex: 0, selectedTemplateIndex: 0, fileName: '' });
                ui.showDialog(dialog_element);
            }
            close() {
                ui.hideDialog(dialog_element);
            }
            static show(fetchTemplates, callback) {
                defaultInstance.callback = callback;
                defaultInstance.fetchTemplates = fetchTemplates;
                defaultInstance.open();
            }
        }
        extentions.TemplateDialog = TemplateDialog;
        let dialog_element = document.createElement('div');
        dialog_element.className = `modal fade ${extentions.classNames.templateDialog}`;
        document.body.appendChild(dialog_element);
        let defaultInstance;
        ReactDOM.render(h(TemplateDialog, { ref: (e) => defaultInstance = e || defaultInstance }), dialog_element);
    })(extentions = jueying.extentions || (jueying.extentions = {}));
})(jueying || (jueying = {}));
var jueying;
(function (jueying) {
    var extentions;
    (function (extentions) {
        let style = { width: '100%', height: '100%', minWidth: 'unset' };
        let template0 = {
            pageData: {
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
                            id: extentions.guid(),
                            htmlTag: 'section',
                            style: { height: '100%', margin: 0 }
                        },
                        children: [
                            {
                                type: 'TextHeader',
                                props: {
                                    id: extentions.guid(),
                                    text: '商品订购',
                                    size: 3,
                                },
                            },
                            {
                                type: 'ValueInput',
                                props: {
                                    id: extentions.guid(),
                                    dataField: '商品名称'
                                }
                            },
                            {
                                type: 'ValueInput',
                                props: {
                                    id: extentions.guid(),
                                    dataField: '商品数量'
                                }
                            },
                            {
                                type: 'ValueInput',
                                props: {
                                    id: extentions.guid(),
                                    dataField: '收件人'
                                }
                            },
                            {
                                type: 'ValueInput',
                                props: {
                                    id: extentions.guid(),
                                    dataField: '联系电话'
                                }
                            },
                            {
                                type: 'ValueInput',
                                props: {
                                    id: extentions.guid(),
                                    dataField: '收件地址'
                                }
                            },
                            {
                                type: 'SubmitButton',
                                props: {
                                    id: extentions.guid(),
                                    text: '提交订单'
                                }
                            },
                        ]
                    }
                ]
            },
            name: '商品订购'
        };
        let template1 = {
            pageData: {
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
            },
            name: '空白模板(流式定位)'
        };
        let template2 = {
            pageData: {
                type: 'PageView',
                props: {
                    id: extentions.guid(),
                    className: "page-view",
                    style,
                    componentName: "PageView",
                    layout: 'absolute'
                },
                children: [
                    {
                        type: "ControlPlaceholder",
                        props: {
                            id: extentions.guid(),
                            emptyText: "页面中部，可以从工具栏拖拉控件到这里",
                            htmlTag: 'section',
                            style: { height: '100%', margin: 0 }
                        }
                    }
                ]
            },
            name: '空白模板(绝对定位)'
        };
        extentions.templates = [template1, template2, template0,];
    })(extentions = jueying.extentions || (jueying.extentions = {}));
})(jueying || (jueying = {}));
//# sourceMappingURL=pdesigner.js.map