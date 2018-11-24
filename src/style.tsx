module jueying {
    export let classNames = {
        componentSelected: `component-selected`,
        emptyTemplates: `empty-templates`,
        loadingTemplates: `loading-templates`,
        templateSelected: `template-selected`,
        templateDialog: `template-dialog`,
        emptyDocument: `empty-document`,

        component: 'component',
        componentWrapper: 'component-wrapper',
        componentPanel: 'component-panel',
        form: 'form',
        formItem: 'form-item',

        editorPanel: 'editor-panel'
    }

    let templateDialog = {
        nameHeight: 40,
        fontSize: 22
    }

    let element = document.createElement('style');
    element.type = 'text/css';
    element.innerHTML = `
            .${classNames.componentSelected} {
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
            .validationMessage {
                position: absolute;
                margin-top: -60px;
                background-color: red;
                color: white;
                padding: 4px 10px;
            }
            .${classNames.form} {
                min-height: 40px;
                width: 100%;
            }
            .${classNames.formItem} {
                min-height: 40px;
                width: 100%;
            }
            .${classNames.formItem}.active,
            .${classNames.componentWrapper}.active,
            .${classNames.componentWrapper}.${classNames.componentSelected}.active {
                border: 1px solid green;
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
            .${classNames.componentPanel} {
                background: white;
                color: black;
                width: 90px;
                font-size: 14px;
                z-index: 100;
            }
            .${classNames.componentPanel} .panel-heading {
                text-align: center;
            }
            .${classNames.componentPanel} ul li {
                width: 64px;
                text-align: center;
                padding: 8px;
            }
        `;
    document.head.appendChild(element);

    export function appendClassName(sourceClassName: string, addonClassName)
    export function appendClassName(element: HTMLElement, addonClassName)
    export function appendClassName(element: string | HTMLElement, addonClassName) {
        if (element == null) throw Errors.argumentNull('element')
        if (!addonClassName) throw Errors.argumentNull('addonClassName')

        let sourceClassName: string
        if (typeof element == 'string')
            sourceClassName = element
        else
            sourceClassName = element.className

        sourceClassName = sourceClassName || ''
        console.assert(addonClassName)

        if (sourceClassName.indexOf(addonClassName) >= 0)
            return sourceClassName

        let className = `${sourceClassName} ${addonClassName}`
        if (typeof element != 'string')
            element.className = className

        return className
    }

    export function removeClassName(sourceClassName: string, targetClassName)
    export function removeClassName(element: HTMLElement, targetClassName)
    export function removeClassName(element: string | HTMLElement, targetClassName) {
        let sourceClassName: string
        if (typeof element == 'string')
            sourceClassName = element
        else
            sourceClassName = element.className || ''

        if (sourceClassName.indexOf(targetClassName) < 0)
            return sourceClassName

        sourceClassName = sourceClassName || ''
        sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '')
        sourceClassName = sourceClassName.trim()
        if (typeof element != 'string')
            element.className = sourceClassName

        return sourceClassName
    }

}