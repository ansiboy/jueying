import { ComponentData, ComponentProps, ComponentTypes, ElementFactory, PageData } from "./types";
import * as React from "react";
import { errors } from "./errors";
import { Component } from "./component"

function parseComponentData(componentData: ComponentData, componentTypes: ComponentTypes, createElement: ElementFactory) {
    if (!componentData) throw errors.argumentNull("componentData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");
    if (!componentData.type) {
        throw errors.argumentFieldNull("type", "componentData")
    }

    let isHtmlComponent = componentData.type.toLowerCase() == componentData.type
    let type = isHtmlComponent ? componentData.type : (componentTypes[componentData.type] || Component.types[componentData.type]);
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }

    let dataSource = (componentData.props as ComponentProps).dataSource;
    if (dataSource && !Array.isArray(dataSource))
        evalComponentDataProps(componentData.props, dataSource);

    let children: (string | React.ReactElement<any>)[] = [];
    let childComponentInfos = componentData.children || [];
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map((c, i) => {
            let props = c.props as ComponentProps;
            if (i > 0) {
                props.key = (props.key || props.id) + "-" + i;
            }

            if (props.dataSource == null && dataSource != null && !Array.isArray(dataSource))
                props.dataSource = dataSource;

            return parseComponentData(c, componentTypes, createElement);
        });
    }

    let props = Object.assign({}, componentData.props) as ComponentProps;
    props.key = props.key || componentData.id;
    props.id = componentData.id;

    //=============================================================================
    // 数据绑定
    // let dataSource = props.dataSource;
    if (dataSource != null && Array.isArray(dataSource)) {
        let components = dataSource.map(c => {
            let newProps = Object.assign({}, props);
            evalComponentDataProps(newProps, c);
            return createElement(type, newProps, children);
        })
        return React.createElement(React.Fragment, {}, ...components);
    }
    //=============================================================================
    if (typeof type == "string")
        delete props.dataSource;

    return createElement(type, props, children);
}

const BINDING_EXPR_BEGIN = '${';
const BINDING_EXPR_END = '}';

function evalComponentDataProps(props: { [key: string]: any }, dataItem: any) {
    props = props || {};

    for (let key in props) {
        let value = props[key];
        if (typeof value != "string")
            continue;

        if (!value.startsWith(BINDING_EXPR_BEGIN) || !value.endsWith(BINDING_EXPR_END))
            continue;

        // let len = value.length - BINDING_EXPR_BEGIN.length - BINDING_EXPR_END.length;
        // let expr = value.substring(BINDING_EXPR_BEGIN.length, len);
        // let newValue = eval.bind(dataItem)(expr);
        // props[key] = newValue;

        let newValue = evalExpression(value, dataItem);
        props[key] = newValue;
    }
}

function evalExpression(expr: string, dataItem: any) {
    if (!expr.startsWith(BINDING_EXPR_BEGIN) || !expr.endsWith(BINDING_EXPR_END))
        throw new Error(`Expression '${expr}' should be starts with '${BINDING_EXPR_BEGIN}' and ends with '${BINDING_EXPR_END}'.`)

    let len = expr.length - BINDING_EXPR_END.length;
    expr = expr.substring(BINDING_EXPR_BEGIN.length, len);

    let func = new Function(...Object.keys(dataItem), 'return ' + expr);
    let values = Object.keys(dataItem).map(k => dataItem[k]);
    let newValue = func.bind(dataItem)(...values);
    return newValue;
}

export function parsePageData(pageData: PageData, componentTypes: ComponentTypes, createElement: ElementFactory) {
    if (!pageData) throw errors.argumentNull("pageData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");
    if (!pageData.type) {
        throw errors.argumentFieldNull("type", "pageData")
    }

    let dataSource: any[] = pageData.props.dataSource;
    if (dataSource != null && Array.isArray(dataSource))
        throw new Error("Page data source should be an object.");

    return parseComponentData(pageData, componentTypes, createElement);

}


