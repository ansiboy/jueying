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
    designer: PageDesigner | null;
}
export declare class PropertyEditor extends React.Component<EditorProps, EditorState> {
    private _element;
    constructor(props: EditorProps);
    static getDerivedStateFromProps(props: EditorProps, state: EditorState): Partial<EditorState>;
    private getEditors;
    private propValue;
    private flatProps;
    componentDidCatch(error: any, info: any): void;
    render(): JSX.Element;
    readonly element: HTMLElement;
}
export {};
