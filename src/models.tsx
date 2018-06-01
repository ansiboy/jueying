namespace pdesigner {
    export interface PageData {
        id?: string,
        name?: string,
        remark?: string,
        isDefault?: boolean,
        showMenu?: boolean,
        className?: string,
        createDateTime?: Date,
        version?: number,
        templateId?: string,
        /**
         * 页面的类型，默认为 page
         * snapshoot 为页面快照
         * productTemplate 为商品模板
         * page 为普通页面
         * system 为系统页面
         */
        type?: 'snapshoot' | 'productTemplate' | 'page' | 'system',
        controls: ControlData[]
    }

    export interface ControlData {
        id: string, name: string, data?: any
        selected?: boolean | 'disabled',
        position: 'header' | 'view' | 'footer',
        /**
         * 是否保存到数据库，默认保存，true 保存，false 不保存
         */
        save?: boolean,
    }

    export interface ComponentDefine {
        name: string, displayName: string, icon: string, introduce: string,
        target?: 'view' | 'footer' | 'header',
        visible?: boolean,
        controlPath: string,
        editorPath: string,
    }
}