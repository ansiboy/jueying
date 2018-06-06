define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValueInput extends pdesigner_1.Control {
        constructor(props) {
            super(props);
            this.hasCSS = true;
        }
        render(h) {
            let { dataField } = this.props;
            return this.Element("div", h("label", null, dataField), h("div", { className: "control" },
                h("input", { className: "form-control" })));
        }
    }
    ValueInput.defaultProps = ({ dataField: '未命名', className: 'test-control form-group' });
    exports.default = ValueInput;
});
//# sourceMappingURL=control.js.map