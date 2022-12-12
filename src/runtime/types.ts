export interface ComponentData {
    /** 
     * 组件类型名称
     * 自定义组件必须为驼峰规则（例如：ComponentPlaceHolder）
     * HTML 组件必须全小写（例如：div, span） 
     * */
    type: string;
    /** 组件属性 */
    props: any;
    id: string;
    parentId?: string;
    name?: string;
    status?: ComponentStatus,
    children?: (ComponentData | string)[]
}

export enum ComponentStatus {
    default = 0,
    /** 已选中 */
    selected = 1,
    /** 禁用 */
    disabled = 2,
    /** 不允许删除 */
    asset = 4,
}

export type PageData = { id: string, children: ComponentData[] };


export type ElementFactory = (type: React.ComponentClass<any> | React.FunctionComponent | string, props: any,
    children: (string | React.ReactElement<any, string | React.JSXElementConstructor<any>>)[]) => React.ReactElement;//typeof React.createElement;

export type ComponentTypes = { [key: string]: React.ComponentClass<any> | React.FunctionComponent | string };