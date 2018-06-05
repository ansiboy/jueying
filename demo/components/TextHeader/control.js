define(["require", "exports", "pdesigner", "../baseControl"], function (require, exports, pdesigner_1, baseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextHeader extends baseControl_1.BaseControl {
        render(h) {
            let { size, text, name } = this.props;
            let elementType = `h${size}`;
            let props = pdesigner_1.Control.htmlDOMProps(this.props);
            props.ref = (e) => this.element = e || this.element;
            return h(elementType, props, text || name);
        }
    }
    TextHeader.defaultProps = { size: 1 };
    exports.default = TextHeader;
});
//# sourceMappingURL=control.js.map