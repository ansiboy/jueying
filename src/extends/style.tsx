namespace jueying.extentions {
    export let classNames = {
        controlSelected: `control-selected `,
        emptyTemplates: `empty-templates`,
        loadingTemplates: `loading-templates`,
        templateSelected: `template-selected`,
        templateDialog: `template-dialog`,
        emptyDocument: `empty-document`,
    }

    let templateDialog = {
        nameHeight: 40,
        fontSize: 22
    }
    
    let element = document.createElement('style');
    element.type = 'text/css';
    element.innerHTML = `
        .${classNames.controlSelected} {
            border: solid 1px #337ab7!important;
        }
        .${classNames.emptyTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${classNames.loadingTemplates} {
            padding:50px 0;
            text-align: center;
        }
        .${classNames.templateSelected} .page-view {
            border: solid 1px #337ab7!important;
        }
        .${classNames.templateDialog} .name {
            margin-top: -${templateDialog.nameHeight}px;
            height: ${templateDialog.nameHeight}px;
            font-size: ${templateDialog.fontSize}px;
            text-align: center;
            padding-top: 6px;
            background-color: black;
            opacity: 0.5;
        }
        .${classNames.templateDialog} .name span {
            color: white;
        }
        .${classNames.emptyDocument} {
            text-align: center;
            padding: 100px 0;
        }
        ul.nav-tabs li i {
            position: relative;
            top: 4px;
            right: -6px;
        }
    `;
    document.head.appendChild(element);
}