define(["require", "exports", "../baseControl", "react"], function (require, exports, baseControl_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SubmitButtonEditor extends baseControl_1.ControlBaseEditor {
        renderControlProps() {
            let { text, style } = this.state;
            style = style || {};
            let { width } = style;
            return h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u5BBD"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: width == null ? '' : width, onChange: (e) => {
                                let text = e.target.value;
                                style.width = /^\+?(0|[1-9]\d*)$/.test(text) ? Number.parseInt(text) : text;
                                this.setState({ style });
                            } }))),
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