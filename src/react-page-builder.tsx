import { ComponentData } from "./models";
import { ComponentProps, Component, ComponentWrapperContext } from "./component";
import { Errors } from "./errors";
import { appendClassName, classNames, removeClassName } from "./style";
import { ComponentWrapper, ComponentWrapperDrapData } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { guid, constants } from "./common";
import { ComponentPanel } from "./component-panel";
import { PageBuilder, PageBuilderArguments } from "./page-builder";


type ReactFactory = (type: string | React.ComponentClass<any> | React.ComponentType, props: ComponentProps<any>, ...children: any[]) => JSX.Element;
type CreateElementContext = { components: React.Component[], componentTypes: string[] };
type PageBuilderContextValue = { pageBuilder: PageBuilder | null };

export const PageBuilderContext = React.createContext<PageBuilderContextValue>({ pageBuilder: null });


/** 基于 ReactJS 的页面渲染器 */
export class ReactPageBuilder implements PageBuilder {


    private designer: PageDesigner;
    private pageData: ComponentData;
    private pageElement: HTMLElement;

    constructor(args: PageBuilderArguments) {

        if (!args) throw Errors.argumentNull("args");

        this.designer = args.designer;
    }

    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {
        if (type == null) throw Errors.argumentNull('type');
        if (props == null) throw Errors.argumentNull('props');
        if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props');

        console.assert(props.id != null)
        if (props.id != null)
            props.key = props.id;

        //===================================================
        // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准

        let attr1 = Component.getAttribute(type)
        console.assert(attr1 != null)

        let attr2 = props.attr || {}
        let attr = Object.assign({}, attr1, attr2)
        delete props.attr
        //===================================================

        let className = props.selected ? appendClassName(props.className || '', classNames.componentSelected) : props.className

        let wrapperProps = Object.assign({}, props);
        delete wrapperProps.ref;
        wrapperProps.className = className;

        return <ComponentWrapper {...wrapperProps} designer={this.designer}
            source={{ type, attr, props, children }}>
        </ComponentWrapper>
    }

    createPage(pageData: ComponentData, pageElement: HTMLElement) {
        if (!pageData) throw Errors.argumentNull("pageData");
        if (!pageElement) throw Errors.argumentNull("pageElement");

        ReactPageBuilder.fillPageData(pageData);
        this.pageData = pageData;
        this.pageElement = pageElement;

        this.render();
    }

    private render() {
        console.assert(this.pageData.props.id != null);
        let c = ReactPageBuilder.createElement(this.pageData, this.createDesignTimeElement.bind(this));
        ReactDOM.render(<PageBuilderContext.Provider value={{ pageBuilder: this }} >
            {c}
        </PageBuilderContext.Provider>, this.pageElement);
    }

    updateComponentProps(componentProps: { componentId: string; propName: string; value: any; }[]): ComponentData[] {
        let componentDatas: ComponentData[] = [];
        for (let i = 0; i < componentProps.length; i++) {
            let { componentId, propName, value } = componentProps[i];

            let componentData = this.findComponentData(componentId);
            if (componentData == null)
                continue;

            let navPropsNames: string[] = propName.split(".");
            console.assert(componentData != null);
            console.assert(navPropsNames != null, 'props is null');

            componentData.props = componentData.props || {};

            let obj = componentData.props
            for (let i = 0; i < navPropsNames.length - 1; i++) {
                obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
            }

            obj[navPropsNames[navPropsNames.length - 1]] = value;
            componentDatas.push(componentData);
        }

        this.render();
        return componentDatas;
    }

    setComponentsSize(componentSiezs: { componentId: string, size: { width?: React.ReactText; height?: React.ReactText; } }[]): ComponentData[] {
        let componentDatas: ComponentData[] = [];
        for (let i = 0; i < componentSiezs.length; i++) {
            let { componentId, size } = componentSiezs[i];
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);

            componentDatas.push(componentData);
            let style = componentData.props.style = (componentData.props.style || {});
            if (size.height)
                style.height = size.height

            if (size.width)
                style.width = size.width;
        }

        this.render();

        return componentDatas;
    }

    findComponentData(componentId: string): ComponentData | null {
        let componentDatas = ReactPageBuilder.travelComponentData(this.pageData, (item) => item.props.id == componentId)
        return componentDatas[0];
    }

    /** 对 pageData 进行缺少的字段进行补充 */
    private static fillPageData(pageData: ComponentData) {
        if (pageData == null) {
            return
        }

        pageData.children = pageData.children || [];
        ReactPageBuilder.nameComponent(pageData);
        // PageDesigner.setComponetRefProp(pageData, components);

    }

    private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
        let stack = new Array<ComponentData>();
        stack.push(pageData);
        let r: ComponentData[] = [];
        // return new Promise((resolve, reject) => {
        filter = filter || (() => true);
        while (stack.length > 0) {
            let item = stack.shift();
            if (filter(item)) {
                r.push(item);
            }

            //===============================================
            // 子元素有可能为字符串, 过滤出对象
            let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
            //===============================================
            stack.push(...children);
        }

        return r;
    }

    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void {
        if (!parentId) throw Errors.argumentNull('parentId');
        if (!componentData) throw Errors.argumentNull('childComponent');

        ReactPageBuilder.nameComponent(componentData);
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists')

        console.assert(parentControl != null);
        parentControl.children = parentControl.children || [];
        if (componentIndex != null) {
            parentControl.children.splice(componentIndex, 0, componentData);
        }
        else {
            parentControl.children.push(componentData);
        }

        // let { pageData } = this.state;
        // this.setState({ pageData });

        // this.selectComponent(componentData.props.id);
        // this.componentAppend.fire(this)
        this.render();
    }

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponents(componentIds: string[] | string): void {

        if (typeof componentIds == 'string')
            componentIds = [componentIds]

        var stack: ComponentData[] = []
        stack.push(this.pageData)
        while (stack.length > 0) {
            let item = stack.pop()
            let isSelectedControl = componentIds.indexOf(item.props.id) >= 0
            item.props.selected = isSelectedControl

            let children = item.children || []
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }

        // this.setState({ pageData: this.pageData })
        // this.componentSelected.fire(this.selectedComponentIds)
        this.render();
        //====================================================
        // 设置焦点，以便获取键盘事件
        this.pageElement.focus()
        //====================================================
    }

    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]) {
        let componentDatas = new Array<ComponentData>()
        positions.forEach(o => {
            let { componentId } = o;
            let { left, top } = o.position;
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);

            let style = componentData.props.style = componentData.props.style || {};
            if (left)
                style.left = left;

            if (top)
                style.top = top;

            componentDatas.push(componentData)
        })

        this.render();
        return componentDatas;
    }

    removeComponents(componentIds: string[]) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;


        componentIds.forEach(controlId => {
            this.removeComponentFrom(controlId, pageData.children);
        })

    }

    moveComponent(componentId: string, parentId: string, childComponentIndex?: number) {
        let component = this.findComponentData(componentId);
        if (component == null)
            throw new Error(`Cannt find component by id ${componentId}`)

        console.assert(component != null, `Cannt find component by id ${componentId}`);

        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData.children);
        this.appendComponent(parentId, component, childComponentIndex);
    }


    private removeComponentFrom(componentId: string, collection: ComponentData[]): boolean {
        let compoentIndex: number | null = null;
        for (let i = 0; i < collection.length; i++) {
            if (componentId == collection[i].props.id) {
                compoentIndex = i;
                break;
            }
        }

        if (compoentIndex == null) {
            for (let i = 0; i < collection.length; i++) {
                let o = collection[i];
                if (o.children && o.children.length > 0) {
                    let isRemoved = this.removeComponentFrom(componentId, o.children)
                    if (isRemoved) {
                        return true;
                    }
                }
            }

            return false;
        }

        if (compoentIndex == 0) {
            collection.shift();
        }
        else if (compoentIndex == collection.length - 1) {
            collection.pop();
        }
        else {
            collection.splice(compoentIndex, 1);
        }

        return true;
    }

    /**
     * 对组件及其子控件进行命名
     * @param component 
     */
    private static nameComponent(component: ComponentData) {
        let namedComponents: { [key: string]: ComponentData } = {}
        let props = component.props = component.props || {};
        if (!props.name) {
            let num = 0;
            let name: string;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);

            namedComponents[name] = component
            props.name = name;
        }

        if (!props.id)
            props.id = guid();

        if (!component.children || component.children.length == 0) {
            return;
        }
        for (let i = 0; i < component.children.length; i++) {
            ReactPageBuilder.nameComponent(component.children[i]);
        }
    }

    static createElement(componentData: ComponentData, h?: ReactFactory): React.ReactElement<any> | null {
        return ReactPageBuilder._createElement(componentData, { components: [], componentTypes: [] }, h);
    }

    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */
    private static _createElement(componentData: ComponentData, context: CreateElementContext, h?: ReactFactory): React.ReactElement<any> | null {
        if (!componentData) throw Errors.argumentNull('componentData')

        h = h || React.createElement
        try {

            let type: string | React.ComponentClass | React.ComponentType = componentData.type;
            let componentName = componentData.type;
            let componentType = Component.getComponentType(componentName);
            if (componentType) {
                type = componentType;
            }

            let children: (React.ReactElement<any> | string)[] = componentData.children ? componentData.children.map(o => ReactPageBuilder._createElement(o, context, h)) : [];
            let props: ComponentProps<any> = componentData.props == null ? {} : Object.assign({}, componentData.props);//JSON.parse(JSON.stringify(componentData.props));
            props.style = Object.assign({}, props.style || {});

            if (componentType != null && componentType["defaultProps"]) {
                props = Object.assign({}, componentType["defaultProps"], props);
            }

            let result: JSX.Element


            if (typeof type == 'string') {
                if (props.text) {
                    children.push(props.text)
                }

                //=========================================
                // props.text 非 DOM 的 prop，并且已经使用完
                delete props.text
                if (h == React.createElement) {
                    delete props.attr
                }
                //=========================================
            }


            let masterPage: MasterPage;
            type = type == Component.Fragment ? React.Fragment : type
            let ref = props.ref;
            props.ref = function (e: any) {

                if (typeof ref == "function")
                    ref(e);

                if (e instanceof MasterPage) {
                    masterPage = e;
                    for (let i = 0; i < context.componentTypes.length; i++) {
                        let typeName = context.componentTypes[i];
                        let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
                        childComponents.push(context.components[i]);
                    }
                }
                else if (e != null) {
                    context.components.push(e);
                    context.componentTypes.push(typeof type == "string" ? type : type.name);
                    // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
                }
            };

            result = h(type, props, ...children);
            return result
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
}

export const MasterPageName = 'MasterPage'
type MasterPageContextValue = { master: MasterPage | null };
export const MasterPageContext = React.createContext<MasterPageContextValue>({ master: null });

export class MasterPage extends React.Component<ComponentProps<MasterPage>, { children: React.ReactElement<ComponentProps<MasterPage>>[] }> {

    childComponents: { [key: string]: React.Component[] } = {};

    constructor(props: ComponentProps<MasterPage>) {
        super(props)

        let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
        this.state = { children };
    }
    private static children(props: ComponentProps<MasterPage>): React.ReactElement<ComponentProps<any>>[] {
        let arr = props.children == null ? [] :
            Array.isArray(props.children) ? props.children : [props.children];

        let children: React.ReactElement<ComponentProps<any>>[] = []
        arr.forEach(o => {
            if (!React.isValidElement(o))
                return

            children.push(o as React.ReactElement<ComponentProps<any>>)
        })

        return children
    }

    static getDerivedStateFromProps(props: ComponentProps<MasterPage>) {
        let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
        return { children } as MasterPage["state"];
    }

    render() {
        let props = {} as any
        for (let key in this.props) {
            if (key == 'ref' || key == 'id')
                continue

            props[key] = this.props[key]
        }

        props.style = Object.assign({ minHeight: 40 }, props.style)
        let children = this.state.children.filter(o => o.props.parentid == null);

        let master = this;
        console.assert(master != null);
        return <MasterPageContext.Provider value={{ master }}>
            {children}
        </MasterPageContext.Provider>
    }
}
Component.register(MasterPageName, MasterPage, { container: false, resize: false, noWrapper: true })

/**
 * 占位符，用于放置控件
 */
export class PlaceHolder extends React.Component<{ id: string, empty?: string | JSX.Element }, {}>{
    private element: HTMLElement;

    constructor(props: PlaceHolder["props"]) {
        super(props)

        if (!this.props.id) {
            throw Errors.placeHolderIdNull()
        }
    }

    private designer: PageBuilder;
    private wraper: ComponentWrapper;

    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    private enableAppendDroppable(element: HTMLElement, master: MasterPage) {
        if (element.getAttribute('enable-append-droppable'))
            return

        element.setAttribute('enable-append-droppable', 'true')

        console.assert(element != null)
        element.addEventListener('dragover', function (event) {
            event.preventDefault()
            event.stopPropagation()

            element.className = appendClassName(element.className || '', 'active')

            let componentName = event.dataTransfer.getData(constants.componentData)
            if (componentName)
                event.dataTransfer.dropEffect = "copy"
            else
                event.dataTransfer.dropEffect = "move"

            console.log(`dragover: left:${(event as any).layerX} top:${(event as any).layerX}`)
        })

        let func = function (event) {
            event.preventDefault()
            event.stopPropagation()
            element.className = removeClassName(element.className, 'active')
        }
        element.addEventListener('dragleave', func)
        element.addEventListener('dragend', func)
        element.addEventListener('dragexit', func)

        element.ondrop = (event) => {
            event.preventDefault()
            event.stopPropagation()

            element.className = removeClassName(element.className, 'active')

            let ctrl: ComponentData;
            if (event.dataTransfer)
                ctrl = ComponentPanel.getComponentData(event.dataTransfer);

            if (!ctrl)
                return

            console.assert(this.props.id != null);
            console.assert(this.designer != null);
            ctrl.props.parentid = this.props.id;
            console.assert(master != null, 'host is null')
            this.designer.appendComponent(master.props.id, ctrl)
        }
    }
    private enableMoveDroppable(element: HTMLElement, host: MasterPage) {
        if (element.getAttribute('enable-move-droppable'))
            return

        element.setAttribute('enable-move-droppable', 'true')

        $(element)
            .drop('start', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                appendClassName(element, 'active')
            })
            .drop('drop', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                let componentData = this.designer.findComponentData(dd.sourceElement.id)
                console.assert(componentData != null)

                this.designer.moveComponent(dd.sourceElement.id, host.props.id)
                this.designer.updateComponentProps([{
                    componentId: "string", propName: "string", value: "any"
                }])//dd.sourceElement.id, propName, this.props.id
            })
            .drop('end', (event, dd: ComponentWrapperDrapData) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return

                removeClassName(element, 'active')
            })
    }
    render() {
        let empty = this.props.empty || <div key={guid()} className="empty">可以拖拉控件到这里</div>
        return <MasterPageContext.Consumer>
            {(args) => {
                let master = args.master
                if (master == null) throw Errors.canntFindMasterPage(this.props.id)

                let children: (typeof empty)[] = []
                if (master.props && master.props.children) {
                    let arr: React.ReactElement<ComponentProps<any>>[]
                    if (Array.isArray(master.props.children)) {
                        arr = master.props.children as any
                    }
                    else {
                        arr = [master.props.children as any]
                    }
                    children = arr.filter((o: React.ReactElement<ComponentProps<any>>) => o.props.parentid != null && o.props.parentid == this.props.id)
                }


                return <PageBuilderContext.Consumer>
                    {args => {
                        return <ComponentWrapperContext.Consumer>
                            {wraper => {
                                this.wraper = wraper
                                console.assert(this.wraper != null)

                                if (args.pageBuilder != null && children.length == 0) {
                                    children = [empty]
                                }

                                let element = <React.Fragment>
                                    {this.props.children}
                                    {children}
                                </React.Fragment>

                                if (args.pageBuilder) {
                                    this.designer = args.pageBuilder
                                    element = <div key={guid()} className={classNames.placeholder}
                                        ref={e => {
                                            if (!e) return
                                            this.element = e;
                                            this.enableAppendDroppable(e, master)
                                            this.enableMoveDroppable(e, master)
                                        }}>
                                        {element}
                                    </div>
                                }

                                return element
                            }}
                        </ComponentWrapperContext.Consumer>
                    }}
                </PageBuilderContext.Consumer>
            }}
        </MasterPageContext.Consumer>

    }
}

Component.register('PlaceHolder', PlaceHolder, { resize: false, movable: false, container: true })

/** 用于将 ComponentData 显示为组件 */
export class PageView extends React.Component<{ pageData: ComponentData }, {}> {
    constructor(props: PageView["props"]) {
        super(props)

        if (!this.props.pageData)
            throw Errors.propCanntNull(PageView.name, 'pageData')
    }
    render() {
        let element = ReactPageBuilder.createElement(this.props.pageData)
        return element
    }
}

