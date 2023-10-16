export interface ComponentProps {
    ref?: any,
    key?: string,
    /** 组件的编号，在页面中唯一 */
    id: string;
    /** 组件的名称，在页面中唯一 */
    name?: string;
    children?: React.ReactNode;
    dataSource?: any[] | string;
}

export interface ComponentData<T extends ComponentProps = ComponentProps> {
    /** 
     * 组件类型名称
     * 自定义组件必须为驼峰规则（例如：ComponentPlaceHolder）
     * HTML 组件必须全小写（例如：div, span） 
     * */
    type: string;
    /** 组件属性 */
    props: { [key: string]: any };
    id: string;
    // parentId?: string;
    // name?: string;
    status?: ComponentStatus,
    children: ComponentData[]
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

export type PageData = ComponentData & {
    /** 组件子元素 */
    // componentChildren: { [key: string]: ComponentData[] }
};//Omit<ComponentData, "children"> & { children: ComponentData[] };//{ id: string, children: ComponentData[] };

export type ComponentClass = (React.ComponentClass<any> | React.FunctionComponent<any>) & { typeName: string };
export type ElementFactory = (type: ComponentClass | string, props: any,
    children: (string | React.ReactElement<any, string | React.JSXElementConstructor<any>>)[]) => React.ReactElement;//typeof React.createElement;

export type ComponentTypes = { [key: string]: ComponentClass | string };