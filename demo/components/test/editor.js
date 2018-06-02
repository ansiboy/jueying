define(["require", "exports", "pdesigner"], function (require, exports, pdesigner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestEditor extends pdesigner_1.Editor {
        constructor(props) {
            super(props);
        }
        render() {
            let { text } = this.state;
            return h(pdesigner_1.DesignerContext.Consumer, null, c => h("div", { ref: (e) => this.element = e || this.element },
                h("input", { value: text, onChange: (e) => {
                        text = e.target.value;
                        this.setState({ text });
                    } })));
        }
    }
    exports.default = TestEditor;
});
