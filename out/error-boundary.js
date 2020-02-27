define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidCatch(error, info) {
            // Display fallback UI
            this.setState({ error });
            // You can also log the error to an error reporting service
            //   logErrorToMyService(error, info);
            debugger;
        }
        render() {
            let { error } = this.state || {};
            if (error) {
                // You can render any custom fallback UI
                return React.createElement("div", { className: "error" },
                    React.createElement("div", null, error.message),
                    React.createElement("div", null, error.stack));
            }
            return this.props.children;
        }
    }
    exports.ErrorBoundary = ErrorBoundary;
});
//# sourceMappingURL=error-boundary.js.map