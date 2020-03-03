import * as React from "react";
import { ComponentDefine, ComponentData } from "./models";
import { ComponentDataHandler } from "./component-data-handler";
interface ComponentProps extends React.Props<ComponentPanel> {
    style?: React.CSSProperties;
    className?: string;
    empty?: string | JSX.Element;
    designer: ComponentDataHandler;
}
interface ComponentToolbarState {
    componets: ComponentDefine[];
}
export declare class ComponentPanel extends React.Component<ComponentProps, ComponentToolbarState> {
    designer: ComponentDataHandler;
    static componentIndexName: string;
    private toolbarElement;
    constructor(props: ComponentProps);
    readonly element: HTMLElement;
    private componentDraggable;
    setComponets(componets: ComponentDefine[]): void;
    static getComponentData(dataTransfer: DataTransfer): ComponentData;
    /** 获取光标在图标内的位置 */
    static mouseInnerPosition(dataTransfer: DataTransfer): {
        x: number;
        y: number;
    };
    render(): JSX.Element;
}
export {};
