export declare let constants: {
    componentsDir: string;
    connectorElementClassName: string;
    componentTypeName: string;
    componentData: string;
    componentPosition: string;
};
export declare let proptDisplayNames: {
    [prop: string]: string;
};
export declare function guid(): string;
export declare class Callback<T> {
    private funcs;
    add(func: (args: T) => void): void;
    remove(func: (args: T) => any): void;
    fire(args: T): void;
    static create<T>(): Callback<T>;
}
