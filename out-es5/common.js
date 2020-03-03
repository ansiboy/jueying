"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var components_1 = require("./components");

exports.proptDisplayNames = {};

var maishu_toolkit_1 = require("maishu-toolkit");

exports.guid = maishu_toolkit_1.guid;
exports.Callback = maishu_toolkit_1.Callback;

function translateComponentDataChildren(children) {
  if (children == null || children.length == 0) return [];
  var r = [];

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (typeof child == "string") {
      child = {
        type: components_1.ComponentTypes.Text,
        props: {
          text: child
        }
      };
      r.push(child);
    } else {
      r.push(children[i]);
    }
  }

  return r;
}

exports.translateComponentDataChildren = translateComponentDataChildren;
//# sourceMappingURL=common.js.map
