import { ComponentData } from "../runtime";
import * as React from "react";
import { EditorProps } from "./types";
import { classNames } from "../style";
import { errors } from "../errors";
import { DesignerContext, PageDesigner } from "../designer";

import { FormValidator, ValidateField } from "maishu-dilu/out/formValidator";
import { EditPanelContext, PropertyEditor } from "./editor-panel-context";
import { PropertyEditorInfo, PropertyEditorProps } from "./types";
import { strings } from "../strings";

type ComponentEditors = { [typeName: string]: PropertyEditorInfo<any>[] }

interface EditorPanelState {
    componentDatas: ComponentData[];
}

export interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
    customRender?: EditorProps["customRender"];
    children?: React.ReactNode;
}

export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;

    private _validator: FormValidator;
    private _validateFields: ValidateField[];

    constructor(props: EditorPanelProps) {
        super(props);
        this.state = { componentDatas: [] };
    }

    static getEditors(designer: PageDesigner): PropertyEditor[] {

        if (designer == null) throw errors.argumentNull("designer")

        let selectedComponents = designer.selectedComponents;
        if (selectedComponents.length == 0)
            return []

        let validEditorInfos: PropertyEditorInfo[] = []
        let firstComponent = selectedComponents[0]
        let firstComponentEditors = Object.assign({}, designer.componentEditors[selectedComponents[0].type])
        let componentConfig = designer.componentsConfig[selectedComponents[0].type]
        console.assert(componentConfig != null)

        if (selectedComponents.length == 1) {
            let defaultValue: ComponentEditors[""] = []
            let componentEditors = designer.componentEditors[firstComponent.type] || defaultValue
            validEditorInfos = [...componentEditors]
        }
        else {
            for (let i = 0; i < firstComponentEditors.length; i++) {
                let e = firstComponentEditors[i]

                /** 判断是否存在相同的项 */
                let exists: boolean = true
                for (let j = 1; j < selectedComponents.length; j++) {
                    let selectedComponent = selectedComponents[j]
                    let selectedComponentEditors = designer.componentEditors[selectedComponent.type] || []
                    exists = selectedComponentEditors
                        .filter(o => o.propertyName == e.propertyName && o.editorType == e.editorType &&
                            o.displayName == e.displayName && selectedComponent.props[o.propertyName] == firstComponent.props[e.propertyName]).length > 0

                    if (!exists) {
                        break
                    }
                }

                if (exists) {
                    validEditorInfos.push(e)
                }
            }
        }

        let r: PropertyEditor[] = []
        for (let i = 0; i < validEditorInfos.length; i++) {
            let editorInfo = validEditorInfos[i]
            let editorProps: PropertyEditorProps<any> = {
                value: firstComponent.props[editorInfo.propertyName],
                editComponents: selectedComponents,
                updateComponentProp(value) {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.id, propName: editorInfo.propertyName as string, value
                    }));

                    designer.updateComponentProps(componentProps);
                },
            }

            let editorType = editorInfo.editorType
            let editor = React.createElement(editorType, editorProps);
            r.push({
                proppertyName: editorInfo.propertyName as string, displayName: editorInfo.displayName || editorInfo.propertyName as string,
                group: editorInfo.group || "", editor
            })
        }


        // for (let i = 1; i < selectedComponents.length; i++) {
        //     let editors = designer.componentEditors[selectedComponents[i].type];
        //     /** 只保留名称相同，类型相同的编辑器 */

        //     let displayName2 = designer.componentsConfig[selectedComponents[i].type].displayName || key

        //     // if (editors[key] != firstComponentEditors[key] || displayName1 != displayName2) {
        //     //     delete firstComponentEditors[key]
        //     //     break;
        //     // }
        // }
        // // r.push({ displayName: displayName1, })

        return r




        // if (designer == null) {
        //     return []
        // }

        // // 各个控件相同的编辑器
        // let commonPropEditorInfos: PropEditorInfo[] = []
        // let selectedComponents = designer.selectedComponents;
        // for (let i = 0; i < selectedComponents.length; i++) {
        //     let componentData = selectedComponents[i];
        //     let componentEditors = designer.componentEditors[componentData.type];
        //     if (!componentEditors)
        //         continue;

        //     let componentConfig = designer.componentsConfig[componentData.type];
        //     let propEditorInfos = Object.keys(componentEditors).map(propertyName => {

        //         let r: PropEditorInfo = {
        //             propName: propertyName, displayName: componentConfig.displayName || componentData.type,
        //             editorType: componentEditors[propertyName], group: componentConfig.group || ""
        //         }

        //         return r
        //     })

        //     if (i == 0) {
        //         commonPropEditorInfos = propEditorInfos || []
        //     }
        //     else {
        //         let items: PropEditorInfo[] = []
        //         commonPropEditorInfos.forEach(propInfo1 => {
        //             propEditorInfos.forEach(propInfo2 => {
        //                 let propName1 = propInfo1.propName;
        //                 let propName2 = propInfo2.propName;
        //                 if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
        //                     items.push(propInfo1)
        //                 }
        //             })
        //         })
        //         commonPropEditorInfos = items
        //     }
        // }

        // // 各个控件相同的属性值
        // let commonFlatProps: { [navName: string]: any } = {};
        // for (let i = 0; i < selectedComponents.length; i++) {
        //     let control = selectedComponents[i];
        //     let controlProps: { [key: string]: any } = Object.assign({}, control.props);
        //     delete (controlProps as any).children;
        //     if (i == 0) {
        //         commonFlatProps = controlProps
        //     }
        //     else {
        //         let obj = {}
        //         for (let key in commonFlatProps) {
        //             if (commonFlatProps[key] == controlProps[key])
        //                 obj[key] = controlProps[key]
        //         }
        //         commonFlatProps = obj
        //     }
        // }


        // let editors: PropertyEditor[] = []
        // for (let i = 0; i < commonPropEditorInfos.length; i++) {
        //     let propEditorInfo = commonPropEditorInfos[i];
        //     let propName = propEditorInfo.propName;;
        //     let editorType = propEditorInfo.editorType;
        //     let value = this.propValue(propName, commonFlatProps);
        //     if (value == null)
        //         value = propEditorInfo.defaultValue;


        //     let editorProps: PropEditorProps<any> = {
        //         value: value,
        //         editComponents: selectedComponents,
        //         updateComponentProp: (value) => {
        //             let componentProps = selectedComponents.map(o => ({
        //                 componentId: o.id, propName: propEditorInfo.propName, value
        //             }));

        //             if (this._validator == null) {
        //                 this._validateFields = commonPropEditorInfos.filter(o => o.validation != null)
        //                     .map(o => Object.assign(o.validation as any, { name: o.propName, rules: [] }));
        //                 this._validator = new FormValidator(this.element, ...this._validateFields);

        //             }

        //             if (this._validateFields.filter(o => o.name == propEditorInfo.propName).length > 0)
        //                 this._validator.checkElement(propEditorInfo.propName);

        //             designer.updateComponentProps(componentProps);
        //         }
        //     };

        //     let editor = React.createElement(editorType, editorProps);
        //     editors.push({ prop: propEditorInfo.propName, displayName: propEditorInfo.displayName, editor, group: propEditorInfo.group })
        // }

        // return editors
    }

    private propValue(propName: string, props: any) {
        if (!propName)
            throw errors.argumentNull("propName");

        if (!props)
            throw errors.argumentNull("props");

        let navPropsNames: string[] = propName.split(".");

        let obj: any = props;
        for (let i = 0; i < navPropsNames.length; i++) {
            obj = obj[navPropsNames[i]];
            if (obj == null)
                return null;
        }

        return obj;
    }

    render() {

        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()
                let editors = EditorPanel.getEditors(args.designer)
                return <EditPanelContext.Provider value={{ editors }}>
                    <div className={`${classNames.editorPanel} ${this.props.className || ""}`}
                        ref={(e: any) => this.element = e || this.element}>
                        {editors.length == 0 ? <div className={classNames.empty}>{strings.emptyEditorPanel}</div> : this.props.children}
                    </div>
                </EditPanelContext.Provider>
            }}
        </DesignerContext.Consumer>
    }
}