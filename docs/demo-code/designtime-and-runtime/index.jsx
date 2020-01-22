/// <reference path="../../../out/index.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput, PageBuilderContext, PageView } = jueying


class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <PageBuilderContext.Consumer>
            {args => {
                return <div style={{ width: 280 }}
                    ref={e => {
                        if (!e) return
                        e.onclick = (ev) => {
                            ev.cancelBubble = true
                        }
                    }}>
                    <div>{args.pageBuilder ? "设计时" : "运行时"}</div>
                    <div className="form-group">
                        <button className="btn btn-block btn-primary">登录</button>
                    </div>
                </div>
            }}
        </PageBuilderContext.Consumer>
    }
}

Component.register('Button', Button, { movable: true })

let components = [
    {
        componentData: {
            type: 'Button'
        },
        displayName: "按钮",
        icon: "glyphicon glyphicon-tag",
        introduce: "",
    }
]



let container = document.getElementById('container')

class MainPage extends React.Component {
    /** @@type {PageDesigner} */
    designer;
    editorPanel;
    componentPanel;

    constructor(props) {
        super(props)
        this.state = {
            pageData: {
                type: "div",
                props: {
                    style: { position: 'absolute', width: 400, height: 400 },
                    attr: { movable: false, resize: false }
                }
            }
        }
    }

    componentDidMount() {
        this.componentPanel.setComponets(components)
        this.designer.componentUpdated.add(() => {
            this.pageDataChanged(this.designer.pageData)
        })
        this.designer.componentAppend.add(() => {
            this.pageDataChanged(this.designer.pageData)
        })
        this.designer.componentRemoved.add(() => {
            this.pageDataChanged(this.designer.pageData);
        })
    }

    /** @param {jueying.ComponentData} pageData */
    pageDataChanged(pageData) {
        this.setState({ pageData })
    }
    render() {
        let pageData = this.state.pageData
        return <React.Fragment>
            <ComponentPanel ref={e => this.componentPanel = e || this.componentPanel} />
            <div style={{ display: 'table' }}>
                <PageDesigner ref={e => this.designer = e || this.designer}
                    pageData={pageData} />
                <PageView pageData={pageData}>

                </PageView>
            </div>
        </React.Fragment >
    }
}

ReactDOM.render(<MainPage />, container)