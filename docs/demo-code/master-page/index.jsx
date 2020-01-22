/// <reference path="../../../out/index.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput, PropEditor, PlaceHolder } = jueying

console.assert(PlaceHolder != null);

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
            <PlaceHolder id={this.props.id + '-inputs'}>

            </PlaceHolder>
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
            type: 'div',
            props: {
                key: guid(),
                className: 'form-group'
            },
            children: [
                {
                    type: 'input',
                    props: {
                        className: 'form-control',
                    }
                }
            ]
        },
        displayName: "输入框",
        icon: "glyphicon glyphicon-tag",
        introduce: "输入框",
    }
]


class MainPage extends React.Component {
    designer;
    componentPanel;

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.componentPanel.setComponets(components)
    }
    render() {
        return <React.Fragment>
            <ComponentPanel ref={e => this.componentPanel = e || this.componentPanel} />
            <div style={{ display: 'table' }}>
                <PageDesigner ref={e => this.designer = e || this.designer}
                    pageData={{
                        type: 'MasterPage',
                        props: {
                            style: { position: 'absolute' }
                        },
                        children: [
                            {
                                type: "Login",
                                props: {
                                    style: { position: 'absolute', width: 400, height: 400 },
                                    attr: { movable: false, resize: false },
                                    text: ' '
                                }
                            }
                        ]

                    }} />
            </div>
        </React.Fragment >
    }
}

ReactDOM.render(<MainPage />, container);

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}