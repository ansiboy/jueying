import { Control } from "pdesigner";
import { BaseControl, BaseControlProps } from "../baseControl";

export interface Props extends BaseControlProps<TextHeader> {
    size: number,
    text?: string,
}

export default class TextHeader extends BaseControl<any, {}> {
    element: HTMLElement;
    static defaultProps: Props = { size: 3 }

    render(h?: (type, props, ...children) => JSX.Element) {
        let { size, text, name } = this.props;
        let elementType = `h${size}`;
        return this.Element(elementType, { tabIndex: Control.tabIndex++ }, text || name) 
    }

}
