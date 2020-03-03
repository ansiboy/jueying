import { ComponentFactory, Context } from "component-factory";
import { Errors } from "errors";
import { ComponentData, ReactComponentType } from "models";
import { Component } from "component";
import { appendClassName, classNames } from "style";
import { ComponentWrapper } from "component-wrapper";
import { PageDesigner } from "page-designer";
import React = require("react");
import ReactDOM = require("react-dom");
import { ComponentProps } from "jueying-core";

export class ReactComponentFacotry extends ComponentFactory {

    renderDesignTimeComponent(compentData: ComponentData, element: HTMLElement, context?: Context): void {

        let componentElement = Component.createElement(compentData,
            (type, props, children) => this.createDesignTimeElement(type, props, context.designer, children));

        ReactDOM.render(componentElement, element);
    }

    renderComponent(compentData: ComponentData, element: HTMLElement, context?: any): void {
        let componentElement = Component.createElement(compentData);
        ReactDOM.render(componentElement, element);
    }

    protected createDesignTimeElement(type: ReactComponentType, props: ComponentProps<any>,
        designer: PageDesigner, ...children: any[]) {

        if (type == null) throw Errors.argumentNull('type')
        if (props == null) throw Errors.argumentNull('props')
        if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props')


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

        return <ComponentWrapper {...wrapperProps} designer={designer}
            source={{ type, attr, props, children }
            }>
        </ComponentWrapper>
    }
}