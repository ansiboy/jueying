export let classNames = {
    // componentSelected: `component-selected`,
    // emptyTemplates: `empty-templates`,
    // loadingTemplates: `loading-templates`,
    // templateSelected: `template-selected`,
    // templateDialog: `template-dialog`,
    // emptyDocument: `empty-document`,
    empty: "empty",
    selected: "selected",
    // component: 'component',
    componentDiagram: 'component-diagram',
    // componentWrapper: 'component-wrapper',
    componentPanel: 'component-panel',
    // componentIcon: 'component-icon',
    // placeholder: 'placeholder',

     editorPanel: 'editor-panel',
    // designer: 'designer',
    // moveDown: 'move-down',

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
}
.${classNames.componentPanel} {
    display: flex;
}
.${classNames.editorPanel} {
    width: 300px;
    background: white;
    color: black;
    margin: 0;
    font-size: 14px;
    z-index: 100;
    overflow: auto;
}
.${classNames.editorPanel} label {
    width: 80px;
    float: left;
    padding: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.${classNames.editorPanel} .control {
    padding-left: 90px;
}
.${classNames.editorPanel} .empty {
    padding-top: 200px;
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
        `;

if (document.head != null) {
    document.head.appendChild(element);
}

