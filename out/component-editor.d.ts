/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
import React = require("react");
import { PageDesigner } from "./page-designer";
interface EditorProps extends React.Props<PropertyEditor> {
    designer: PageDesigner;
    empty: string | JSX.Element;
}
interface EditorState {
    editors: {
        group: string;
        prop: string;
        editor: React.ReactElement<any>;
    }[];
    designer?: PageDesigner;
}
export declare class PropertyEditor extends React.Component<EditorProps, EditorState> {
    private _element;
    constructor(props: EditorProps);
    componentWillReceiveProps(props: EditorProps): void;
    private getEditors;
    private flatProps;
    render(): JSX.Element;
    readonly element: HTMLElement;
}
export {};
