define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextHeaderEditor extends pdesigner_1.Editor {
        render() {
            let { size } = this.state;
            return h("div", { ref: (e) => this.element = e || this.element },
                h("div", { key: 20, className: "form-group", ref: (e) => this.element = e || this.element },
                    h("label", null, "\u5B57\u4F53\u5927\u5C0F"),
                    h("div", { className: "control" },
                        h("select", { className: "form-control", value: size, onChange: (e) => {
                                size = Number.parseInt(e.target.value);
                                this.setState({ size });
                            } },
                            h("option", { value: 1 }, "H1"),
                            h("option", { value: 2 }, "H2"),
                            h("option", { value: 3 }, "H3"),
                            h("option", { value: 4 }, "H4")))));
        }
    }
    exports.default = TextHeaderEditor;
});
