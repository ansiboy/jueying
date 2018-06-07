import { Control, ControlProps } from "pdesigner";
import * as React from 'react';

export interface Props extends ControlProps<Spliter> {
}
export default class Spliter extends Control<Props, {}> {
    render() {
        let props = {
            tabIndex: Control.tabIndex++, style: { padding: '12px 0 12px 0' }
        }
        let child = <React.Fragment>
            <hr className="spliter" style={{ width: '100%', height: '2px', margin: 0 }} />
        </React.Fragment>;
        return this.Element(props, child);
    }
}