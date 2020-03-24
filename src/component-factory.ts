// import { ComponentData } from "./models";
import { ComponentData } from "maishu-jueying-core";

export type ComponentFactory<Context = any> = (componentData: ComponentData, context?: Context) => JSX.Element;

