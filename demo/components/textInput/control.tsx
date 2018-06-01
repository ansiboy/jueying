import { ControlProps, Control } from "pdesigner";

interface Props extends ControlProps<TextInputControl> {

}

interface State {

}

export default class TextInputControl extends Control<Props, State> {
    element: HTMLElement;
    persistentMembers: never[];

    render(h?) {
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            <label></label>
            <div>
                <input />
            </div>
        </div>
    }
}