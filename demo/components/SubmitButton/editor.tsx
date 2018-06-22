import { Editor } from "pdesigner";
import { Props as ControlProps } from 'control';
import { ControlBaseEditor } from "../baseControl";
import React = require("react");

interface State extends Partial<ControlProps> {

}

export default class SubmitButtonEditor extends ControlBaseEditor<ControlProps> {
    renderControlProps(): JSX.Element {
        let { text } = this.state;
        return <React.Fragment>
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