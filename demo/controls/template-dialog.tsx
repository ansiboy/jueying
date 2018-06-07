import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ControlFactory } from 'pdesigner';
import templates from 'templates';

export default class TemplateDialog extends React.Component<any, any> {
    element: HTMLElement;

    render() {
        let tmp_element0 = ControlFactory.create(templates[0]);
        let tmp_element1 = ControlFactory.create(templates[1]);
        let height = `${(667 * 0.6).toFixed(0)}px`;
        let width = `${(375 * 0.6).toFixed(0)}px`;
        let style: React.CSSProperties = {
            float: 'left', height, width,
        };
        return <div className="modal fade" ref={(e) => this.element = e || this.element}>
            <div className="modal-dialog">
                <div className="modal-content" style={{ width: 770, height: 550 }}>
                    <div className="modal-header">
                        <button type="button" className="close" onClick={() => ui.hideDialog(this.element)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">选择模板</h4>
                    </div>
                    <div className="modal-body clearfix">
                        <div {...{ style }}> {tmp_element0}</div>

                        <div {...{ style: Object.assign({}, style, { margin: '0 0 0 30px' }) }}>{tmp_element1}</div>

                        <div {...{ style: Object.assign({}, style, { float: 'right' }) }}>{tmp_element1}</div>

                        <div className="clearfix"></div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary">AA</button>
                    </div>
                </div>
            </div>
        </div >
    }

    open() {
        ui.showDialog(this.element);
    }

    close() {
        ui.hideDialog(this.element);
    }

    static show() {
        defaultInstance.open();
    }
}

let element = document.createElement('div');
document.body.appendChild(element);
let defaultInstance: TemplateDialog;
ReactDOM.render(<TemplateDialog ref={(e) => defaultInstance = e || defaultInstance} />, element);
