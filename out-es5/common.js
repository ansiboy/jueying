"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
  };
  exports.proptDisplayNames = {};

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  exports.guid = guid;

  var Callback =
  /*#__PURE__*/
  function () {
    function Callback() {
      _classCallCheck(this, Callback);

      this.funcs = new Array();
    }

    _createClass(Callback, [{
      key: "add",
      value: function add(func) {
        this.funcs.push(func);
      }
    }, {
      key: "remove",
      value: function remove(func) {
        this.funcs = this.funcs.filter(function (o) {
          return o != func;
        });
      }
    }, {
      key: "fire",
      value: function fire(args) {
        this.funcs.forEach(function (o) {
          return o(args);
        });
      }
    }], [{
      key: "create",
      value: function create() {
        return new Callback();
      }
    }]);

    return Callback;
  }();

  exports.Callback = Callback;
});
//# sourceMappingURL=common.js.map
