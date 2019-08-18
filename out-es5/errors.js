"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Errors =
  /*#__PURE__*/
  function () {
    function Errors() {
      _classCallCheck(this, Errors);
    }

    _createClass(Errors, null, [{
      key: "placeHolderIdNull",
      value: function placeHolderIdNull() {
        var msg = "Place holder property id cannt be null or empty.";
        return new Error(msg);
      }
    }, {
      key: "fileNotExists",
      value: function fileNotExists(fileName) {
        return new Error("File '".concat(fileName, "' is not exists."));
      }
    }, {
      key: "argumentNull",
      value: function argumentNull(argumentName) {
        return new Error("Argument ".concat(argumentName, " is null or empty."));
      }
    }, {
      key: "pageDataIsNull",
      value: function pageDataIsNull() {
        return new Error("Page data is null.");
      }
    }, {
      key: "toolbarRequiredKey",
      value: function toolbarRequiredKey() {
        return new Error("Toolbar has not a key prop.");
      }
    }, {
      key: "loadPluginFail",
      value: function loadPluginFail(pluginId) {
        return new Error("Load plugin '".concat(pluginId, "' fail."));
      }
    }, {
      key: "idRequired",
      value: function idRequired() {
        return new Error("Property id is required.");
      }
    }, {
      key: "canntFindHost",
      value: function canntFindHost(componentId) {
        return new Error("Can not find host element for component container ".concat(componentId, "."));
      }
    }, {
      key: "propCanntNull",
      value: function propCanntNull(componentName, property) {
        var msg = "".concat(componentName, " property ").concat(property, " cannt be null or empty.");
        return new Error(msg);
      }
    }, {
      key: "argumentFieldCanntNull",
      value: function argumentFieldCanntNull(fieldName, argumentName) {
        var msg = "".concat(fieldName, " of argument ").concat(argumentName, " cannt be null or empty.");
        return new Error(msg);
      }
    }]);

    return Errors;
  }();

  exports.Errors = Errors;
});
//# sourceMappingURL=errors.js.map
