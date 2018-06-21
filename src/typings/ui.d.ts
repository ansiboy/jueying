declare namespace ui {
    type Callback = (event: MouseEvent) => Promise<any>;
    type Arguments = {
        confirm?: string | (() => string);
        toast?: string | HTMLElement;
    };
    function buttonOnClick(callback: Callback, args?: Arguments): (event: Event) => void;
    function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: Arguments): any;
    function showToastMessage(msg: string | HTMLElement): void;
}
declare namespace ui {
    let dialogConfig: {
        dialogContainer: HTMLElement;
    };
    /** 弹窗
     * @param element bootstrap 的 modal 元素
     */
    function showDialog(element: HTMLElement, callback?: (button: HTMLButtonElement) => void): void;
    function hideDialog(element: HTMLElement): Promise<{}>;
    function alert(args: string | {
        title: string;
        message: string;
    }): void;
    function confirm(args: {
        title?: string;
        message: string;
        cancle?: () => void;
        confirm: (event: Event) => Promise<any>;
        container?: HTMLElement;
    }): void;
    let showPanel: (args: {
        header?: (headerElement: HTMLElement) => void;
        body?: (bodyElement: HTMLElement) => void;
        footer?: (footerElement: HTMLElement) => void;
    }) => {
        hide: () => void;
    };
}
declare namespace ui {
    let errors: {
        argumentNull(paramName: string): Error;
    };
}
declare namespace ui {
    let loadImageConfig: {
        imageBaseUrl: string;
        imageDisaplyText: string;
    };
    type CanvasDraw = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => void;
    type DrawOption = {
        fontSize?: number;
        bgColor?: string;
        textColor?: string;
    };
    function generateImageBase64(width: number, height: number, text: string, options?: DrawOption): string;
    function generateImageBase64(width: number, height: number, draw: CanvasDraw): string;
    type LoadImageOptions = {
        imageSize?: {
            width: number;
            height: number;
        };
        loadImage?: () => Promise<string>;
        imageText?: string;
    };
    /**
     * 在 IMG 元素上渲染图片
     * @param element 要渲染的 IMG 元素
     * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
     */
    function renderImage(element: HTMLImageElement, options?: LoadImageOptions): Promise<string>;
    type ImageFileToBase64Result = {
        base64: string;
        width: number;
        height: number;
    };
    function imageFileToBase64(imageFile: File, size?: {
        width?: number;
        height?: number;
    }): Promise<ImageFileToBase64Result>;
    function fileToBase64(file: File): Promise<string>;
}
declare namespace ui {
    class Panel {
        private modalDialog;
        private _body;
        private _footer;
        private _header;
        private backdrop;
        private panel;
        private modal;
        constructor(element: HTMLElement);
        readonly header: HTMLElement;
        readonly body: HTMLElement;
        readonly footer: HTMLElement;
        build(element: HTMLElement): void;
        show(): void;
        hide(): void;
    }
}
