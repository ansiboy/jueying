import * as  React from "react";
import { ComponentProps } from "maishu-jueying-core";
import { Component } from "../component";

export const MasterPageName = 'MasterPage'
type MasterPageContextValue = { master: MasterPage | null };
export const MasterPageContext = React.createContext<MasterPageContextValue>({ master: null });

export class MasterPage extends React.Component<ComponentProps> {

    childComponents: { [key: string]: React.Component[] } = {};

    constructor(props: ComponentProps) {
        super(props)

        // let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
        this.state = {  };
    }
    
    // private static children(props: ComponentProps): React.ReactElement<ComponentProps<any>>[] {
    //     let arr = props.children == null ? [] :
    //         Array.isArray(props.children) ? props.children : [props.children];

    //     let children: React.ReactElement<ComponentProps<any>>[] = []
    //     arr.forEach(o => {
    //         if (!React.isValidElement(o))
    //             return

    //         children.push(o as React.ReactElement<ComponentProps<any>>)
    //     })

    //     return children
    // }

    // static getDerivedStateFromProps(props: ComponentProps) {
    //     let children: React.ReactElement<ComponentProps<any>>[] = MasterPage.children(props)
    //     return { children } as MasterPage["state"];
    // }

    render() {
        // let props = {} as any
        // for (let key in this.props) {
        //     if (key == 'ref' || key == 'id')
        //         continue

        //     props[key] = this.props[key]
        // }

        // props.style = Object.assign({ minHeight: 40 }, props.style)
        // let children = this.state.children.filter(o => o.props.parentId == null);
        let master = this;
        console.assert(master != null);
        let children = this.props.children;
        return <MasterPageContext.Provider value={{ master }}>
            {children}
        </MasterPageContext.Provider>
    }
}
Component.register(MasterPageName, MasterPage, { container: false })