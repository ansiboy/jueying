define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Spliter extends pdesigner_1.Control {
        render() {
            let props = {
                tabIndex: pdesigner_1.Control.tabIndex++, style: { margin: '20px 0 20px 0' }
            };
            let child = h(React.Fragment, null,
                h("div", { className: "spliter", style: { width: '100%', height: '2px' } }));
            return this.Element(props, child);
        }
    }
    exports.default = Spliter;
});
//# sourceMappingURL=control.js.map