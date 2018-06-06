define(["require", "exports", "react", "pdesigner"], function (require, exports, React, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValueInput extends pdesigner_1.Control {
        constructor(props) {
            super(props);
            this.hasCSS = true;
        }
        render(h) {
            let { dataField } = this.props;
            let c = h(React.Fragment, null,
                h("label", null, dataField),
                h("div", { className: "control" },
                    h("input", { className: "form-control" })));
            return this.Element('div', {}, c);
        }
    }
    ValueInput.defaultProps = ({ dataField: '未命名', className: 'test-control form-group' });
    exports.default = ValueInput;
});
//# sourceMappingURL=control.js.map