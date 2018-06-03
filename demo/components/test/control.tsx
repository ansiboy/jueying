import * as React from 'react';
import { Control, ControlProps, PageDesigner, guid } from 'pdesigner';

interface State {
}

export interface Props extends React.Props<TestControl> {
    label: string,
}

export default class TestControl extends Control<Props, State> {
    persistentMembers: never[];
    element: HTMLElement;
    constructor(props) {
        super(props);

        this.hasCSS = true;
    }

    static defaultProps: Props = ({ label: '未命名' });

    render(h?: any) {
        let { label } = this.props;
        return <div {...Control.htmlDOMProps(this.props)} className="test-control form-group" ref={(e: HTMLElement) => this.element = e || this.element}>
            <label>{label}</label>
            <div className="control">
                <input className="form-control" />
            </div>
        </div>
    }
}

Control.register(TestControl);