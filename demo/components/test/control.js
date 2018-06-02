define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestControl extends pdesigner_1.Control {
        get persistentMembers() {
            return ['text'];
        }
        render(h) {
            let { text } = this.state;
            text = text || "FFFF";
            return h("div", { ref: (e) => this.element = e || this.element }, text);
        }
    }
    exports.default = TestControl;
    pdesigner_1.Control.register(TestControl);
});
