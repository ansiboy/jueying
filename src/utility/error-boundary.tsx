import React from "react";

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error?: Error }> {
    constructor(props: ErrorBoundary["props"]) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error: Error, info: any) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
    }

    render() {
        let { error } = this.state || {} as this["state"];
        if (error) {
            return <div className="error">
                <div>{error.message}</div>
                <div>{error.stack}</div>
            </div>;
        }
        return this.props.children;
    }
}