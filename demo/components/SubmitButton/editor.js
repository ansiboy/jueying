define(["require", "exports", "../baseControl", "react"], function (require, exports, baseControl_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButtonEditor extends baseControl_1.ControlBaseEditor {
        renderControlProps() {
            let { text } = this.state;
            return h(React.Fragment, null,
                h("div", { key: 20, className: "form-group" },
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