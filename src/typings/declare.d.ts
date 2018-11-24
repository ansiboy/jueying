interface DragData {
    available: any[]
    deltaX: number
    deltaY: number
    offsetX: number
    offsetY: number
    width: number
    height: number
    originalX: number
    originalY: number
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    // drag(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this

    drag(func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drag(event: string, func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drag(arg1: string | Function, func?: (ev?: JQuery.Event<TElement>, dd?: DragData, options?: object) => void): this;

    drop(func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drop(event: string, func: (ev?: JQuery.Event<TElement>, dd?: DragData) => void, options?: object): this;
    drop(arg1: string | Function, func?: (ev?: JQuery.Event<TElement>, dd?: DragData, options?: object) => void): this;
}
