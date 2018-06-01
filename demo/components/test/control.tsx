import * as React from 'react';
import { Control, ControlProps } from 'pdesigner';

interface State {
    text: string
}

interface Props extends ControlProps<TestControl> {
}

export default class TestControl extends Control<Props, State> {
    element: HTMLElement;
    get persistentMembers(): (keyof State)[] {
        return ['text']
    }
    render(h?: any) {
        let { text } = this.state;
        text = text || "FFFF"
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            {text}
        </div>
    }
}