import { PageData } from 'maishu-jueying-core';
import { PageDesigner, ComponentDiagram, ComponentPanel } from "maishu-jueying/out"
import { componentsConfig } from "./components-config"
import "maishu-jueying/out/style"

function App() {

  let ids = {
    image1: "image1",
    div1: "div1",
    div2: "div2",
    button: "button"
  }

  let hello = "hello"
  let word = "word"
  let pageData1: PageData = {
    id: "simple",
    children: [
      { id: ids.div1, type: "div", props: {}, children: [hello] },
      { id: ids.div2, type: "div", props: {}, children: [word] },
      { id: ids.button, type: "Button", props: { clickedText: "Hello World" }, children: [word] }
    ]
  }

  return <div className='container'>
    <PageDesigner pageData={pageData1} componentsConfig={componentsConfig}>
      <ComponentPanel />
      <ComponentDiagram />
    </PageDesigner>
  </div>
}

export default App;

