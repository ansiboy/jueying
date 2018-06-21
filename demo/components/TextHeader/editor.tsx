import { Editor, EditorProps } from "pdesigner";
import { Props as ControlProps } from 'control';
import * as React from 'react';

interface State extends Partial<ControlProps> {

}


export default class TextHeaderEditor extends Editor<EditorProps, State> {
    element: HTMLElement;
    render() {
        let { size, name, text } = this.state;
        return this.Element(<React.Fragment>
            <div key={10} className="form-group">
                <label>名称</label>
                <div className="control">
                    <input className="form-control" value={name || ''}
                        onChange={(e) => {
                            name = (e.target as HTMLInputElement).value;
                            this.setState({ name });
                        }} />
                </div>
            </div>
            <div key={15} className="form-group">
                <label>文本</label>
                <div className="control">
                    <input className="form-control" value={text || name || ''}
                        onChange={(e) => {
                            text = (e.target as HTMLInputElement).value;
                            this.setState({ text });
                        }} />
                </div>
            </div>
            <div key={20} className="form-group">
                <label>字体大小</label>
                <div className="control">
                    <select className="form-control" value={size}
                        onChange={(e) => {
                            size = Number.parseInt((e.target as HTMLSelectElement).value);
                            this.setState({ size });
                        }} >
                        <option value={1}>H1</option>
                        <option value={2}>H2</option>
                        <option value={3}>H3</option>
                        <option value={4}>H4</option>
                    </select>
                </div>
            </div>
        </React.Fragment>)
    }
}