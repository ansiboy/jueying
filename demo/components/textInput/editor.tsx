import { EditorProps, Editor, DesignerContext } from "pdesigner";
import { Props as ControlProps } from 'control';

interface State extends Partial<ControlProps> {

}

export default class TestEditor extends Editor<EditorProps, State> {
    element: HTMLElement;
    constructor(props) {
        super(props)
    }
    render() {
        let { label, name } = this.state;
        return <DesignerContext.Consumer>
            {c => [
                <div key={10} className="form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
                    <label>名称</label>
                    <div className="control">
                        <input className="form-control" value={name || ''}
                            onChange={(e) => {
                                name = (e.target as HTMLInputElement).value;
                                this.setState({ name });
                            }} />
                    </div>
                </div>,
                <div key={20} className="form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
                    <label>标签</label>
                    <div className="control">
                        <input className="form-control" value={label || ''}
                            onChange={(e) => {
                                label = (e.target as HTMLInputElement).value;
                                this.setState({ label });

                            }} />
                    </div>
                </div>
            ]}
        </DesignerContext.Consumer>
    }
}