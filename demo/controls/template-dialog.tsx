import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ControlFactory, ElementData } from 'pdesigner';
import { default as templates, phone_height, phone_width, scale } from 'templates';

interface PageViewContainerProps {
}
class PageViewContainer extends React.Component<PageViewContainerProps, any>{
    private static phone_screen_width = 320;
    private static phone_screen_height = 568;
    private static scale = 0.6;

    static phone_height = PageViewContainer.phone_screen_height * scale;
    static phone_width = PageViewContainer.phone_screen_width * scale;

    render() {
        let { phone_screen_width, phone_screen_height } = PageViewContainer;
        let transform = `translateX(-${phone_screen_width * 0.2}px) translateY(-${phone_screen_height * 0.2}px) scale(0.6)`;// `scale(0.6)`; //
        let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
        return <div style={style}>
            {this.props.children}
        </div>
    }
}

export default class TemplateDialog extends React.Component<any, any> {
    element: HTMLElement;
    private callback: (template: ElementData) => void;
    private selectTemplate(template: ElementData) {
        if (this.callback) {
            this.callback(template);
            this.close();
        }
    }
    render() {
        // let tmp_element0 = ControlFactory.create(templates[0]);
        // let tmp_element1 = ControlFactory.create(templates[1]);
        let tmps = [templates[0], templates[1], templates[1]];

        let height = PageViewContainer.phone_height;
        let width = PageViewContainer.phone_width;
        let style: React.CSSProperties = {
            float: 'left', height, width,
        };

        let margin = 15;    // 间距
        let count = 3;
        let dialog_header_height = 50;
        let dialog_footer_height = 70;
        let dialog_content_width = width * count + margin * (count + 1);
        let dialog_content_height = height + dialog_header_height + dialog_footer_height + margin * 2;

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
                        {tmps.map((o, i) =>
                            <div key={i} style={{ width, height, float: i == tmps.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }}
                                onClick={() => this.selectTemplate(o)}>
                                <PageViewContainer>{ControlFactory.create(o)}</PageViewContainer>
                            </div>
                        )}
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

    static show(callback: (tmp: ElementData) => void) {
        defaultInstance.callback = callback;
        defaultInstance.open();
    }
}

let element = document.createElement('div');
document.body.appendChild(element);
let defaultInstance: TemplateDialog;
ReactDOM.render(<TemplateDialog ref={(e) => defaultInstance = e || defaultInstance} />, element);
