import { ComponentPlaceHolder } from "./runtime";

export let classNames = {
    empty: "empty",
    selected: "selected",
    componentDiagram: 'component-diagram',
    componentPanel: 'component-panel',
    editorPanel: 'editor-panel',
    propertyEditor: "property-editor",
    propertyEditorControl: "property-editor-control",
    propertyEditorLabel: "property-editor-label",
    componentPlaceHolder: "component-place-holder",
    componentWrapper: "component-wrapper",
    page: "page"
}

// let templateDialog = {
//     nameHeight: 40,
//     fontSize: 22
// }

let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = `
.${classNames.componentDiagram} {
    list-style: none;
    margin: 0;
    padding: 0;
    border: solid 1px #ccc;
}
.${classNames.componentPanel} {
    display: flex;
    border: solid 1px #ccc;
}
.${classNames.editorPanel} {
    border: solid 1px #ccc;
    min-height: 50px;
}
.${classNames.editorPanel} label {
    width: 80px;
    padding: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.${classNames.editorPanel} .control {
    padding-left: 90px;
}
.${classNames.editorPanel} .empty {
    padding-top: 20px;
    text-align: center;
}
.${classNames.editorPanel} .error {
    color: red;
}
.${classNames.componentPanel} {
    background: white;
    color: black;
    font-size: 14px;
    z-index: 100;
    list-style: none;
    padding: 0;
    text-align: center
}
.${classNames.componentPanel} .panel-heading {
    text-align: center;
}
.${classNames.componentPanel} li {
    text-align: center;
    padding: 8px;
}
.${classNames.propertyEditor} {
    display: flex;
}
.${classNames.componentPlaceHolder} {
    min-height: 50px;
    min-width: 50px;
}
.${classNames.componentWrapper} {
    list-style: none;
    margin: 0;
    padding: 0;
}
.${classNames.page} {
    list-style: none;
    margin: 0;
    padding: 0;
}
        `;

if (document.head != null) {
    document.head.appendChild(element);
}

