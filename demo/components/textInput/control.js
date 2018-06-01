define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextInputControl extends pdesigner_1.Control {
        render(h) {
            return h("div", { ref: (e) => this.element = e || this.element },
                h("label", null),
                h("div", null,
                    h("input", null)));
        }
    }
    exports.default = TextInputControl;
});
