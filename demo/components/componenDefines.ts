import { ComponentDefine } from "pdesigner";

let componentsDirectory = 'components';
let TextInput = 'TextInput';
let TextHeader = 'TextHeader';
export let componets: Array<ComponentDefine> = [
    {
        name: `${TextInput}`,
        displayName: "文本框",
        icon: "icon-edit",
        introduce: "提供文本的输入",
        controlPath: `${componentsDirectory}/${TextInput}/control`,
        editorPath: `${componentsDirectory}/${TextInput}/editor`
    },
    {
        name: `${TextHeader}`,
        displayName: "文本标题",
        icon: "icon-text-height",
        introduce: "页面标题",
        controlPath: `${componentsDirectory}/${TextHeader}/control`,
        editorPath: `${componentsDirectory}/${TextHeader}/editor`
    },

];

