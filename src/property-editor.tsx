import * as React from "react";
import { PropEditorInfo, Component } from "./component";
import { PropEditorProps } from "./prop-editor";
import { Errors } from "./errors";
import { ComponentData } from "maishu-jueying-core";
import { DesignerContext, PageDesigner } from "./page-designer";
import { groupDisplayNames } from "./common";
import { FormValidator, ValidateField } from "maishu-dilu";


export interface EditorProps extends React.Props<PropertyEditor> {
    empty: string | JSX.Element,
    customRender?: (editComponents: ComponentData[], items: PropertyEditorInfo[]) => JSX.Element
}

interface EditorState {
}

export interface PropertyEditorInfo {
    group: GroupedEditor["group"]
    prop: string
    displayName: string
    editor: React.ReactElement<any>
}

export type GroupedEditor = {
    /** 用于对编辑器进行分组，方便查看各个属性 */
    group: string,
    prop: string,
    displayName: string,
    editor: React.ReactElement<any>,
};
export let defaultGroupName = "";


export class PropertyEditor extends React.Component<EditorProps, EditorState>{

    private _element: HTMLElement;
    private _validator: FormValidator;
    private _validateFields: ValidateField[];

    constructor(props: EditorProps) {
        super(props);

        this.state = {};
    }

    private getEditors(designer: PageDesigner): GroupedEditor[] {
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
                        let propName1 = propInfo1.propName; //propInfo1.propNames.join('.')
                        let propName2 = propInfo2.propName;//propInfo2.propNames.join('.')
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


        let editors: GroupedEditor[] = []
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
                            .map(o => Object.assign(o.validation, { name: o.propName }));
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
            throw Errors.argumentNull("propName");

        if (!props)
            throw Errors.argumentNull("props");

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

                let designer = args.designer;
                if (designer == null)
                    return null;

                let editors = this.getEditors(designer);
                if (editors.length == 0) {
                    let empty = this.props.empty;
                    return <div className="text-center">{empty}</div>;
                }

                if (this.props.customRender) {
                    let items = editors.map(o => Object.assign({ displayName: o.displayName }, o));
                    let r = this.props.customRender(designer.selectedComponents, items);
                    if (r != null) {
                        return <div ref={e => this._element = e || this._element}>
                            {r}
                        </div>;
                    }
                }

                let groupEditorsArray: { group: GroupedEditor["group"], editors: { prop: string, displayName: string, editor: React.ReactElement<any> }[] }[] = []
                for (let i = 0; i < editors.length; i++) {
                    let group = editors[i].group || defaultGroupName;
                    let groupEditors = groupEditorsArray.filter(o => o.group == group)[0];
                    if (groupEditors == null) {
                        groupEditors = { group: editors[i].group, editors: [] };
                        groupEditorsArray.push(groupEditors);
                    }

                    groupEditors.editors.push({ prop: editors[i].prop, displayName: editors[i].displayName, editor: editors[i].editor });
                }


                return groupEditorsArray.map((g) =>
                    <div key={g.group} className="panel panel-default" ref={e => this._element = e || this._element}>
                        {g.group ? <div className="panel-heading">{groupDisplayNames[g.group] || g.group}</div> : null}
                        <div className="panel-body">
                            {g.editors.map((o, i) =>
                                <div key={o.prop} className="form-group clearfix">
                                    <label>{o.displayName}</label>
                                    <div className="control">
                                        <ErrorBoundary>
                                            {o.editor}
                                        </ErrorBoundary>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                )
            }}
        </DesignerContext.Consumer>
    }

    get element() {
        return this._element;
    }

    get validator() {
        return this._validator;
    }

}

PropertyEditor.contextType = DesignerContext;


export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error: Error, info: any) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
    }

    render() {
        let { error } = this.state || {} as this["state"];
        if (error) {
            return <div className="error">
                <div>{error.message}</div>
                <div>{error.stack}</div>
            </div>;
        }
        return this.props.children;
    }
}
