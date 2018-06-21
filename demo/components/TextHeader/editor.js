define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextHeaderEditor extends pdesigner_1.Editor {
        render() {
            let { size, name, text } = this.state;
            return this.Element(h(React.Fragment, null,
                h("div", { key: 10, className: "form-group" },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } }))),
                h("div", { key: 15, className: "form-group" },
                    h("label", null, "\u6587\u672C"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: text || name || '', onChange: (e) => {
                                text = e.target.value;
                                this.setState({ text });
                            } }))),
                h("div", { key: 20, className: "form-group" },
                    h("label", null, "\u5B57\u4F53\u5927\u5C0F"),
                    h("div", { className: "control" },
                        h("select", { className: "form-control", value: size, onChange: (e) => {
                                size = Number.parseInt(e.target.value);
                                this.setState({ size });
                            } },
                            h("option", { value: 1 }, "H1"),
                            h("option", { value: 2 }, "H2"),
                            h("option", { value: 3 }, "H3"),
                            h("option", { value: 4 }, "H4"))))));
        }
    }
    exports.default = TextHeaderEditor;
});
//# sourceMappingURL=editor.js.map