// import { DragDropData } from "models";

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    // drag(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this

    drag(func: (ev?: JQuery.Event, dd?: DragDropData) => void, options?: object): this;
    drag(event: "init" | "start" | "end", func: (ev?: JQuery.Event, dd?: DragDropData) => void, options?: object): this;
    drag(arg1: string | Function, func?: (ev?: JQuery.Event, dd?: DragDropData, options?: object) => void): this;

    drop(func: (ev?: JQuery.Event, dd?: DragDropData) => void, options?: object): this;
    drop(event: "init" | "start" | "end", func: (ev?: JQuery.Event, dd?: DragDropData) => void, options?: object): this;
    drop(arg1: string | Function, func?: (ev?: JQuery.Event, dd?: DragDropData, options?: object) => void): this;
}

// declare let define: Function;