define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { label } = this.state;
            return h(pdesigner_1.DesignerContext.Consumer, null, c => h("div", { className: "form-group", ref: (e) => this.element = e || this.element },
                h("label", null, "\u540D\u79F0"),
                h("div", { className: "control" },
                    h("input", { className: "form-control", value: label || '', onChange: (e) => {
                            label = e.target.value;
                            this.setState({ label });
                        } }))));
        }
    }
    exports.default = TestEditor;
});
