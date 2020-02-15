"use strict";

define(["require", "exports", "./errors"], function (require, exports, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.classNames = {
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
  var templateDialog = {
    nameHeight: 40,
    fontSize: 22
  };
  var element = document.createElement('style');
  element.type = 'text/css';
  element.setAttribute("data-name", "jueying");
  element.innerHTML = "\n            .".concat(exports.classNames.componentSelected, " {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(exports.classNames.componentSelected, " > :first-child {\n                border-color: blue;\n              }\n              .").concat(exports.classNames.componentSelected, " .resize_handle {\n                position: absolute;\n                height: 6px;\n                width: 6px;\n                border: 1px solid #89B;\n                background: #9AC;\n              }\n              .").concat(exports.classNames.componentSelected, " .move_handle {\n                height: 12px;\n                width: 12px;\n                top: 6px;\n                left: 8px;\n                border: solid 1px black;\n                position: relative;\n                margin-top: -12px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NW,\n              .").concat(exports.classNames.componentSelected, " .NN,\n              .").concat(exports.classNames.componentSelected, " .NE {\n                top: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NE,\n              .").concat(exports.classNames.componentSelected, " .EE,\n              .").concat(exports.classNames.componentSelected, " .SE {\n                right: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .SW,\n              .").concat(exports.classNames.componentSelected, ".SS,\n              .").concat(exports.classNames.componentSelected, " .SE {\n                bottom: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NW,\n              .").concat(exports.classNames.componentSelected, " .WW,\n              .").concat(exports.classNames.componentSelected, " .SW {\n                left: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .SE,\n              .").concat(exports.classNames.componentSelected, " .NW {\n                cursor: nw-resize;\n              }\n              .").concat(exports.classNames.componentSelected, " .SW,\n              .").concat(exports.classNames.componentSelected, " .NE {\n                cursor: ne-resize;\n              }\n              .").concat(exports.classNames.componentSelected, " .NN,\n              .").concat(exports.classNames.componentSelected, " .SS {\n                cursor: n-resize;\n                left: 50%;\n                margin-left: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .EE,\n              .").concat(exports.classNames.componentSelected, " .WW {\n                cursor: e-resize;\n                top: 50%;\n                margin-top: -4px;\n              }\n            .").concat(exports.classNames.emptyTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(exports.classNames.loadingTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(exports.classNames.templateSelected, " .page-view {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(exports.classNames.templateDialog, " .name {\n                margin-top: -").concat(templateDialog.nameHeight, "px;\n                height: ").concat(templateDialog.nameHeight, "px;\n                font-size: ").concat(templateDialog.fontSize, "px;\n                text-align: center;\n                padding-top: 6px;\n                background-color: black;\n                opacity: 0.5;\n            }\n            .").concat(exports.classNames.templateDialog, " .name span {\n                color: white;\n            }\n            .").concat(exports.classNames.emptyDocument, " {\n                text-align: center;\n                padding: 100px 0;\n            }\n            .").concat(exports.classNames.component, " > .NW,\n            .").concat(exports.classNames.component, " > .NN,\n            .").concat(exports.classNames.component, " > .NE,\n            .").concat(exports.classNames.component, " > .EE,\n            .").concat(exports.classNames.component, " > .SE,\n            .").concat(exports.classNames.component, " > .SW,\n            .").concat(exports.classNames.component, " > .SS,\n            .").concat(exports.classNames.component, " > .WW {\n                display: none;\n            }\n            .").concat(exports.classNames.componentSelected, ".component > .NW,\n            .").concat(exports.classNames.componentSelected, ".component > .NN,\n            .").concat(exports.classNames.componentSelected, ".component > .NE,\n            .").concat(exports.classNames.componentSelected, ".component > .EE,\n            .").concat(exports.classNames.componentSelected, ".component > .SE,\n            .").concat(exports.classNames.componentSelected, ".component > .SW,\n            .").concat(exports.classNames.componentSelected, ".component > .SS,\n            .").concat(exports.classNames.componentSelected, ".component > .WW {\n                display: block;\n            }\n            .").concat(exports.classNames.placeholder, " {\n                min-height: 40px;\n                width: 100%;\n            }\n            .").concat(exports.classNames.placeholder, ".active,\n            .").concat(exports.classNames.componentWrapper, ".active,\n            .").concat(exports.classNames.componentWrapper, ".").concat(exports.classNames.componentSelected, ".active {\n                border: 1px solid green;\n            }\n            .").concat(exports.classNames.editorPanel, " {\n                width: 300px;\n                background: white;\n                color: black;\n                margin: 0;\n                font-size: 14px;\n                z-index: 100;\n                overflow: auto;\n            }\n            .").concat(exports.classNames.editorPanel, " label {\n                width: 80px;\n                float: left;\n                padding: 4px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n            }\n            .").concat(exports.classNames.editorPanel, " .control {\n                padding-left: 90px;\n            }\n            .").concat(exports.classNames.editorPanel, " .empty {\n                padding-top: 200px;\n                text-align: center;\n            }\n            .").concat(exports.classNames.designer, " .error,\n            .").concat(exports.classNames.editorPanel, " .error {\n                color: red;\n            }\n            .").concat(exports.classNames.componentPanel, " {\n                background: white;\n                color: black;\n                font-size: 14px;\n                z-index: 100;\n                list-style: none;\n                padding: 0;\n                text-align: center\n            }\n            .").concat(exports.classNames.componentPanel, " .panel-heading {\n                text-align: center;\n            }\n            .").concat(exports.classNames.componentPanel, " li {\n                text-align: center;\n                padding: 8px;\n            }\n            .").concat(exports.classNames.componentWrapper, ".").concat(exports.classNames.moveDown, " {\n         \n            }\n        ");
  document.head.appendChild(element);

  function appendClassName(element, addonClassName) {
    if (element == null) throw errors_1.Errors.argumentNull('element');
    if (!addonClassName) throw errors_1.Errors.argumentNull('addonClassName');
    var sourceClassName;
    if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className;
    sourceClassName = sourceClassName || '';
    console.assert(addonClassName);
    if (sourceClassName.indexOf(addonClassName) >= 0) return sourceClassName;
    var className = "".concat(sourceClassName, " ").concat(addonClassName);
    if (typeof element != 'string') element.className = className;
    return className;
  }

  exports.appendClassName = appendClassName;

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

  exports.removeClassName = removeClassName;
});
//# sourceMappingURL=style.js.map
