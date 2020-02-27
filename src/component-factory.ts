import { PageDesigner } from "./page-designer";
import { ComponentData } from "./models";

export interface Context {
    designer?: PageDesigner
}

export abstract class ComponentFactory {

    renderDesignTimeComponent<C extends Context>(compentData: ComponentData, element: HTMLElement, context?: C): void {
        this.renderComponent(compentData, element, context);
    }

    abstract renderComponent(compentData: ComponentData, element: HTMLElement, context?: any): void;
}