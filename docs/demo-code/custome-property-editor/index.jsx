/// <reference path="../../../out/jueying.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, PropEditor } = jueying


class Button extends React.Component {
    static defaultTheme = 'primary'
    constructor(props) {
        super(props)
    }
    render() {
        let theme = this.props.theme || Button.defaultTheme
        return <button className={`btn btn-${theme}`} style={{ width: 120 }}>
            BUTTON
        </button>
    }
}

Component.register('Button', Button, { movable: true, showHandler: true })

class ThemeSelector extends PropEditor {
    selectTheme(value) {
        this.props.onChange(value)
    }
    render() {
        let { value } = this.state
        value = value || Button.defaultTheme
        let themes = ['primary', 'success', 'info', 'warning', 'danger']
        return <div>
            {themes.map(t =>
                <span key={t} className={`label label-${t}`} style={{ border: value == t ? '1px solid' : null }}
                    onClick={(e) => {
                        e.cancelable = true
                        this.selectTheme(t)
                    }}>{t}</span>
            )}
        </div>
    }
}

Component.setPropEditor('Button', 'theme', ThemeSelector)


let components = [
    {
        componentData: {
            type: 'Button'
        },
        displayName: "按钮",
        icon: "glyphicon glyphicon-tag"
    }
]

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