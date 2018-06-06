import * as React from 'react';
import { Control, ControlProps, PageDesigner, guid, ControlFactory } from 'pdesigner';
import { BaseControlProps } from '../baseControl';

interface State {
}

export interface Props extends BaseControlProps<ValueInput> {
    dataField: string,
    className: string
}

export default class ValueInput extends Control<Props, State> {
    constructor(props) {
        super(props);

        this.hasCSS = true;
    }

    static defaultProps: Props = ({ dataField: '未命名', className: 'test-control form-group' });

    render(h?: any) {
        let { dataField } = this.props;
        let c = <React.Fragment>
            <label>{dataField}</label>
            <div className="control">
                <input className="form-control" />
            </div>
        </React.Fragment>
        return this.Element('div', {}, c);
    }
}

