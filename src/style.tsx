import { Errors } from "./errors";

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
    componentIcon: 'component-icon',
    placeholder: 'placeholder',

    editorPanel: 'editor-panel',
    designer: 'designer',
    moveDown: 'move-down',

}

let templateDialog = {
    nameHeight: 40,
    fontSize: 22
}

let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = `
            .${classNames.componentSelected} {
                border: solid 1px #337ab7!important;
            }
            .${classNames.componentSelected} > :first-child {
                border-color: blue;
              }
              .${classNames.componentSelected} .resize_handle {
                position: absolute;
                height: 6px;
                width: 6px;
                border: 1px solid #89B;
                background: #9AC;
              }
              .${classNames.componentSelected} .move_handle {
                height: 12px;
                width: 12px;
                top: 6px;
                left: 8px;
                border: solid 1px black;
                position: relative;
                margin-top: -12px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .NE {
                top: -4px;
              }
              .${classNames.componentSelected} .NE,
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .SE {
                right: -4px;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected}.SS,
              .${classNames.componentSelected} .SE {
                bottom: -4px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .WW,
              .${classNames.componentSelected} .SW {
                left: -4px;
              }
              .${classNames.componentSelected} .SE,
              .${classNames.componentSelected} .NW {
                cursor: nw-resize;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected} .NE {
                cursor: ne-resize;
              }
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .SS {
                cursor: n-resize;
                left: 50%;
                margin-left: -4px;
              }
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .WW {
                cursor: e-resize;
                top: 50%;
                margin-top: -4px;
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
            .${classNames.component} > .NW,
            .${classNames.component} > .NN,
            .${classNames.component} > .NE,
            .${classNames.component} > .EE,
            .${classNames.component} > .SE,
            .${classNames.component} > .SW,
            .${classNames.component} > .SS,
            .${classNames.component} > .WW {
                display: none;
            }
            .${classNames.componentSelected}.component > .NW,
            .${classNames.componentSelected}.component > .NN,
            .${classNames.componentSelected}.component > .NE,
            .${classNames.componentSelected}.component > .EE,
            .${classNames.componentSelected}.component > .SE,
            .${classNames.componentSelected}.component > .SW,
            .${classNames.componentSelected}.component > .SS,
            .${classNames.componentSelected}.component > .WW {
                display: block;
            }
            .${classNames.placeholder} {
                min-height: 40px;
                width: 100%;
            }
            .${classNames.placeholder}.active,
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
            .${classNames.designer} .error,
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
            .${classNames.componentWrapper}.${classNames.moveDown} {
         
            }
        `;

if (document.head != null) {
    document.head.appendChild(element);
}

export function appendClassName(sourceClassName: string, addonClassName: string): string
export function appendClassName(element: HTMLElement, addonClassName: string): string
export function appendClassName(element: string | HTMLElement, addonClassName: string): string {
    if (element == null) throw Errors.argumentNull('element')
    if (!addonClassName) throw Errors.argumentNull('addonClassName')

    let sourceClassName: string
    if (typeof element == 'string')
        sourceClassName = element
    else
        sourceClassName = element.className

    sourceClassName = sourceClassName || ''
    console.assert(addonClassName != null)

    if (sourceClassName.indexOf(addonClassName) >= 0)
        return sourceClassName

    let className = `${sourceClassName} ${addonClassName}`
    if (typeof element != 'string')
        element.className = className

    return className
}

export function removeClassName(sourceClassName: string, targetClassName: string): string
export function removeClassName(element: HTMLElement, targetClassName: string): string
export function removeClassName(element: string | HTMLElement, targetClassName: string): string {
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
