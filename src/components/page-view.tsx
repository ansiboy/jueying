// import React = require("react")
// import { ComponentData } from "maishu-jueying-core"
// import { Errors } from "./errors";
// import { Component } from "../component";
// import { ComponentTypes } from "./common";

// export class PageView extends React.Component<{ pageData: ComponentData }, {}> {
//     constructor(props: PageView["props"]) {
//         super(props)

//         if (!this.props.pageData)
//             throw Errors.propCanntNull(PageView.name, 'pageData')
//     }
//     render() {
//         let element = Component.createElement(this.props.pageData)
//         return element
//     }
// }

// Component.register(ComponentTypes.PageView, PageView);