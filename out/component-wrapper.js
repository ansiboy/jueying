/// <reference path="./typings/declare.d.ts"/>
define(["require", "exports", "react", "./errors", "./common", "./component-panel", "./style", "./component"], function (require, exports, React, errors_1, common_1, component_panel_1, style_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 组件包装器，对组件进行包装，实现组件设计时的行为。
     * 1. 组件的移动
     * 2. 组件的拖放
     */
    class ComponentWrapper extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidCatch(error, info) {
            // Display fallback UI
            this.setState({ error });
            // You can also log the error to an error reporting service
            //   logErrorToMyService(error, info);
            debugger;
        }
        designtimeBehavior(element, attr) {
            if (!element)
                throw errors_1.Errors.argumentNull('element');
            if (!attr)
                throw errors_1.Errors.argumentNull('args');
            if (element.getAttribute('data-behavior')) {
                return;
            }
            element.setAttribute('data-behavior', 'behavior');
            let designer = this.props.designer;
            console.assert(attr.container != null);
            console.assert(attr.movable != null);
            if (attr.container) {
                ComponentWrapper.enableAppendDroppable(element, designer);
            }
            if (attr.movable) {
                console.assert(element != null);
                ComponentWrapper.draggable(designer, element);
                if (this.handler != null)
                    ComponentWrapper.draggable(designer, element, this.handler);
            }
            else {
                element.onclick = (ev) => ComponentWrapper.invokeOnClick(ev, designer, element);
            }
        }
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        static enableAppendDroppable(element, designer) {
            console.assert(element != null);
            element.addEventListener('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();
                let componentName = event.dataTransfer.getData(common_1.constants.componentData);
                if (componentName)
                    event.dataTransfer.dropEffect = "copy";
                else
                    event.dataTransfer.dropEffect = "move";
                console.log(`dragover: left:${event.layerX} top:${event.layerX}`);
            });
            element.addEventListener("drop", function (event) {
                event.preventDefault();
                event.stopPropagation();
                let args1 = arguments[1];
                if (!event.dataTransfer)
                    return;
                let ctrl = component_panel_1.ComponentPanel.getComponentData(event.dataTransfer);
                if (!ctrl)
                    return;
                ctrl.props.style = ctrl.props.style || {};
                designer.pageData.props.style = designer.pageData.props.style || {};
                if (!ctrl.props.style.position) {
                    ctrl.props.style.position = designer.pageData.props.style.position;
                }
                let pos = component_panel_1.ComponentPanel.mouseInnerPosition(event.dataTransfer);
                console.assert(pos != null);
                if (ctrl.props.style.position == 'absolute') {
                    ctrl.props.style.left = event.layerX - pos.x;
                    ctrl.props.style.top = event.layerY - pos.y;
                }
                designer.appendComponent(element.id, ctrl);
            });
        }
        static isResizeHandleClassName(className) {
            let classNames = [
                'resize_handle NE', 'resize_handle NN', 'resize_handle NW',
                'resize_handle WW', 'resize_handle EE', 'resize_handle SW',
                'resize_handle SS', 'resize_handle SE',
            ];
            return classNames.indexOf(className) >= 0;
        }
        static draggable(designer, element, handler) {
            if (!designer)
                throw errors_1.Errors.argumentNull('designer');
            if (!element)
                throw errors_1.Errors.argumentNull('element');
            console.assert(element.id != "");
            handler = handler || element;
            let componentId = element.id;
            console.assert(componentId != "");
            let startPos;
            let rect;
            let dragStart;
            $(handler)
                .drag("init", function (ev) {
                startPos = $(element).position();
                if ($(this).is(`.${style_1.classNames.componentSelected}`))
                    return $(`.${style_1.classNames.componentSelected}`);
            })
                .drag('start', function (ev, dd) {
                dd.attr = $(ev.target).prop("className");
                dd.width = $(this).width();
                dd.height = $(this).height();
                dd.sourceElement = element;
                dragStart = Date.now();
            })
                .drag(function (ev, dd) {
                ev.preventDefault();
                ev.stopPropagation();
                console.log(`drop:`);
                console.log(dd.drop);
                rect = {};
                if (dd.attr.indexOf("E") > -1) {
                    rect.width = Math.max(32, dd.width + dd.deltaX);
                }
                if (dd.attr.indexOf("S") > -1) {
                    rect.height = Math.max(32, dd.height + dd.deltaY);
                }
                if (dd.attr.indexOf("W") > -1) {
                    rect.width = Math.max(32, dd.width - dd.deltaX);
                    setLeft(dd);
                }
                if (dd.attr.indexOf("N") > -1) {
                    rect.height = Math.max(32, dd.height - dd.deltaY);
                    setTop(dd);
                }
                if (dd.attr.indexOf("WW") >= 0)
                    setLeft(dd);
                if (dd.attr.indexOf("NE") >= 0 || dd.attr.indexOf("NW") >= 0 || dd.attr.indexOf("SW") >= 0)
                    setPosition(dd);
                if (dd.attr.indexOf("NN") >= 0)
                    setTop(dd);
                if (dd.attr.indexOf("drag") > -1) {
                    rect.top = dd.offsetY;
                    rect.left = dd.offsetX;
                }
                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    setPosition(dd);
                }
                if (dd.attr)
                    $(this).css(rect);
            }, { click: true })
                .drag('end', function (ev, dd) {
                let interval = Date.now() - dragStart;
                ComponentWrapper.isDrag = interval >= 300;
                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    let left = startPos.left + dd.deltaX;
                    let top = startPos.top + dd.deltaY;
                    designer.setComponentPosition(element.id, { left, top });
                    element.style.transform = '';
                }
                else {
                    let left, top;
                    if (dd.attr.indexOf("W") > -1)
                        left = startPos.left + dd.deltaX;
                    if (dd.attr.indexOf("N") > -1)
                        top = startPos.top + dd.deltaY;
                    element.style.transform = '';
                    designer.setComponentPosition(element.id, { left, top });
                    designer.setComponentSize(componentId, rect);
                }
            })
                .click((ev) => {
                ComponentWrapper.invokeOnClick(ev, designer, element);
            });
            let setPosition = (dd) => {
                console.log(['dd.offsetX, dd.offsetY', dd.offsetX, dd.offsetY]);
                console.log(dd);
                element.style.transform = `translate(${dd.deltaX}px,${dd.deltaY}px)`;
            };
            let setTop = (dd) => {
                element.style.transform = `translateY(${dd.deltaY}px)`;
            };
            let setLeft = (dd) => {
                element.style.transform = `translateX(${dd.deltaX}px)`;
            };
        }
        static invokeOnClick(ev, designer, element) {
            ev.preventDefault();
            ev.stopPropagation();
            if (ComponentWrapper.isDrag) {
                ComponentWrapper.isDrag = false;
                return;
            }
            let elementID = element.id;
            if (!ev.ctrlKey) {
                designer.selectComponent(element.id);
                return;
            }
            let selectedControlIds = designer.selectedComponentIds;
            console.assert(elementID != "");
            if (selectedControlIds.indexOf(elementID) >= 0) {
                selectedControlIds = selectedControlIds.filter(o => o != elementID);
            }
            else {
                selectedControlIds.push(elementID);
            }
            designer.selectComponent(selectedControlIds);
        }
        componentDidMount() {
            if (!this.element) {
                return;
            }
            let attr = this.props.source.attr;
            this.designtimeBehavior(this.element, attr);
        }
        render() {
            let { error } = this.state || {};
            if (error) {
                return React.createElement("div", { className: "error" },
                    React.createElement("div", null, error.message),
                    React.createElement("div", null, error.stack));
            }
            let attr = this.props.source.attr;
            let shouldWrapper = attr.resize || (typeof this.props.source.type != 'string' && this.props.source.type != component_1.MasterPage);
            if (!shouldWrapper) {
                return this.renderWidthoutWrapper();
            }
            let props = this.props.source.props;
            let style = props.style = JSON.parse(JSON.stringify(props.style || {})); // 深复制 style
            let { top, left, position, width, height, display, visibility } = style;
            let className = style_1.appendClassName(props.className || '', style_1.classNames.componentWrapper);
            className = props.selected ? style_1.appendClassName(className, style_1.classNames.componentSelected) : className;
            let wrapperProps = {
                id: props.id,
                className,
                style: { top, left, position, width, height, display, visibility },
                ref: (e) => this.element = e || this.element
            };
            let move_handle = props.selected && attr.showHandler ? React.createElement("div", { className: "move_handle", style: {}, ref: e => this.handler = e || this.handler }) : null;
            let showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected;
            let source = this.props.source;
            if (props.style) {
                delete props.style.left;
                delete props.style.top;
                delete props.style.position;
                if (wrapperProps.style.width && wrapperProps.style.width != 'unset')
                    props.style.width = '100%';
                if (wrapperProps.style.height && wrapperProps.style.height != 'unset')
                    props.style.height = '100%';
            }
            // source.props.ref = function (e) {
            // };
            return React.createElement(component_1.ComponentWrapperContext.Provider, { value: this },
                React.createElement("div", Object.assign({}, wrapperProps),
                    move_handle,
                    showResizeHandle ?
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "resize_handle NE" }),
                            React.createElement("div", { className: "resize_handle NN" }),
                            React.createElement("div", { className: "resize_handle NW" }),
                            React.createElement("div", { className: "resize_handle WW" }),
                            React.createElement("div", { className: "resize_handle EE" }),
                            React.createElement("div", { className: "resize_handle SW" }),
                            React.createElement("div", { className: "resize_handle SS" }),
                            React.createElement("div", { className: "resize_handle SE" })) : null,
                    this.createRawElement(source.type, source.props, source.children)));
        }
        renderWidthoutWrapper() {
            let { type, props, children } = this.props.source;
            let ref = props.ref;
            props.ref = (e) => {
                if (typeof ref == "function")
                    ref(e);
                if (!e)
                    return;
                if (e.tagName) {
                    let attr = this.props.source.attr;
                    this.designtimeBehavior(e, attr);
                    return;
                }
            };
            if (props.selected) {
                props.className = style_1.appendClassName(props.className || '', style_1.classNames.componentSelected);
            }
            let element = this.createRawElement(type, props, children);
            return React.createElement(component_1.ComponentWrapperContext.Provider, { value: this }, element);
        }
        createRawElement(type, props, children) {
            let isEmptyElement = (children || []).length == 0;
            if (isEmptyElement) {
                let emtpy = this.designTimeEmptyElement(type, props);
                if (emtpy != null)
                    children = [emtpy];
            }
            return React.createElement(type, props, ...children);
        }
        designTimeEmptyElement(type, props) {
            if (type == 'input' || type == 'img' || type == 'meta' || type == 'link')
                return null;
            let typename = typeof type == 'string' ? type : type.name;
            let text = this.designTimeText(typename, props);
            return text;
        }
        designTimeText(type, props) {
            let text = props.text;
            if (text) {
                return text;
            }
            text = text || props.name || type;
            return text;
        }
    }
    ComponentWrapper.isDrag = false;
    exports.ComponentWrapper = ComponentWrapper;
});
//# sourceMappingURL=component-wrapper.js.map