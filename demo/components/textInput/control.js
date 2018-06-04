define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValueInput extends pdesigner_1.Control {
        constructor(props) {
            super(props);
            this.hasCSS = true;
        }
        render(h) {
            let { label } = this.props;
            return h("div", Object.assign({}, pdesigner_1.Control.htmlDOMProps(this.props), { ref: (e) => this.element = e || this.element }),
                h("label", null, label),
                h("div", { className: "control" },
                    h("input", { className: "form-control" })));
        }
    }
    ValueInput.defaultProps = ({ label: '未命名', className: 'test-control form-group' });
    exports.default = ValueInput;
});
