/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/

namespace jueying {

    export interface EditorProps extends React.Props<ComponentEditor> {
        designer: PageDesigner
    }

    export interface EditorState {
        editors: { group: string, prop: string, editor: React.ReactElement<any> }[]
        designer?: PageDesigner
    }

    export class ComponentEditor extends React.Component<EditorProps, EditorState>{

        private _element: HTMLElement | null = null;

        constructor(props: EditorProps) {
            super(props);

            this.state = { editors: [] }
        }

        componentWillReceiveProps(props: EditorProps) {
            this.setState({
                designer: props.designer,
            })
        }

        private getEditors(designer: PageDesigner) {
            if (designer == null) {
                return []
            }

            // 各个控件相同的编辑器
            let commonPropEditorInfos: PropEditorInfo[] = []
            let componentDatas = designer.selectedComponents
            for (let i = 0; i < componentDatas.length; i++) {
                let control = componentDatas[i]
                let className = control.type
                let propEditorInfos = Component.getPropEditors(className)
                if (i == 0) {
                    commonPropEditorInfos = propEditorInfos || []
                }
                else {
                    let items: PropEditorInfo[] = []
                    commonPropEditorInfos.forEach(propInfo1 => {
                        propEditorInfos.forEach(propInfo2 => {
                            let propName1 = propInfo1.propNames.join('.')
                            let propName2 = propInfo2.propNames.join('.')
                            if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                                items.push(propInfo1)
                            }
                        })
                    })
                    commonPropEditorInfos = items
                }
            }

            // 各个控件相同的属性值
            let commonFlatProps: { [navName: string]: any }
            for (let i = 0; i < componentDatas.length; i++) {
                let control = componentDatas[i]
                let controlProps: { [key: string]: any } = Object.assign({}, control.props);
                delete (controlProps as any).children;
                controlProps = this.flatProps(controlProps)
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

            let editors: { group: string, prop: string, editor: React.ReactElement<any> }[] = []
            for (let i = 0; i < commonPropEditorInfos.length; i++) {
                let propEditorInfo = commonPropEditorInfos[i]
                let propName = propEditorInfo.propNames[propEditorInfo.propNames.length - 1]
                let editorType = propEditorInfo.editorType
                let propNames = propEditorInfo.propNames
                let editor = h(editorType, {
                    value: commonFlatProps[propNames.join('.')],
                    onChange: (value) => {
                        for (let i = 0; i < componentDatas.length; i++) {
                            let c = componentDatas[i]
                            console.assert(c.props.id)
                            designer.updateControlProps(c.props.id, propNames, value)
                        }
                    }
                })
                editors.push({ prop: propName, editor, group: propEditorInfo.group })
            }

            return editors
        }

        private flatProps(props: object, baseName?: string): { [key: string]: object } {
            baseName = baseName ? baseName + '.' : ''
            let obj = {}
            for (let key in props) {
                if (typeof props[key] != 'object') {
                    obj[baseName + key] = props[key]
                }
                else {
                    Object.assign(obj, this.flatProps(props[key], key))
                }
            }

            return obj
        }


        render() {
            let { designer } = this.state
            let editors = this.getEditors(designer) 
            if (editors.length == 0) {
                return <div className="text-center">暂无可用的属性</div>
            }

            let groupEditorsArray: { group: string, editors: { prop: string, editor: React.ReactElement<any> }[] }[] = [] 
            for (let i = 0; i < editors.length; i++) {
                let group = editors[i].group || ''
                let groupEditors = groupEditorsArray.filter(o => o.group == group)[0]
                if (groupEditors == null) {
                    groupEditors = { group: editors[i].group, editors: [] }
                    groupEditorsArray.push(groupEditors)
                }

                groupEditors.editors.push({ prop: editors[i].prop, editor: editors[i].editor })
            }

            return <React.Fragment>
                {groupEditorsArray.map((g) =>
                    <div key={g.group} className="panel panel-default">
                        {g.group ? <div className="panel-heading">{strings[g.group] || g.group}</div> : null}
                        <div className="panel-body">
                            {g.editors.map((o, i) =>
                                <div key={i} className="form-group">
                                    <label>{strings[o.prop] || o.prop}</label>
                                    <div className="control">
                                        {o.editor}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </React.Fragment>
        }

        get element() {
            return this._element;
        }

    }
}