import * as React from "react";

export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
        debugger
    }

    render() {
        let { error } = this.state || {} as this["state"];
        if (error) {
            // You can render any custom fallback UI
            return <div className="error">
                <div>{error.message}</div>
                <div>{error.stack}</div>
            </div>;
        }
        return this.props.children;
    }
}