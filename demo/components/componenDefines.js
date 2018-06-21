define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let componentsDirectory = 'components';
    let TextInput = 'ValueInput';
    let TextHeader = 'TextHeader';
    let SubmitButton = 'SubmitButton';
    let Spliter = 'Spliter';
    exports.componets = [
        {
            name: `${TextHeader}`,
            controlPath: `${componentsDirectory}/${TextHeader}/control`,
            editorPath: `${componentsDirectory}/${TextHeader}/editor`,
            displayName: "文本标题",
            icon: "icon-text-width",
            introduce: "页面标题",
        },
        {
            name: `${TextInput}`,
            controlPath: `${componentsDirectory}/${TextInput}/control`,
            editorPath: `${componentsDirectory}/${TextInput}/editor`,
            displayName: "文本框",
            icon: "icon-edit",
            introduce: "提供文本的输入",
        },
        {
            name: `${SubmitButton}`,
            controlPath: `${componentsDirectory}/${SubmitButton}/control`,
            editorPath: `${componentsDirectory}/${SubmitButton}/editor`,
            displayName: "表单按钮",
            icon: "icon-th-large",
            introduce: "表单提交按钮",
        },
        {
            name: `${Spliter}`,
            controlPath: `${componentsDirectory}/${Spliter}/control`,
            editorPath: `${componentsDirectory}/${Spliter}/editor`,
            displayName: "分割线",
            icon: "icon-resize-horizontal",
            introduce: "表单提交按钮",
        },
    ];
});
//# sourceMappingURL=componenDefines.js.map