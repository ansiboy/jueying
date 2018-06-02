import { EditorProps, Editor, DesignerContext } from "pdesigner";
import { Props as ControlProps } from 'components/Test/control';

interface State extends Partial<ControlProps> {

}

export default class TestEditor extends Editor<EditorProps, State> {
    element: HTMLElement;
    constructor(props) {
        super(props)
    }
    render() {
        let { text } = this.state;
        return <DesignerContext.Consumer>
            {c => <div ref={(e: HTMLElement) => this.element = e || this.element}>
                <input value={text}
                    onChange={(e) => {
                        text = (e.target as HTMLInputElement).value;
                        this.setState({ text });
                    }} />
            </div>}
        </DesignerContext.Consumer>
    }
}