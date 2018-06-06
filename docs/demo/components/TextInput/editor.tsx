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
        let { dataField } = this.state;
        return <DesignerContext.Consumer>
            {c => [
                <div key={10} className="form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
                    <label>字段</label>
                    <div className="control">
                        <input className="form-control" value={dataField || ''}
                            onChange={(e) => {
                                dataField = (e.target as HTMLInputElement).value;
                                this.setState({ dataField });
                            }} />
                    </div>
                </div>,

            ]}
        </DesignerContext.Consumer>
    }
}