import { Editor } from "pdesigner";
import { Props as ControlProps } from 'control';
import { ControlBaseEditor } from "../baseControl";
import React = require("react");

interface State extends Partial<ControlProps> {

}

export default class SubmitButtonEditor extends ControlBaseEditor<ControlProps> {
    renderControlProps(): JSX.Element {
        let { text, style } = this.state;
        style = style || {};
        let { width } = style;

        return <React.Fragment>
            <div className="form-group">
                <label>宽</label>
                <div className="control">
                    <input className="form-control" value={width == null ? '' : width}
                        onChange={(e) => {
                            let text = e.target.value;
                            style.width = /^\+?(0|[1-9]\d*)$/.test(text) ? Number.parseInt(text) : text;
                            this.setState({ style });
                        }} />
                </div>
            </div>
            <div key={20} className="form-group">
                <label>文本</label>
                <div className="control">
                    <input className="form-control" value={text || ''}
                        onChange={(e) => {
                            text = e.target.value;
                            this.setState({ text });
                        }} />
                </div>
            </div>
        </React.Fragment>
    }
}