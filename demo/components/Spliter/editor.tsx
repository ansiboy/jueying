import { Editor, EditorProps } from "pdesigner";
import { Props as ControlProps } from 'control';

interface State extends Partial<ControlProps> {

}
export default class SpliterEditor extends Editor<EditorProps, State> {
    render() {
        let { name } = this.state;
        return this.Element(
            <div className="form-group">
                <label>名称</label>
                <div className="control">
                    <input className="form-control" value={name || ''}
                        onChange={(e) => {
                            name = (e.target as HTMLInputElement).value;
                            this.setState({ name });
                        }} />
                </div>
            </div>
        )
    }
}