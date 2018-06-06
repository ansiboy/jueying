define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButton extends pdesigner_1.Control {
        render(h) {
            let { text } = this.props;
            let props = {
                className: "btn btn-primary btn-block",
                tabIndex: pdesigner_1.Control.tabIndex++
            };
            let child = this.designer ?
                h("div", Object.assign({}, props), text) :
                h("button", Object.assign({}, props), text);
            return this.Element('div', child);
        }
    }
    SubmitButton.defaultProps = { text: '提交表单' };
    exports.default = SubmitButton;
});
//# sourceMappingURL=control.js.map