// import React = require("react");
// import { Errors } from "./errors";
// import { ComponentWrapper, ComponentWrapperDrapData } from "../component-wrapper";
// import { removeClassName, appendClassName, classNames } from "../style";
// import { ComponentPanel } from "../component-panel";
// import { MasterPage, MasterPageContext } from "./master-page";
// import { ComponentData } from "maishu-jueying-core";
// import { Component, ComponentWrapperContext } from "../component";
// import { ComponentTypes, constants, guid } from "./common";
// import { PageDesigner } from "../page-designer";
// import { ComponentDataHandler } from "../component-data-handler";
// import { ComponentProps } from "../component-props";

// /**
//  * 占位符，用于放置控件
//  */
// export class PlaceHolder extends React.Component<ComponentProps, {}>{
//     private element: HTMLElement;

//     constructor(props: ComponentProps) {
//         super(props)

//         if (!this.props.id) {
//             throw Errors.placeHolderIdNull()
//         }
//     }

//     private designer: ComponentDataHandler;
//     private wraper: ComponentWrapper;

//     /**
//      * 启用拖放操作，以便通过拖放图标添加控件
//      */
//     private enableAppendDroppable(element: HTMLElement, master: MasterPage) {
//         if (element.getAttribute('enable-append-droppable'))
//             return

//         element.setAttribute('enable-append-droppable', 'true')

//         console.assert(element != null)
//         element.addEventListener('dragover', function (event) {
//             event.preventDefault()
//             event.stopPropagation()

//             element.className = appendClassName(element.className || '', 'active')

//             let componentName = event.dataTransfer.getData(constants.componentData)
//             if (componentName)
//                 event.dataTransfer.dropEffect = "copy"
//             else
//                 event.dataTransfer.dropEffect = "move"

//             console.log(`dragover: left:${(event as any).layerX} top:${(event as any).layerX}`)
//         })

//         let func = function (event) {
//             event.preventDefault()
//             event.stopPropagation()
//             element.className = removeClassName(element.className, 'active')
//         }
//         element.addEventListener('dragleave', func)
//         element.addEventListener('dragend', func)
//         element.addEventListener('dragexit', func)

//         element.ondrop = (event) => {
//             event.preventDefault()
//             event.stopPropagation()

//             element.className = removeClassName(element.className, 'active')

//             let ctrl: ComponentData;
//             if (event.dataTransfer)
//                 ctrl = ComponentPanel.getComponentData(event.dataTransfer);

//             if (!ctrl)
//                 return

//             console.assert(this.props.id != null);
//             console.assert(this.designer != null);
//             ctrl.parentId = this.props.id;
//             console.assert(master != null, 'host is null')
//             this.designer.appendComponent(master.props.id, ctrl)
//         }
//     }
//     private enableMoveDroppable(element: HTMLElement, host: MasterPage) {
//         if (element.getAttribute('enable-move-droppable'))
//             return

//         element.setAttribute('enable-move-droppable', 'true');

//         ($(element) as any)
//             .drop('start', (event, dd: ComponentWrapperDrapData) => {
//                 if (dd.sourceElement.id == this.wraper.props.source.props.id)
//                     return

//                 appendClassName(element, 'active')
//             })
//             .drop('drop', (event, dd: ComponentWrapperDrapData) => {
//                 if (dd.sourceElement.id == this.wraper.props.source.props.id)
//                     return

//                 let componentData = this.designer.findComponentData(dd.sourceElement.id)
//                 console.assert(componentData != null)

//                 let propName: keyof ComponentProps<any> = 'parentId'
//                 this.designer.moveComponent(dd.sourceElement.id, host.props.id)
//                 this.designer.updateComponentProps([{
//                     componentId: "string", propName: "string", value: "any"
//                 }])//dd.sourceElement.id, propName, this.props.id
//             })
//             .drop('end', (event, dd: ComponentWrapperDrapData) => {
//                 if (dd.sourceElement.id == this.wraper.props.source.props.id)
//                     return

//                 removeClassName(element, 'active')
//             })
//     }
//     render() {
//         let empty = this.props.empty || <div key={guid()} className="empty">可以拖拉控件到这里</div>
//         return <MasterPageContext.Consumer>
//             {(args) => {
//                 let master = args.master
//                 if (master == null) throw Errors.canntFindMasterPage(this.props.id)

//                 let children: (typeof empty)[] = []
//                 if (master.props && master.props.children) {
//                     let arr: React.ReactElement<ComponentProps<any>>[]
//                     if (Array.isArray(master.props.children)) {
//                         arr = master.props.children as any
//                     }
//                     else {
//                         arr = [master.props.children as any]
//                     }
//                     children = arr.filter((o: React.ReactElement<ComponentProps<any>>) => o.props.parentId != null && o.props.parentId == this.props.id)
//                 }


//                 return <ComponentWrapperContext.Consumer>
//                     {wraper => {
//                         this.wraper = wraper
//                         console.assert(this.wraper != null)

//                         let props: ComponentProps = this.props;
//                         let handler: ComponentDataHandler = props.handler;
//                         if (handler != null && children.length == 0) {
//                             children = [empty]
//                         }

//                         let element = <React.Fragment>
//                             {this.props.children}
//                             {children}
//                         </React.Fragment>

//                         if (handler) {
//                             this.designer = handler
//                             element = <div key={guid()} className={classNames.placeholder}
//                                 ref={e => {
//                                     if (!e) return
//                                     this.element = e;
//                                     this.enableAppendDroppable(e, master)
//                                     this.enableMoveDroppable(e, master)
//                                 }}>
//                                 {element}
//                             </div>
//                         }

//                         return element
//                     }}
//                 </ComponentWrapperContext.Consumer>
//             }}
//         </MasterPageContext.Consumer>

//     }
// }

// Component.register(ComponentTypes.PlaceHolder, PlaceHolder)