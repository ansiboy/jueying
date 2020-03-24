/// <reference types="react" />
import { ComponentData } from "maishu-jueying-core";
export declare type ComponentFactory<Context = any> = (componentData: ComponentData, context?: Context) => JSX.Element;
