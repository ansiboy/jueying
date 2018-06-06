define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { dataField, name } = this.state;
            return this.Element(h("div", { className: "form-group" },
                h("label", null, "\u540D\u79F0"),
                h("div", { className: "control" },
                    h("input", { className: "form-control", value: name || '', onChange: (e) => {
                            name = e.target.value;
                            this.setState({ dataField });
                        } }))), h("div", { className: "form-group" },
                h("label", null, "\u5B57\u6BB5"),
                h("div", { className: "control" },
                    h("input", { className: "form-control", value: dataField || '', onChange: (e) => {
                            dataField = e.target.value;
                            this.setState({ dataField });
                        } }))));
        }
    }
    exports.default = TestEditor;
});
//# sourceMappingURL=editor.js.map