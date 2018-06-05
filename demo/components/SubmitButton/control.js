define(["require", "exports", "../baseControl", "pdesigner"], function (require, exports, baseControl_1, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButton extends baseControl_1.BaseControl {
        render(h) {
            let { text } = this.props;
            let props = {
                className: "btn btn-primary btn-block"
            };
            return h("div", { id: this.props.id, className: "form-group", tabIndex: pdesigner_1.Control.tabIndex++, ref: (e) => {
                    this.element = e || this.element;
                } },
                h(pdesigner_1.DesignerContext.Consumer, null, context => context.designer ?
                    h("div", Object.assign({}, props), text) :
                    h("button", Object.assign({}, props), text)));
        }
    }
    SubmitButton.defaultProps = { text: '提交表单' };
    exports.default = SubmitButton;
});
//# sourceMappingURL=control.js.map