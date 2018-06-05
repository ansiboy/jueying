define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButtonEditor extends pdesigner_1.Editor {
        render() {
            let { text } = this.state;
            return h("div", { ref: (e) => this.element = e || this.element },
                h("div", { key: 20, className: "form-group", ref: (e) => this.element = e || this.element },
                    h("label", null, "\u6587\u672C"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: text || '', onChange: (e) => {
                                text = e.target.value;
                                this.setState({ text });
                            } }))));
        }
    }
    exports.default = SubmitButtonEditor;
});
//# sourceMappingURL=editor.js.map