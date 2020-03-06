/// <reference types="react" />
import { ComponentFactory, Context } from "component-factory";
import { ComponentData, ReactComponentType } from "models";
import { ComponentProps } from "maishu-jueying-core";
import { ComponentDataHandler } from "component-data-handler";
export declare class ReactComponentFacotry extends ComponentFactory {
    renderDesignTimeComponent(compentData: ComponentData, element: HTMLElement, context?: Context): void;
    renderRunTimeComponent(compentData: ComponentData, element: HTMLElement, context?: any): void;
    protected createDesignTimeElement(type: ReactComponentType, props: ComponentProps<any>, handler: ComponentDataHandler, ...children: any[]): JSX.Element;
}
