define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpliterEditor extends pdesigner_1.Editor {
        render() {
            let { name } = this.state;
            return this.Element(h("div", { className: "form-group" },
                h("label", null, "\u540D\u79F0"),
                h("div", { className: "control" },
                    h("input", { className: "form-control", value: name || '', onChange: (e) => {
                            name = e.target.value;
                            this.setState({ name });
                        } }))));
        }
    }
    exports.default = SpliterEditor;
});
//# sourceMappingURL=editor.js.map