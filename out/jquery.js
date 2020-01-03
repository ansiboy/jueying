define(["require", "exports", "jquery"], function (require, exports, j) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let jquery = window['$'] || window['jQuery'];
    if (jquery == null) {
        window['$'] = window['jQuery'] = j;
    }
});
//# sourceMappingURL=jquery.js.map