
import { ComponentDataContext, PageDataMaintain, PageDataMaintainProps, PageDataMaintainState } from "./component-data-maintain";
import { ComponentContainer } from "maishu-jueying-core";

export type PageDesignerProps = PageDataMaintainProps;
export type PageDesignerState = PageDataMaintainState;
export class PageDesigner extends PageDataMaintain { }
export let DesignerContext = ComponentDataContext;