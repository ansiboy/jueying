"use strict";

define(["require", "exports", "jquery"], function (require, exports, j) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var jquery = window['$'] || window['jQuery'];

  if (jquery == null) {
    window['$'] = window['jQuery'] = j;
  }
});
//# sourceMappingURL=jquery.js.map
