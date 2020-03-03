"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_factory_1 = require("component-factory");
const errors_1 = require("errors");
const component_1 = require("component");
const style_1 = require("style");
const component_wrapper_1 = require("component-wrapper");
const React = require("react");
const ReactDOM = require("react-dom");
class ReactComponentFacotry extends component_factory_1.ComponentFactory {
    renderDesignTimeComponent(compentData, element, context) {
        let componentElement = component_1.Component.createElement(compentData, (type, props, children) => this.createDesignTimeElement(type, props, context.designer, children));
        ReactDOM.render(componentElement, element);
    }
    renderComponent(compentData, element, context) {
        let componentElement = component_1.Component.createElement(compentData);
        ReactDOM.render(componentElement, element);
    }
    createDesignTimeElement(type, props, designer, ...children) {
        if (type == null)
            throw errors_1.Errors.argumentNull('type');
        if (props == null)
            throw errors_1.Errors.argumentNull('props');
        if (props.id == null)
            throw errors_1.Errors.argumentFieldCanntNull('id', 'props');
        console.assert(props.id != null);
        if (props.id != null)
            props.key = props.id;
        //===================================================
        // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
        let attr1 = component_1.Component.getAttribute(type);
        console.assert(attr1 != null);
        let attr2 = props.attr || {};
        let attr = Object.assign({}, attr1, attr2);
        delete props.attr;
        //===================================================
        let className = props.selected ? style_1.appendClassName(props.className || '', style_1.classNames.componentSelected) : props.className;
        let wrapperProps = Object.assign({}, props);
        delete wrapperProps.ref;
        wrapperProps.className = className;
        return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, { designer: designer, source: { type, attr, props, children } }));
    }
}
exports.ReactComponentFacotry = ReactComponentFacotry;
//# sourceMappingURL=react-provider.js.map