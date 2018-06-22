define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButton extends pdesigner_1.Control {
        render(h) {
            let { text } = this.props;
            let props = {
                className: "btn btn-primary btn-block",
            };
            // let child = this.isDesignMode ?
            //     <div {...props}>{text}</div> :
            //     <button {...props}>{text}</button>;
            let tagName = this.isDesignMode ? 'div' : 'button';
            return this.Element(tagName, props, text);
        }
    }
    SubmitButton.defaultProps = {
        text: '提交表单',
        tabIndex: pdesigner_1.Control.tabIndex++
    };
    exports.default = SubmitButton;
});
//# sourceMappingURL=control.js.map