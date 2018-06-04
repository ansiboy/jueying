import { Control } from "pdesigner";
import { BaseControl, BaseControlProps } from "../baseControl";

export interface Props extends BaseControlProps<TextHeader> {
    size: number,
    text?: string,
}

export default class TextHeader extends BaseControl<any, any> {
    element: HTMLElement;
    static defaultProps: Props = { size: 1 }

    render(h?: (type, props, ...children) => JSX.Element) {
        let { size, text, name } = this.props;
        let elementType = `h${size}`;
        let props: any = Control.htmlDOMProps(this.props);
        props.ref = (e) => this.element = e || this.element;
        return h(elementType, props, text || name);
    }

}
