/// <reference path="../../../out/index.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput } = jueying


class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div style={{ width: 280 }}
            ref={e => {
                if (!e) return
                e.onclick = (ev) => {
                    ev.cancelBubble = true
                }
            }}>
            <div className="form-group">
                <input className="form-control" placeholder="请输入用户名" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="请输密码" />
            </div>
            <div className="form-group">
                <button className="btn btn-block btn-primary">登录</button>
            </div>
        </div>
    }
}

Component.register('Login', Login, { movable: true })

let components = [
    {
        componentData: {
            type: 'Login'
        },
        displayName: "登录",
        icon: "glyphicon glyphicon-tag",
        introduce: "用户登录控件",
    }
]

// Component.setPropEditor('label', 'text', TextInput)
// Component.setPropEditor('label', 'style.position', TextInput)
// Component.setPropEditor('div', 'text', TextInput)
// Component.setPropEditor('div', 'style.position', TextInput)

let container = document.getElementById('container')

class MainPage extends React.Component {
    designer;
    editorPanel;
    componentPanel;

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.componentPanel.setComponets(components)
        this.editorPanel.designer = this.designer
    }
    render() {
        return <React.Fragment>
            <ComponentPanel ref={e => this.componentPanel = e || this.componentPanel} />
            <div style={{ display: 'table' }}>
                <PageDesigner ref={e => this.designer = e || this.designer}
                    pageData={{
                        type: "div",
                        props: {
                            style: { position: 'absolute', width: 400, height: 400 },
                            attr: { movable: false, resize: false }
                        }
                    }} />
                <EditorPanel ref={e => this.editorPanel = e || this.editorPanel} />
            </div>
        </React.Fragment >
    }
}

ReactDOM.render(<MainPage />, container)