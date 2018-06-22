define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BaseControl extends pdesigner_1.Control {
        constructor(props) {
            super(props);
        }
    }
    exports.BaseControl = BaseControl;
    class ControlBaseEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { name, style, className } = this.state;
            style = style || {};
            let { left, top, width, height } = style;
            return this.Element(h(React.Fragment, null,
                h("div", { className: "form-group" },
                    h("label", null, "\u540D\u79F0"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: name || '', onChange: (e) => {
                                name = e.target.value;
                                this.setState({ name });
                            } }))),
                h("div", { className: "form-group" },
                    h("label", null, "\u5DE6\u8FB9"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: left == null ? '' : left, onChange: (e) => {
                                style.left = pareseNumber(e.target.value);
                                this.setState({ style });
                            } }))),
                h("div", { className: "form-group" },
                    h("label", null, "\u9876\u90E8"),
                    h("div", { className: "control" },
                        h("input", { className: "form-control", value: top == null ? '' : top, onChange: (e) => {
                                style.top = pareseNumber(e.target.value);
                                this.setState({ style });
                            } }))),
                this.renderControlProps()));
        }
    }
    exports.ControlBaseEditor = ControlBaseEditor;
    function pareseNumber(text) {
        let num = Number.parseInt(text);
        if (isNaN(num))
            num = null;
        return num;
    }
});
//# sourceMappingURL=baseControl.js.map