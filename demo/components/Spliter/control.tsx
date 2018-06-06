import { Control, ControlProps } from "pdesigner";
import * as React from 'react';

export interface Props extends ControlProps<Spliter> {
}
export default class Spliter extends Control<Props, {}> {
    render() {
        let props = {
            tabIndex: Control.tabIndex++, style: { margin: '20px 0 20px 0' }
        }
        let child = <React.Fragment>
            <div className="spliter" style={{ width: '100%', height: '2px' }} />
        </React.Fragment>;
        return this.Element(props, child);
    }
}