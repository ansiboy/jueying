"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ComponentFactory =
/*#__PURE__*/
function () {
  function ComponentFactory() {
    _classCallCheck(this, ComponentFactory);
  }

  _createClass(ComponentFactory, [{
    key: "renderDesignTimeComponent",
    value: function renderDesignTimeComponent(compentData, element, context) {
      this.renderComponent(compentData, element, context);
    }
  }]);

  return ComponentFactory;
}();

exports.ComponentFactory = ComponentFactory;
//# sourceMappingURL=component-factory.js.map
