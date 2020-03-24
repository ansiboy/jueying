import { Errors } from "errors";
import { Component } from "../component";
import { appendClassName, classNames } from "style";
import { ComponentWrapper } from "../component-wrapper";
import React = require("react");
import { ComponentFactory } from "../component-factory";

export let designTimeComponentFactory: ComponentFactory = function (componentData, context) {
    let { type, props, children } = componentData;

    if (type == null) throw Errors.argumentFieldCanntNull('type', "componentData");
    if (props == null) throw Errors.argumentFieldCanntNull('props', "componentData");
    if (componentData.id == null) throw Errors.argumentFieldCanntNull('id', 'componentData');


    console.assert(componentData.id != null)
    if (componentData.id != null)
        props.key = componentData.id;

    //===================================================
    // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准

    let attr1 = Component.getAttribute(type)
    console.assert(attr1 != null)

    let attr2 = componentData.attr || {}
    let attr = Object.assign({}, attr1, attr2)
    // delete props.attr
    //===================================================

    let className = componentData.selected ? appendClassName(props.className || '', classNames.componentSelected) : props.className

    let wrapperProps = Object.assign({}, props);
    delete wrapperProps.ref;
    wrapperProps.className = className;
    let handler = context.handler;
    return <ComponentWrapper {...wrapperProps} handler={handler}
        source={{ type, attr, props, children }
        }>
    </ComponentWrapper>
}