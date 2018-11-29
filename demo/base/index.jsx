/// <reference path="../../out/jueying.d.ts"/>

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

Component.setPropEditor('label', 'text', TextInput, 'appearance')
Component.setPropEditor('label', 'style.position', TextInput, 'style')
Component.setPropEditor('div', 'style.position', TextInput, 'style')

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
            <PageDesigner pageData={{ type: "div", props: { style: { position: 'absolute', width: '400px', height: '400px' } } }} ref={e => this.designer = e || this.designer} />
            <EditorPanel ref={e => this.editorPanel = e || this.editorPanel} />
        </React.Fragment>
    }
}



ReactDOM.render(<MainPage />, container)