namespace jueying {
    export interface Document {
        name?: string,
        createDateTime?: Date,
        version?: number,
        /**
         * 页面的类型，默认为 page
         * snapshoot 为页面快照
         * productTemplate 为商品模板
         * page 为普通页面
         * system 为系统页面
         */
        type?: 'snapshoot' | 'productTemplate' | 'page' | 'system',
        data: ElementData
    }

    export interface ElementData {
        type: string;
        props: any;
        children?: ElementData[],
    }

    export interface ComponentDefine {
        name: string, displayName: string, icon: string, introduce: string,
        target?: 'view' | 'footer' | 'header',
        visible?: boolean,
        controlPath: string,
        editorPath: string,
    }
}