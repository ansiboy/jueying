import { Editor, EditorProps } from "pdesigner";
import { Props as ControlProps } from 'control';

interface State extends Partial<ControlProps> {

}


export default class TextHeaderEditor extends Editor<EditorProps, State> {
    element: HTMLElement;
    render() {
        let { size } = this.state;
        return <div ref={(e) => this.element = e || this.element}>
            <div key={20} className="form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
                <label>字体大小</label>
                <div className="control">
                    <select className="form-control" value={size}
                        onChange={(e) => {
                            size = Number.parseInt((e.target as HTMLSelectElement).value);
                            this.setState({ size });
                        }} >
                        <option value={1}>H1</option>
                        <option value={2}>H2</option>
                        <option value={3}>H3</option>
                        <option value={4}>H4</option>
                    </select>
                </div>
            </div>
        </div>
    }
}