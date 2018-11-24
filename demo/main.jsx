const { ComponentPanel, EditorPanel, PageDesigner, Component, TextInput } = require('../out/index')
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

let container = document.getElementById('container')

class MainPage extends React.Component {
    /** @type {PageDesigner} */
    designer;
    /** @type {EditorPanel} */
    editorPanel;
    /** @type {ComponentPanel} */
    componentPanel;

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.componentPanel.setComponets(components)
        this.editorPanel.designer = this.designer
    }
    render() {
        return <>
            <ComponentPanel ref={e => this.componentPanel = e || this.componentPanel} />
            <PageDesigner pageData={{ type: "div", props: { style: { position: 'absolute', width: '400px', height: '400px' } } }} ref={e => this.designer = e || this.designer} />
            <EditorPanel ref={e => this.editorPanel = e || this.editorPanel} />
        </>
    }
}

ReactDOM.render(<MainPage />, container)
