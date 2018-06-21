define(["require", "exports", "pdesigner", "react"], function (require, exports, pdesigner_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PageViewEditor extends pdesigner_1.Editor {
        render() {
            // return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            //     PageView Editor
            // </div>
            return this.Element(h(React.Fragment, null, "PageView Editor"));
        }
    }
    exports.default = PageViewEditor;
});
//# sourceMappingURL=PageViewEditor.js.map