import { BaseControl } from "../baseControl";
import { DesignerContext, Control } from "pdesigner";
import * as React from 'react';

export interface Props {
    text?: string
}
export default class SubmitButton extends Control<any, {}> {
    element: HTMLElement;
    static defaultProps = { text: '提交表单' }
    render(h?: (type, props, ...children) => JSX.Element) {
        let { text } = this.props;
        let props = {
            className: "btn btn-primary btn-block",
            tabIndex: Control.tabIndex++
        }

        let child = this.designer ?
            <div {...props}>{text}</div> :
            <button {...props}>{text}</button>;

        return this.Element('div', child);

    }
}