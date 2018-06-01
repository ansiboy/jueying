import { EditorProps, Editor } from "pdesigner";

export default class TestEditor extends Editor<EditorProps, any> {
    element: HTMLElement;

    render() {
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            TestEditor
        </div>
    }
}