import { EditorProps, Editor, DesignerContext } from "pdesigner";
import { Props as ControlProps } from 'control';
import * as React from 'react';

interface State extends Partial<ControlProps> {

}

export default class TextInputEditor extends Editor<EditorProps, State> {
    constructor(props) {
        super(props)
    }
    render() {
        let { dataField, name } = this.state;
        let c = <React.Fragment>
            <div className="form-group">
                <label>名称</label>
                <div className="control">
                    <input className="form-control" value={name || ''}
                        onChange={(e) => {
                            name = (e.target as HTMLInputElement).value;
                            this.setState({ name });
                        }} />
                </div>
            </div>
            <div className="form-group">
                <label>字段</label>
                <div className="control">
                    <input className="form-control" value={dataField || ''}
                        onChange={(e) => {
                            dataField = (e.target as HTMLInputElement).value;
                            this.setState({ dataField });
                        }} />
                </div>
            </div>
        </React.Fragment>
        return this.Element(c);
    }
}