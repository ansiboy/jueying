/// <reference path="../../../out/jueying.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput } = jueying
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
]

Component.setPropEditor('label', 'text', TextInput)
Component.setPropEditor('label', 'style.position', TextInput)
Component.setPropEditor('div', 'text', TextInput)
Component.setPropEditor('div', 'style.position', TextInput)

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
<<<<<<< HEAD
                            style: { position: 'absolute', width: 400, height: 400 },
                            attr: { movable: false, resize: false }
=======
                            style: { position: 'absolute', width: 400, height: 400 }
>>>>>>> b0d30543ee66146c9e4e4a6c22046cfc0aa4eddc
                        }
                    }} />
                <EditorPanel ref={e => this.editorPanel = e || this.editorPanel} />
            </div>
        </React.Fragment >
    }
}

ReactDOM.render(<MainPage />, container)