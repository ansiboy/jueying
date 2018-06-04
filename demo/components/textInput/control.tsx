import * as React from 'react';
import { Control, ControlProps, PageDesigner, guid } from 'pdesigner';
import { BaseControlProps } from '../baseControl';

interface State {
}

export interface Props extends BaseControlProps<ValueInput> {
    label: string,
    className: string
}

export default class ValueInput extends Control<Props, State> {
    persistentMembers: never[];
    element: HTMLElement;
    constructor(props) {
        super(props);

        this.hasCSS = true;
    }

    static defaultProps: Props = ({ label: '未命名', className: 'test-control form-group' });

    render(h?: any) {
        let { label } = this.props;
        return <div {...Control.htmlDOMProps(this.props)}
            ref={(e: HTMLElement) => this.element = e || this.element}>
            <label>{label}</label>
            <div className="control">
                <input className="form-control" />
            </div>
        </div>
    }
}

