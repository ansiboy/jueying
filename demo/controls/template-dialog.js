define(["require", "exports", "react-dom", "react", "pdesigner", "templates"], function (require, exports, ReactDOM, React, pdesigner_1, templates_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PageViewContainer extends React.Component {
        render() {
            let { phone_screen_width, phone_screen_height } = PageViewContainer;
            let transform = `translateX(-${phone_screen_width * 0.2}px) translateY(-${phone_screen_height * 0.2}px) scale(0.6)`; // `scale(0.6)`; //
            let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
            return h("div", { style: style }, this.props.children);
        }
    }
    PageViewContainer.phone_screen_width = 320;
    PageViewContainer.phone_screen_height = 568;
    PageViewContainer.scale = 0.6;
    PageViewContainer.phone_height = PageViewContainer.phone_screen_height * templates_1.scale;
    PageViewContainer.phone_width = PageViewContainer.phone_screen_width * templates_1.scale;
    class TemplateDialog extends React.Component {
        selectTemplate(template) {
            if (this.callback) {
                this.callback(template);
                this.close();
            }
        }
        render() {
            // let tmp_element0 = ControlFactory.create(templates[0]);
            // let tmp_element1 = ControlFactory.create(templates[1]);
            let tmps = [templates_1.default[0], templates_1.default[1], templates_1.default[1]];
            let height = PageViewContainer.phone_height;
            let width = PageViewContainer.phone_width;
            let style = {
                float: 'left', height, width,
            };
            let margin = 15; // 间距
            let count = 3;
            let dialog_header_height = 50;
            let dialog_footer_height = 70;
            let dialog_content_width = width * count + margin * (count + 1);
            let dialog_content_height = height + dialog_header_height + dialog_footer_height + margin * 2;
            return h("div", { className: "modal fade", ref: (e) => this.element = e || this.element },
                h("div", { className: "modal-dialog" },
                    h("div", { className: "modal-content", style: { width: dialog_content_width, height: dialog_content_height } },
                        h("div", { className: "modal-header" },
                            h("button", { type: "button", className: "close", onClick: () => ui.hideDialog(this.element) },
                                h("span", { "aria-hidden": "true" }, "\u00D7")),
                            h("h4", { className: "modal-title" }, "\u9009\u62E9\u6A21\u677F")),
                        h("div", { className: "modal-body clearfix" },
                            tmps.map((o, i) => h("div", { key: i, style: { width, height, float: i == tmps.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }, onClick: () => this.selectTemplate(o) },
                                h(PageViewContainer, null, pdesigner_1.ControlFactory.create(o)))),
                            h("div", { className: "clearfix" })),
                        h("div", { className: "modal-footer" },
                            h("button", { className: "btn btn-primary" }, "AA")))));
        }
        open() {
            ui.showDialog(this.element);
        }
        close() {
            ui.hideDialog(this.element);
        }
        static show(callback) {
            defaultInstance.callback = callback;
            defaultInstance.open();
        }
    }
    exports.default = TemplateDialog;
    let element = document.createElement('div');
    document.body.appendChild(element);
    let defaultInstance;
    ReactDOM.render(h(TemplateDialog, { ref: (e) => defaultInstance = e || defaultInstance }), element);
});
//# sourceMappingURL=template-dialog.js.map