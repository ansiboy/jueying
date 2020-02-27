/// <reference types="jquery" />
interface DragData {
    available: any[];
    deltaX: number;
    deltaY: number;
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
    originalX: number;
    originalY: number;
    drop: HTMLElement[];
    drap: HTMLElement;
}
interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    drag(func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drag(event: "init" | "start" | "end", func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drag(arg1: string | Function, func?: (ev?: JQuery.Event<TElement>, dd?: DragData, options?: object) => void): this;
    drop(func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drop(event: "init" | "start" | "end", func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drop(arg1: string | Function, func?: (ev?: JQuery.Event<TElement>, dd?: DragData, options?: object) => void): this;
}
declare let define: Function;
