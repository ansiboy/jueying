define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { label, name } = this.state;
            return h(pdesigner_1.DesignerContext.Consumer, null, c => [
                h("div", { key: 10, className: "form-group", ref: (e) => this.element = e || this.element },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } }))),
                h("div", { key: 20, className: "form-group", ref: (e) => this.element = e || this.element },
                    h("label", null, "\u6807\u7B7E"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: label || '', onChange: (e) => {
                                label = e.target.value;
                                this.setState({ label });
                            } })))
            ]);
        }
    }
    exports.default = TestEditor;
});
