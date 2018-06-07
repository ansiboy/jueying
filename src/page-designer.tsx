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

namespace pdesigner {

    export interface PageDesignerProps extends React.Props<PageDesigner> {
        pageData: ElementData,
    }

    export interface PageDesignerState {
        pageData: ElementData
    }

    interface Snapshoot {
        data: string,
        version: number,
    }

    export class Callback<T> {
        private funcs = new Array<(...args: Array<any>) => void>();

        constructor() {
        }

        add(func: (args: T) => void) {
            this.funcs.push(func);
        }
        remove(func: (args: T) => any) {
            this.funcs = this.funcs.filter(o => o != func);
        }
        fire(args: T) {
            this.funcs.forEach(o => o(args));
        }

        static create<T>() {
            return new Callback<T>();
        }
    }

    export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {

        selectedControlId1: string;
        // selectedControlId: any;
        private element: HTMLElement;
        private undoStack = new Array<Snapshoot>();
        private redoStack = new Array<Snapshoot>();
        //======================================
        // 未保存时的页面数据
        private originalPageData: ElementData;
        //======================================
        // 未保存时的页面数据
        // private previouPageData: string;
        //======================================
        private snapshootVersion = 0;

        controlSelected = Callback.create<Control<ControlProps<any>, any>>();
        controlComponentDidMount = Callback.create<Control<any, any>>();
        changed = Callback.create<ElementData>();

        constructor(props) {
            super(props);

            if (this.props.pageData == null)
                throw new Error('Prop of pageData cannt be null.');

            this.state = { pageData: this.props.pageData };
            this.originalPageData = JSON.parse(JSON.stringify(this.props.pageData)) as ElementData;

        }

        set_state(
            state: PageDesignerState,
            isUndoData?: boolean
        ): void {

            super.setState(state);
            let { pageData } = state;

            if (pageData) {
                isUndoData = isUndoData == null ? false : isUndoData;
                if (this.pageDataIsChanged(pageData)) {
                    if (!isUndoData) {
                        this.undoStack.push({ data: JSON.stringify(pageData), version: this.snapshootVersion++ });
                    }
                    this.changed.fire(pageData);
                }
            }
        }

        async save(callback: (pageData: ElementData) => Promise<any>) {
            if (!callback) throw Errors.argumentNull('callback');
            await callback(this.state.pageData);

            this.originalPageData = JSON.parse(JSON.stringify(this.state.pageData));
            return;
        }

        get canUndo() {
            return this.undoStack.length > 1;
        }

        undo() {
            if (!this.canUndo)
                return;

            let snapshoot = this.undoStack.pop();
            console.assert(this.undoStack.length > 0);

            let pageData: ElementData = JSON.parse(this.undoStack[this.undoStack.length - 1].data);
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

            type PageDataType = this['state']['pageData']
            let pageData: PageDataType = JSON.parse(snapshoot.data);
            console.assert(typeof pageData == 'object');
            this.set_state({ pageData });
        }

        private pageDataIsChanged(pageData: ElementData) {
            type PageData = this['state']['pageData'];
            let copy = JSON.parse(this.undoStack[this.undoStack.length - 1].data) as PageData;
            let isChanged = !this.isEquals(copy, pageData);
            return isChanged;
        }

        private isEquals(obj1: object, obj2: object) {
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

        private skipField(obj: any, field: string): boolean {
            return typeof obj[field] == 'function';
        }

        updateControlProps(controlId: string, props: any): any {
            let controlDescription = this.findControlData(controlId);
            console.assert(controlDescription != null);
            console.assert(props != null, 'props is null');

            controlDescription.props = controlDescription.props || {};
            for (let key in props) {
                controlDescription.props[key] = props[key];
            }

            this.set_state(this.state);
        }

        sortControlChildren(controlId: string, childIds: string[]): any {
            let c = this.findControlData(controlId);
            c.children = childIds.map(o => c.children.filter(a => a.props.id == o)[0]).filter(o => o != null);
            this.set_state(this.state);
        }

        async sortChildren(parentId: string, childIds: string[]) {
            if (!parentId) throw Errors.argumentNull('parentId');
            if (!childIds) throw Errors.argumentNull('childIds');

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
        }
        async appendControl(parentId: string, childControl: ElementData, childIds: string[]) {
            if (!parentId) throw Errors.argumentNull('parentId');
            if (!childControl) throw Errors.argumentNull('childControl');
            if (!childIds) throw Errors.argumentNull('childIds');

            let parentControl = this.findControlData(parentId);
            console.assert(parentControl != null);
            parentControl.children = parentControl.children || [];
            parentControl.children.push(childControl);

            this.sortChildren(parentId, childIds);

            let control = Control.getInstance(childControl.props.id);
            console.assert(control != null);
            this.selectControl(control);
        }

        /**
         * 选择指定的控件
         * @param control 指定的控件，可以为空，为空表示清空选择。
         */
        selectControl(control: Control<any, any>): void {
            if (!control) throw Errors.argumentNull('control');

            this.controlSelected.fire(control)
            let selectedControlId1 = control ? control.id : null;
            this.selectedControlId1 = selectedControlId1;

            if (!control.hasEditor) {
                console.log(`Control ${control.constructor.name} has none editor.`);
                return;
            }

            $(`.${Control.selectedClassName}`).removeClass(Control.selectedClassName);
            $(control.element).addClass(Control.selectedClassName);

            if (selectedControlId1) {
                setTimeout(() => {
                    $(`#${selectedControlId1}`).focus();
                    console.log(`focuse ${selectedControlId1} element`);
                }, 100);
            }
        }



        clearSelectControl() {

            $(`.${Control.selectedClassName}`).removeClass(Control.selectedClassName);
            this.selectedControlId1 = null;
            this.controlSelected.fire(null);
        }

        removeControl(controlId: string) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;

            let isRemoved = this.removeControlFrom(controlId, pageData.children);
            if (isRemoved) {
                this.set_state({ pageData });
            }
        }

        moveControl(controlId: string, parentId: string, childIds: string[]) {
            let control = this.findControlData(controlId);
            console.assert(control != null, `Cannt find control by id ${controlId}`);

            let pageData = this.state.pageData;
            console.assert(pageData.children);
            this.removeControlFrom(controlId, pageData.children);
            this.appendControl(parentId, control, childIds);
        }

        private removeControlFrom(controlId: string, collection: ElementData[]): boolean {
            let controlIndex: number;
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
                        let isRemoved = this.removeControlFrom(controlId, o.children)
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

        private findControlData(controlId: string) {
            let pageData = this.state.pageData;
            let stack = new Array<ElementData>();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.props.id == controlId)
                    return item;

                stack.push(...(item.children || []));
            }

            return null;
        }

        private onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
            const DELETE_KEY_CODE = 46;
            if (e.keyCode == DELETE_KEY_CODE) {
                debugger;
                let selectedControlId = this.selectedControlId1
                let element = selectedControlId ? this.findControlData(selectedControlId) : null;
                if (element == null) {
                    return;
                }

                console.assert(element.props.id);
                this.removeControl(element.props.id);
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
            return <div className="pdesigner" ref={(e: HTMLElement) => this.element = e || this.element}
                onKeyDown={(e) => this.onKeyDown(e)}>
                <DesignerContext.Provider value={{ designer }}>
                    {this.props.children}
                </DesignerContext.Provider>
            </div >;
        }
    }

    export type DesignerContextValue = { designer: PageDesigner };
    let value: DesignerContextValue = { designer: null };
    export const DesignerContext = React.createContext(value);
}