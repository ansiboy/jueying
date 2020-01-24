import * as React from "react";
export declare class ErrorBoundary extends React.Component<{}, {
    error?: Error;
}> {
    constructor(props: any);
    componentDidCatch(error: any, info: any): void;
    render(): {};
}
