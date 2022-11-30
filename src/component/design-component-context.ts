import { ComponentsConfig } from "../components-config";
import type { ComponentData } from "maishu-jueying-core";
import * as React from "react"

export type DesignComponentContextValue = {
    componentData: ComponentData
    componentConfig: ComponentsConfig[0]
};

export let DesignComponentContext = React.createContext<DesignComponentContextValue | null>(null)