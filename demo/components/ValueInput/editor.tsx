import { EditorProps, Editor, DesignerContext } from "pdesigner";
import { Props as ControlProps } from 'control';
import * as React from 'react';
import { ControlBaseEditor } from "../baseControl";

interface State extends Partial<ControlProps> {

}

export default class TextInputEditor extends ControlBaseEditor<ControlProps> {
    constructor(props) {
        super(props)
    }
    renderControlProps() {
        let { dataField } = this.state;
        return <React.Fragment>
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
    }
    // render() {
    //     let { dataField, name, style } = this.state;
    //     style = style || {};
    //     let { left, top } = style;
    // let c = <React.Fragment>
    //     <div className="form-group">
    //         <label>名称</label>
    //         <div className="control">
    //             <input className="form-control" value={name || ''}
    //                 onChange={(e) => {
    //                     name = (e.target as HTMLInputElement).value;
    //                     this.setState({ name });
    //                 }} />
    //         </div>
    //     </div>

    //     <div className="form-group">
    //         <label>左边</label>
    //         <div className="control">
    //             <input className="form-control" value={left == null ? '' : left}
    //                 onChange={(e) => {
    //                     style.left = Number.parseInt((e.target as HTMLInputElement).value);
    //                     this.setState({ style });
    //                 }} />
    //         </div>
    //     </div>
    //     <div className="form-group">
    //         <label>顶部</label>
    //         <div className="control">
    //             <input className="form-control" value={top == null ? '' : top}
    //                 onChange={(e) => {
    //                     style.top = Number.parseInt((e.target as HTMLInputElement).value);
    //                     this.setState({ style });
    //                 }} />
    //         </div>
    //     </div>
    // </React.Fragment>
    //     let c = <EditorBasePanel>
    //     </EditorBasePanel>
    //     return this.Element(c);
    // }
}