import { Editor } from "pdesigner";
import * as React from 'react';
export default class PageViewEditor extends Editor<any, any> {
    render() {
        // return <div ref={(e: HTMLElement) => this.element = e || this.element}>
        //     PageView Editor
        // </div>
        return this.Element(<React.Fragment>
            PageView Editor
        </React.Fragment>);
    }
}