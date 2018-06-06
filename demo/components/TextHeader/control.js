define(["require", "exports", "pdesigner", "../baseControl"], function (require, exports, pdesigner_1, baseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextHeader extends baseControl_1.BaseControl {
        render(h) {
            let { size, text, name } = this.props;
            let elementType = `h${size}`;
            return this.Element(elementType, { tabIndex: pdesigner_1.Control.tabIndex++ }, text || name);
        }
    }
    TextHeader.defaultProps = { size: 1 };
    exports.default = TextHeader;
});
//# sourceMappingURL=control.js.map