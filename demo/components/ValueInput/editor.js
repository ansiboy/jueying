define(["require", "exports", "react", "../baseControl"], function (require, exports, React, baseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextInputEditor extends baseControl_1.ControlBaseEditor {
        constructor(props) {
            super(props);
        }
        renderControlProps() {
            let { dataField } = this.state;
            return h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u5B57\u6BB5"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: dataField || '', onChange: (e) => {
                                dataField = e.target.value;
                                this.setState({ dataField });
                            } }))));
        }
    }
    exports.default = TextInputEditor;
});
//# sourceMappingURL=editor.js.map