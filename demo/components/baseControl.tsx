import { Control } from "pdesigner";

export interface BaseControlProps<T> extends React.Props<T> {
    name?: string,
}

export abstract class BaseControl<P extends BaseControlProps<any>, S> extends Control<P, S> {
    persistentMembers: (keyof S)[];

    constructor(props) {
        super(props);
    }
}