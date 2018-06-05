define(["require", "exports", "../baseControl"], function (require, exports, baseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButton extends baseControl_1.BaseControl {
        render(h) {
            return h("button", { ref: (e) => this.element = e || this.element });
        }
    }
    exports.default = SubmitButton;
});
