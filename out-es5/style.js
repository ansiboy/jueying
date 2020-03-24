"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendClassName = appendClassName;
exports.removeClassName = removeClassName;
exports.classNames = void 0;

var _errors = require("./errors");

var classNames = {
  componentSelected: "component-selected",
  emptyTemplates: "empty-templates",
  loadingTemplates: "loading-templates",
  templateSelected: "template-selected",
  templateDialog: "template-dialog",
  emptyDocument: "empty-document",
  component: 'component',
  componentWrapper: 'component-wrapper',
  componentPanel: 'component-panel',
  componentIcon: 'component-icon',
  placeholder: 'placeholder',
  editorPanel: 'editor-panel',
  designer: 'designer',
  moveDown: 'move-down'
};
exports.classNames = classNames;
var templateDialog = {
  nameHeight: 40,
  fontSize: 22
};
var element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = "\n            .".concat(classNames.componentSelected, " {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.componentSelected, " > :first-child {\n                border-color: blue;\n              }\n              .").concat(classNames.componentSelected, " .resize_handle {\n                position: absolute;\n                height: 6px;\n                width: 6px;\n                border: 1px solid #89B;\n                background: #9AC;\n              }\n              .").concat(classNames.componentSelected, " .move_handle {\n                height: 12px;\n                width: 12px;\n                top: 6px;\n                left: 8px;\n                border: solid 1px black;\n                position: relative;\n                margin-top: -12px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .NE {\n                top: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NE,\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .SE {\n                right: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, ".SS,\n              .").concat(classNames.componentSelected, " .SE {\n                bottom: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .WW,\n              .").concat(classNames.componentSelected, " .SW {\n                left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SE,\n              .").concat(classNames.componentSelected, " .NW {\n                cursor: nw-resize;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, " .NE {\n                cursor: ne-resize;\n              }\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .SS {\n                cursor: n-resize;\n                left: 50%;\n                margin-left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .WW {\n                cursor: e-resize;\n                top: 50%;\n                margin-top: -4px;\n              }\n            .").concat(classNames.emptyTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.loadingTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.templateSelected, " .page-view {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.templateDialog, " .name {\n                margin-top: -").concat(templateDialog.nameHeight, "px;\n                height: ").concat(templateDialog.nameHeight, "px;\n                font-size: ").concat(templateDialog.fontSize, "px;\n                text-align: center;\n                padding-top: 6px;\n                background-color: black;\n                opacity: 0.5;\n            }\n            .").concat(classNames.templateDialog, " .name span {\n                color: white;\n            }\n            .").concat(classNames.emptyDocument, " {\n                text-align: center;\n                padding: 100px 0;\n            }\n            .").concat(classNames.component, " > .NW,\n            .").concat(classNames.component, " > .NN,\n            .").concat(classNames.component, " > .NE,\n            .").concat(classNames.component, " > .EE,\n            .").concat(classNames.component, " > .SE,\n            .").concat(classNames.component, " > .SW,\n            .").concat(classNames.component, " > .SS,\n            .").concat(classNames.component, " > .WW {\n                display: none;\n            }\n            .").concat(classNames.componentSelected, ".component > .NW,\n            .").concat(classNames.componentSelected, ".component > .NN,\n            .").concat(classNames.componentSelected, ".component > .NE,\n            .").concat(classNames.componentSelected, ".component > .EE,\n            .").concat(classNames.componentSelected, ".component > .SE,\n            .").concat(classNames.componentSelected, ".component > .SW,\n            .").concat(classNames.componentSelected, ".component > .SS,\n            .").concat(classNames.componentSelected, ".component > .WW {\n                display: block;\n            }\n            .").concat(classNames.placeholder, " {\n                min-height: 40px;\n                width: 100%;\n            }\n            .").concat(classNames.placeholder, ".active,\n            .").concat(classNames.componentWrapper, ".active,\n            .").concat(classNames.componentWrapper, ".").concat(classNames.componentSelected, ".active {\n                border: 1px solid green;\n            }\n            .").concat(classNames.editorPanel, " {\n                width: 300px;\n                background: white;\n                color: black;\n                margin: 0;\n                font-size: 14px;\n                z-index: 100;\n                overflow: auto;\n            }\n            .").concat(classNames.editorPanel, " label {\n                width: 80px;\n                float: left;\n                padding: 4px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n            }\n            .").concat(classNames.editorPanel, " .control {\n                padding-left: 90px;\n            }\n            .").concat(classNames.editorPanel, " .empty {\n                padding-top: 200px;\n                text-align: center;\n            }\n            .").concat(classNames.designer, " .error,\n            .").concat(classNames.editorPanel, " .error {\n                color: red;\n            }\n            .").concat(classNames.componentPanel, " {\n                background: white;\n                color: black;\n                font-size: 14px;\n                z-index: 100;\n                list-style: none;\n                padding: 0;\n                text-align: center\n            }\n            .").concat(classNames.componentPanel, " .panel-heading {\n                text-align: center;\n            }\n            .").concat(classNames.componentPanel, " li {\n                text-align: center;\n                padding: 8px;\n            }\n            .").concat(classNames.componentWrapper, ".").concat(classNames.moveDown, " {\n         \n            }\n        ");
document.head.appendChild(element);

function appendClassName(element, addonClassName) {
  if (element == null) throw _errors.Errors.argumentNull('element');
  if (!addonClassName) throw _errors.Errors.argumentNull('addonClassName');
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className;
  sourceClassName = sourceClassName || '';
  console.assert(addonClassName);
  if (sourceClassName.indexOf(addonClassName) >= 0) return sourceClassName;
  var className = "".concat(sourceClassName, " ").concat(addonClassName);
  if (typeof element != 'string') element.className = className;
  return className;
}

function removeClassName(element, targetClassName) {
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className || '';
  if (sourceClassName.indexOf(targetClassName) < 0) return sourceClassName;
  sourceClassName = sourceClassName || '';
  sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
  sourceClassName = sourceClassName.trim();
  if (typeof element != 'string') element.className = sourceClassName;
  return sourceClassName;
}
//# sourceMappingURL=style.js.map
