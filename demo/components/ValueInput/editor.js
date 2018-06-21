define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextInputEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { dataField, name } = this.state;
            let c = h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } }))),
                h("div", { className: "form-group" },
                    h("label", null, "\u5B57\u6BB5"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: dataField || '', onChange: (e) => {
                                dataField = e.target.value;
                                this.setState({ dataField });
                            } }))));
            return this.Element(c);
        }
    }
    exports.default = TextInputEditor;
});
//# sourceMappingURL=editor.js.map