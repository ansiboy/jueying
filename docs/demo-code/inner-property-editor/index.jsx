/// <reference path="../../../out/jueying.d.ts"/>

const { ComponentPanel, EditorPanel, PageDesigner, Component, PropEditor } = jueying
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

let positionDropDown = PropEditor.dropdown({ '': '默认', absolute: '绝对定位', fixed: '固定' })
let textInput = PropEditor.textInput()

Component.setPropEditor('label', 'text', textInput)
Component.setPropEditor('label', 'style.position', positionDropDown)
Component.setPropEditor('div', 'text', textInput)
Component.setPropEditor('div', 'style.position', positionDropDown)

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