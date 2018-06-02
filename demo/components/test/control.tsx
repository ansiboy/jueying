import * as React from 'react';
import { Control, ControlProps, PageDesigner, guid } from 'pdesigner';

interface State {
}

export interface Props extends React.Props<TestControl> {
    text: string
}

export default class TestControl extends Control<Props, State> {
    persistentMembers: never[];
    element: HTMLElement;
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }
 
    static defaultProps: Props = ({ text: 'HelloWorld' });

    render(h?: any) {
        let { text } = this.props;
        return <div ref={(e: HTMLElement) => this.element = e || this.element}>
            {text}
        </div>
    }
}

Control.register(TestControl);