// import { ComponentProps } from "react";

import { ComponentProps } from "./component";

export interface ComponentData {
    type: string;
    props?: ComponentProps<any>;
    children?: ComponentData[],
}

export interface ComponentDefine {
    componentData: ComponentData,
    displayName: string, icon: string, introduce: string,
}
