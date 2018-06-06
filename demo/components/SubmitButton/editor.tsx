import { Editor } from "pdesigner";
import { Props as ControlProps } from 'control';

interface State extends Partial<ControlProps> {

}

export default class SubmitButtonEditor extends Editor<any, any> {
    element: HTMLElement;
    render() {
        let { text } = this.state;
        return this.Element(
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
        )
    }
}