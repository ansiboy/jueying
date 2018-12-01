/// <reference path="../../../out/jueying.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput, PropEditor, PlaceHolder } = jueying


class Container extends React.Component {
    static defaultTheme = 'primary'
    constructor(props) {
        super(props)
    }
    render() {
        let theme = this.props.theme || Container.defaultTheme
        return <div style={{}}>
            <div>This is a container</div>
            <PlaceHolder id={`${this.props.id}-placeholder`} />
        </div>
    }
}

Component.register('Container', Container, { movable: true, showHandler: true, resize: true })

class ThemeSelector extends PropEditor {
    selectTheme(value) {
        this.props.onChange(value)
    }
    render() {
        let { value } = this.state
        value = value || Container.defaultTheme
        let themes = ['primary', 'success', 'info', 'warning', 'danger']
        return <div>
            {themes.map(t =>
                <span key={t} className={`label label-${t}`} style={{ border: value == t ? '1px solid' : null }}
                    onClick={() => this.selectTheme(t)}>{t}</span>
            )}
        </div>
    }
}

Component.setPropEditor('Button', 'theme', ThemeSelector)


let components = [
    {
        componentData: {
            type: 'label'
        },
        displayName: "标签",
        icon: "glyphicon glyphicon-tag",
        introduce: "标签",
    },
    {
        componentData: {
            type: 'div'
        },
        displayName: "DIV",
        icon: "glyphicon glyphicon-book",
        introduce: "DIV",
    },
    {
        componentData: {
            type: 'Container'
        },
        displayName: "Container",
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
                        type: 'MasterPage',
                        props: {
                            style: { position: 'absolute' }
                        },
                        children: [
                            {
                                type: "div",
                                props: {
                                    style: { position: 'absolute', width: 400, height: 400 },
                                    attr: { movable: false, resize: false },
                                    text: ' '
                                }
                            }
                        ]

                    }} />
                <EditorPanel ref={e => this.editorPanel = e || this.editorPanel} />
            </div>
        </React.Fragment >
    }
}

ReactDOM.render(<MainPage />, container)