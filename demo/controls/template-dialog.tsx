import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ControlFactory } from 'pdesigner';
import { default as templates, phone_height, phone_width, scale } from 'templates';

export default class TemplateDialog extends React.Component<any, any> {
    element: HTMLElement;

    render() {
        let tmp_element0 = ControlFactory.create(templates[0]);
        let tmp_element1 = ControlFactory.create(templates[1]);
        let height = phone_height;
        let width = phone_width;
        let style: React.CSSProperties = {
            float: 'left', height, width,
        };

        let margin = 15;    // 间距
        let count = 3;
        let dialog_content_width = width * count + margin * (count + 1);
        let dialog_content_height = height + 150;

        return <div className="modal fade" ref={(e) => this.element = e || this.element}>
            <div className="modal-dialog">
                <div className="modal-content" style={{ width: dialog_content_width, height: dialog_content_height }}>
                    <div className="modal-header">
                        <button type="button" className="close" onClick={() => ui.hideDialog(this.element)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">选择模板</h4>
                    </div>
                    <div className="modal-body clearfix">
                        <div {...{ style }} onClick={() => alert('hello world')}> {tmp_element0}</div>
                        <div {...{ style: Object.assign({}, style, { margin: `0 0 0 ${margin}px` }) }}>{tmp_element1}</div>
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
