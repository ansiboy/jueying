import { PageDesigner } from "./page-designer";
import { ComponentData } from "./models";
export interface Context {
    designer?: PageDesigner;
}
export declare abstract class ComponentFactory {
    renderDesignTimeComponent<C extends Context>(compentData: ComponentData, element: HTMLElement, context?: C): void;
    abstract renderComponent(compentData: ComponentData, element: HTMLElement, context?: any): void;
}
