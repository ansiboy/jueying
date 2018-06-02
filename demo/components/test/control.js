define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestControl extends pdesigner_1.Control {
        constructor(props) {
            super(props);
            this.state = { text: '' };
        }
        render(h) {
            let { text } = this.props;
            return h("div", { ref: (e) => this.element = e || this.element }, text);
        }
    }
    TestControl.defaultProps = ({ text: 'HelloWorld' });
    exports.default = TestControl;
    pdesigner_1.Control.register(TestControl);
});
