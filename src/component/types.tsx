import * as React from "react";
import { ComponentData } from "../runtime"


export interface ComponentProps {
    ref?: any,
    key?: string,
    /** 组件的编号，在页面中唯一 */
    id: string;
    /** 组件的名称，在页面中唯一 */
    name?: string;
    children?: React.ReactNode
}



export { PageData, ComponentStatus, ComponentData, ComponentTypes, ElementFactory } from "../runtime";

export type ComponentFactory<Context = any> = (componentData: ComponentData, context?: Context) => JSX.Element;


type Item = Omit<ComponentData, "children"> & {
    id: string, parentId: string | null,
};
export type ComponentDataList = Item[];

// export type ChildComponentProps = { parentId: string };

