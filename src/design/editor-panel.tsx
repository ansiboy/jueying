import { ComponentData } from "maishu-jueying-core";
import * as React from "react";
import { EditorProps } from "./property-editor";
import { classNames } from "../style";
import { errors } from "../errors";
import { PropEditorProps } from "./property-editor";
import { DesignerContext, PageDesigner } from "./page-designer";
import { Component, PropEditorInfo } from "../component";
import { FormValidator, ValidateField } from "maishu-dilu/out/formValidator";
import { EditPanelContext, PropertyEditor } from "./editor-panel-context";
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

    // /** 对输入进行验证 */
    // validateInputs() {
    //     return this.editor.validator.checkAsync();
    // }

    private getEditors(designer: PageDesigner): PropertyEditor[] {
        if (designer == null) {
            return []
        }

        // 各个控件相同的编辑器
        let commonPropEditorInfos: PropEditorInfo[] = []
        let selectedComponents = designer.selectedComponents;
        for (let i = 0; i < selectedComponents.length; i++) {
            let componentData = selectedComponents[i]
            let propEditorInfos = Component.getPropEditors(componentData)
            if (i == 0) {
                commonPropEditorInfos = propEditorInfos || []
            }
            else {
                let items: PropEditorInfo[] = []
                commonPropEditorInfos.forEach(propInfo1 => {
                    propEditorInfos.forEach(propInfo2 => {
                        let propName1 = propInfo1.propName;
                        let propName2 = propInfo2.propName;
                        if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                            items.push(propInfo1)
                        }
                    })
                })
                commonPropEditorInfos = items
            }
        }

        // 各个控件相同的属性值
        let commonFlatProps: { [navName: string]: any } = {};
        for (let i = 0; i < selectedComponents.length; i++) {
            let control = selectedComponents[i];
            let controlProps: { [key: string]: any } = Object.assign({}, control.props);
            delete (controlProps as any).children;
            if (i == 0) {
                commonFlatProps = controlProps
            }
            else {
                let obj = {}
                for (let key in commonFlatProps) {
                    if (commonFlatProps[key] == controlProps[key])
                        obj[key] = controlProps[key]
                }
                commonFlatProps = obj
            }
        }


        let editors: PropertyEditor[] = []
        for (let i = 0; i < commonPropEditorInfos.length; i++) {
            let propEditorInfo = commonPropEditorInfos[i];
            let propName = propEditorInfo.propName;;
            let editorType = propEditorInfo.editorType;
            let value = this.propValue(propName, commonFlatProps);
            if (value == null)
                value = propEditorInfo.defaultValue;


            let editorProps: PropEditorProps<any> = {
                value: value,
                editComponents: selectedComponents,
                updateComponentProp: (value) => {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.id, propName: propEditorInfo.propName, value
                    }));

                    if (this._validator == null) {
                        this._validateFields = commonPropEditorInfos.filter(o => o.validation != null)
                            .map(o => Object.assign(o.validation as any, { name: o.propName, rules: [] }));
                        this._validator = new FormValidator(this.element, ...this._validateFields);

                    }

                    if (this._validateFields.filter(o => o.name == propEditorInfo.propName).length > 0)
                        this._validator.checkElement(propEditorInfo.propName);

                    designer.updateComponentProps(componentProps);

                }
            };
            let editor = React.createElement(editorType, editorProps);
            editors.push({ prop: propEditorInfo.propName, displayName: propEditorInfo.displayName, editor, group: propEditorInfo.group })
        }

        return editors
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

                let editors = this.getEditors(args.designer)
                return <EditPanelContext.Provider value={{ editors }}>
                    <div className={`${classNames.editorPanel} ${this.props.className || ""}`}
                        ref={(e: any) => this.element = e || this.element}>
                        {this.props.children}
                    </div>
                </EditPanelContext.Provider>
            }}
        </DesignerContext.Consumer>
    }
}