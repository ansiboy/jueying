define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Spliter extends pdesigner_1.Control {
        render() {
            let props = {
                tabIndex: pdesigner_1.Control.tabIndex++, style: { padding: '12px 0 12px 0', width: '100%' }
            };
            let child = h(React.Fragment, null,
                h("hr", { className: "spliter", style: { width: '100%', height: '2px', margin: 0 } }));
            return this.Element(props, child);
        }
    }
    exports.default = Spliter;
});
//# sourceMappingURL=control.js.map