import * as React from "react"
import { ComponentPlaceHolder } from "maishu-jueying/out/runtime"
import "./columns.scss"

export default class Columns extends React.Component {
    render(): React.ReactNode {
        return <div>
            <div>多列</div>
            <div className="columns">
                <ComponentPlaceHolder id="columns-first">
                </ComponentPlaceHolder>
                <ComponentPlaceHolder id="columns-second">
                </ComponentPlaceHolder>
            </div>
        </div>
    }
}