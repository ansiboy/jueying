import { BaseControl } from "../baseControl";

export default class SubmitButton extends BaseControl<any, any> {
    element: HTMLElement;
    render(h?: (type, props, ...children) => JSX.Element) {
        return <button ref={(e) => this.element = e || this.element} ></button>
    }
}