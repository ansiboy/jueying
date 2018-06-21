namespace pdesigner {
    export function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    export let classNames = {
        controlSelected: `control-selected `,
        emptyTemplates: `empty-templates`,
        loadingTemplates: `loading-templates`,
        templateSelected: `template-selected`
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
    `;
    document.head.appendChild(element);
}