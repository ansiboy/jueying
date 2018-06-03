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
        let { label } = this.state;
        return <DesignerContext.Consumer>
            {c => <div className="form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
                <label>名称</label>
                <div className="control">
                    <input className="form-control" value={label || ''}
                        onChange={(e) => {
                            label = (e.target as HTMLInputElement).value;
                            this.setState({ label });

                        }} />
                </div>
            </div>}
        </DesignerContext.Consumer>
    }
}