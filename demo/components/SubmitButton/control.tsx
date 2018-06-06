import { BaseControl } from "../baseControl";
import { DesignerContext, Control } from "pdesigner";
export interface Props {
    text?: string
}
export default class SubmitButton extends BaseControl<any, any> {
    element: HTMLElement;
    static defaultProps = { text: '提交表单' }
    render(h?: (type, props, ...children) => JSX.Element) {
        let { text } = this.props;
        let props = {
            className: "btn btn-primary btn-block"
        }
        return <div id={this.props.id} className="form-group" tabIndex={Control.tabIndex++}
            ref={(e) => {
                this.element = e || this.element
            }} >
            <DesignerContext.Consumer>
                {context =>
                    context.designer ?
                        <div {...props}>{text}</div> :
                        <button {...props}>{text}</button>
                }
            </DesignerContext.Consumer>

        </div>
    }
}