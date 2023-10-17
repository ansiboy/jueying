import { ComponentData, ComponentProps, ComponentTypes, ElementFactory, PageData } from "./types";
import * as React from "react";
import { errors } from "./errors";
import { Component } from "./component"

function parseComponentDataWithArray(componentData: ComponentData, componentTypes: ComponentTypes, createElement: ElementFactory, dataItems: any[] | null) {
    if (dataItems == null) {
        return parseComponentDataWithDataItem(componentData, componentTypes, createElement, null);
    }

    if (!Array.isArray(dataItems))
        throw new Error(`Argument dataItems is not an array.`);

    let props = componentData.props as ComponentProps;
    props.key = props.key || componentData.id;
    let c = dataItems.map((d, i) => {
        let newProps = Object.assign({}, props);
        componentData.props = newProps;
        if (i > 1) {
            componentData.props.key = props.key + "-" + i;
        }

        return parseComponentDataWithDataItem(componentData, componentTypes, createElement, d);
    });
    return React.createElement(React.Fragment, {}, ...c);
}

function parseComponentDataWithDataItem(componentData: ComponentData, componentTypes: ComponentTypes, createElement: ElementFactory, dataItem: any | null) {
    if (!componentData) throw errors.argumentNull("componentData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");
    if (!componentData.type) {
        throw errors.argumentFieldNull("type", "componentData")
    }

    componentData = JSON.parse(JSON.stringify(componentData));
    let isHtmlComponent = componentData.type.toLowerCase() == componentData.type
    let type = isHtmlComponent ? componentData.type : (componentTypes[componentData.type] || Component.types[componentData.type]);
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }

    if (dataItem)
        evalComponentDataProps(componentData.props, dataItem);

    let children: (string | React.ReactElement<any>)[] = [];
    let childComponentInfos = componentData.children || [];
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map((c, i) => {

            let dataSource: any;
            if (typeof c.dataSource == "string" && dataItem != null) {
                if (!c.dataSource.startsWith(BINDING_EXPR_BEGIN) || !c.dataSource.endsWith(BINDING_EXPR_END)) {
                    throw new Error(`Data source expression '${c.dataSource}' is invalid.`);
                }

                dataSource = evalExpression(c.dataSource, dataItem);
            }
            else {
                dataSource = c.dataSource;
            }

            if (Array.isArray(dataSource)) {
                return parseComponentDataWithArray(c, componentTypes, createElement, dataSource);
            }

            return parseComponentDataWithDataItem(c, componentTypes, createElement, dataItem);
        });
    }

    let props = componentData.props as ComponentProps;
    props.key = props.key || componentData.id;
    props.id = componentData.id;

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

    let dataSource = pageData.dataSource;
    if (dataSource != null && Array.isArray(dataSource))
        throw new Error("Page data source should be an object.");

    return parseComponentDataWithDataItem(pageData, componentTypes, createElement, dataSource);

}


