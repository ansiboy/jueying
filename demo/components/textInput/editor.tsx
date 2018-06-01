import { Editor, EditorProps } from 'pdesigner';

interface Props extends EditorProps {

}

interface State {

}

export default class TextInputEditor extends Editor<Props, State> {
    element: HTMLElement;
    render() {
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
        </div>
    }
}