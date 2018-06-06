define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { dataField } = this.state;
            return h(pdesigner_1.DesignerContext.Consumer, null, c => [
                h("div", { key: 10, className: "form-group", ref: (e) => this.element = e || this.element },
                    h("label", null, "\u5B57\u6BB5"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: dataField || '', onChange: (e) => {
                                dataField = e.target.value;
                                this.setState({ dataField });
                            } }))),
            ]);
        }
    }
    exports.default = TestEditor;
});
//# sourceMappingURL=editor.js.map