import { Control, EditorProps, Editor, ControlProps } from "pdesigner";
import * as React from 'react';

export interface BaseControlProps<T> extends React.Props<T> {
    name?: string,
}

export abstract class BaseControl<P extends BaseControlProps<any>, S> extends Control<P, S> {
    constructor(props) {
        super(props);
    }
}

export abstract class ControlBaseEditor<T extends ControlProps<any>> extends Editor<EditorProps, Partial<T>> {
    constructor(props) {
        super(props)
    }

    abstract renderControlProps(): JSX.Element;
    render() {
        let { name, style, className } = this.state;
        style = style || {};
        let { left, top, width, height } = style;
        return this.Element(<React.Fragment>
            <div className="form-group">
                <label>名称</label>
                <div className="control">
                    <input className="form-control" value={name || ''}
                        onChange={(e) => {
                            name = (e.target as HTMLInputElement).value;
                            this.setState({ name });
                        }} />
                </div>
            </div>
            {/* <div className="form-group">
                <label>类名</label>
                <div className="control">
                    <input className="form-control" value={className || ''}
                        onChange={(e) => {
                            className = (e.target as HTMLInputElement).value;
                            this.setState({ className });
                        }} />
                </div>
            </div> */}
            <div className="form-group">
                <label>左边</label>
                <div className="control">
                    <input className="form-control" value={left == null ? '' : left}
                        onChange={(e) => {
                            style.left = pareseNumber((e.target as HTMLInputElement).value);
                            this.setState({ style });
                        }} />
                </div>
            </div>
            <div className="form-group">
                <label>顶部</label>
                <div className="control">
                    <input className="form-control" value={top == null ? '' : top}
                        onChange={(e) => {
                            style.top =  pareseNumber((e.target as HTMLInputElement).value);
                            this.setState({ style });
                        }} />
                </div>
            </div>
            {/* <div className="form-group">
                <label>宽</label>
                <div className="control">
                    <input className="form-control" value={width == null ? '' : width}
                        onChange={(e) => {
                            style.width = Number.parseInt((e.target as HTMLInputElement).value);
                            this.setState({ style });
                        }} />
                </div>
            </div>
            <div className="form-group">
                <label>高</label>
                <div className="control">
                    <input className="form-control" value={height == null ? '' : height}
                        onChange={(e) => {
                            style.height = Number.parseInt((e.target as HTMLInputElement).value);
                            this.setState({ style });
                        }} />
                </div>
            </div> */}
            {this.renderControlProps()}
        </React.Fragment>)
    }
}

function pareseNumber(text: string) {
    let num = Number.parseInt(text);
    if (isNaN(num))
        num = null;

    return num;
}