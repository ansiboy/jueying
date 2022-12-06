import * as React from "react";

export function createDesignElement(type: any, props: any, ...children: any[]) {
    props = Object.assign({}, props || {});

    if (type != React.Fragment) {
        props = props || {};
        if (props.onClick) {
            delete props.onClick;
        }

        if (props.href) {
            delete props.href;
        }

        if (type.prototype?.isReactComponent) {
            let ref = props.ref as Function;
            if (props.ref == undefined) {
                delete props.ref;
            }
            props.ref = function (e: HTMLElement) {
                if (e != null && e.onclick != null) {
                    e.onclick = function () {
                        console.warn("onclick event is disabled.")
                    }
                }

                if (ref != null)
                    ref.apply(this, [e]);
            }
        }

    }


    return React.createElement(type, props, ...children);

}