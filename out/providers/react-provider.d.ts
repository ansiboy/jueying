/// <reference types="react" />
import { ComponentFactory, Context } from "component-factory";
import { ComponentData, ReactComponentType } from "models";
import { PageDesigner } from "page-designer";
import { ComponentProps } from "jueying-core";
export declare class ReactComponentFacotry extends ComponentFactory {
    renderDesignTimeComponent(compentData: ComponentData, element: HTMLElement, context?: Context): void;
    renderComponent(compentData: ComponentData, element: HTMLElement, context?: any): void;
    protected createDesignTimeElement(type: ReactComponentType, props: ComponentProps<any>, designer: PageDesigner, ...children: any[]): JSX.Element;
}
