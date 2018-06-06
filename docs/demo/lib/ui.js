var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ui;
(function (ui) {
    function buttonOnClick(arg1, arg2, arg3) {
        let element;
        let callback;
        let args;
        if (typeof (arg1) == 'function') {
            callback = arg1;
            args = arg2;
        }
        else if (typeof (arg2) == 'function') {
            element = arg1;
            callback = arg2;
            args = arg3;
        }
        else {
            throw new Error("Arguments error");
        }
        args = args || {};
        let execute = (event) => __awaiter(this, void 0, void 0, function* () {
            let button = event.currentTarget;
            button.setAttribute('disabled', '');
            try {
                yield callback(event);
                if (args.toast) {
                    showToastMessage(args.toast);
                }
            }
            catch (exc) {
                console.error(exc);
                throw exc;
            }
            finally {
                button.removeAttribute('disabled');
            }
        });
        let result = function (event) {
            event.stopPropagation();
            event.cancelBubble = true;
            if (!args.confirm) {
                execute(event);
                return;
            }
            let text = typeof args.confirm == 'string' ?
                args.confirm :
                args.confirm();
            ui.confirm({ message: text, confirm: (event) => execute(event) });
        };
        if (element)
            element.onclick = result;
        return result;
    }
    ui.buttonOnClick = buttonOnClick;
    function showToastMessage(msg) {
        if (!msg)
            throw new Error('Argument msg is null.');
        let dialogContainer = ui.dialogConfig.dialogContainer || document.body;
        let toastDialogElement = document.createElement('div');
        toastDialogElement.className = 'modal fade in';
        toastDialogElement.style.marginTop = '20px';
        console.assert(dialogContainer != null, 'dialog container is null.');
        dialogContainer.appendChild(toastDialogElement);
        toastDialogElement.innerHTML = `
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body form-horizontal">
                                </div>
                            </div>
                        </div>
                    `;
        let modalBody = toastDialogElement.querySelector('.modal-body');
        console.assert(modalBody != null);
        if (typeof msg == 'string')
            modalBody.innerHTML = `<h5>${msg}</h5>`;
        else
            modalBody.appendChild(msg);
        // let dialog = new Dialog(toastDialogElement);
        // dialog.show();
        ui.showDialog(toastDialogElement);
        setTimeout(() => {
            ui.hideDialog(toastDialogElement).then(() => {
                toastDialogElement.remove();
            });
        }, 500);
    }
    ui.showToastMessage = showToastMessage;
})(ui || (ui = {}));
var ui;
(function (ui) {
    function dialogContainer() {
        return ui.dialogConfig.dialogContainer || document.body;
    }
    ui.dialogConfig = {
        dialogContainer: null
    };
    function addClassName(element, className) {
        console.assert(className != null, 'class is null');
        let c1 = (element.className || '').split(/\s+/);
        let c2 = className.split(/\s+/);
        var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);
        c1.push(...itemsToAdd);
        element.className = c1.join(' ');
    }
    function removeClassName(element, className) {
        console.assert(className != null, 'class is null');
        let c1 = (element.className || '').split(/\s+/);
        let c2 = className.split(/\s+/);
        var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);
        element.className = itemsRemain.join(' ');
    }
    let dialogElements = new Array();
    let dialogCallbacks = new Array();
    /** 弹窗
     * @param element bootstrap 的 modal 元素
     */
    function showDialog(element, callback) {
        removeClassName(element, 'out');
        element.style.display = 'block';
        setTimeout(() => {
            addClassName(element, 'modal fade in');
        }, 100);
        let dialogIndex = dialogElements.indexOf(element);
        if (dialogIndex < 0) {
            dialogElements.push(element);
            dialogIndex = dialogElements.length - 1;
            let closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];
            for (let i = 0; i < closeButtons.length; i++) {
                closeButtons[i].onclick = () => hideDialog(element);
            }
            let allButtons = element.querySelectorAll('button');
            for (let i = 0; i < allButtons.length; i++) {
                allButtons.item(i).addEventListener('click', function (event) {
                    let callback = dialogCallbacks[dialogIndex];
                    if (callback) {
                        callback(event.currentTarget);
                    }
                });
            }
        }
        dialogCallbacks[dialogIndex] = callback;
        element.tabIndex = 1;
        var firstField = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');
        if (firstField) {
            firstField.focus();
        }
        else {
            element.focus();
        }
        element.addEventListener('keydown', on_keydown);
    }
    ui.showDialog = showDialog;
    function hideDialog(element) {
        removeClassName(element, 'in');
        addClassName(element, 'modal fade out');
        element.removeEventListener('keydown', on_keydown);
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                element.style.removeProperty('display');
                reslove();
            }, 1000);
        });
    }
    ui.hideDialog = hideDialog;
    function on_keydown(event) {
        const KEY_CODE_ESC = 27;
        if (event.keyCode == KEY_CODE_ESC) {
            let dialogElement = findDialogElement(event.target);
            console.assert(dialogElement != null);
            ui.hideDialog(dialogElement);
        }
    }
    function findDialogElement(e) {
        while (e) {
            let names = e.className.split(' ').filter(o => o);
            if (names.indexOf('modal') >= 0)
                return e;
            e = e.parentElement;
        }
    }
    function alert(args) {
        let element = document.createElement('div');
        dialogContainer().appendChild(element);
        if (typeof args == 'string') {
            args = { title: '&nbsp;', message: args };
        }
        element.innerHTML = `
            <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">${args.title}</h4>
                    </div>
                    <div class="modal-body">
                        <h5>${args.message}</h5>
                    </div>
                    <div class="modal-footer">
                        <button name="ok" type="button" class="btn btn-primary">
                            确定
                        </button>
                    </div>
                </div>
            </div>
        `;
        // $(element).modal();
        // $(element).on('hidden.bs.modal', () => {
        //     $(element).remove();
        // });
        // var dialog = new Dialog(element);
        // dialog.show();
        ui.showDialog(element);
        let titleElement = element.querySelector('.modal-title');
        let modalFooter = element.querySelector('.modal-footer');
        let cancelButton = modalFooter.querySelector('[name="cancel"]');
        let okButton = modalFooter.querySelector('[name="ok"]');
        okButton.onclick = () => ui.hideDialog(element); //dialog.hide()
    }
    ui.alert = alert;
    function confirm(args) {
        let title;
        let message;
        let execute = args.confirm;
        let container = args.container || document.body;
        if (typeof args == 'string') {
            message = args;
        }
        else {
            title = args.title;
            message = args.message;
        }
        let confirmDialogElment;
        confirmDialogElment = document.createElement('div');
        confirmDialogElment.className = 'modal fade';
        confirmDialogElment.style.marginTop = '20px';
        console.assert(dialogContainer != null, 'dialog container is null');
        dialogContainer().appendChild(confirmDialogElment);
        confirmDialogElment.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                                </button>
                                <h4 class="modal-title">确认</h4>
                            </div>
                            <div class="modal-body form-horizontal">
                               
                            </div>
                            <div class="modal-footer">
                                <button name="cancel" type="button" class="btn btn-default">
                                    取消
                                </button>
                                <button name="ok" type="button" class="btn btn-primary">
                                    确定
                                </button>
                            </div>
                        </div>
                    </div>
                `;
        let modalHeader = confirmDialogElment.querySelector('.modal-header');
        let modalBody = confirmDialogElment.querySelector('.modal-body');
        let modalFooter = confirmDialogElment.querySelector('.modal-footer');
        modalBody.innerHTML = `<h5>${message}</h5>`;
        if (title) {
            modalHeader.querySelector('h4').innerHTML = title;
        }
        let cancelButton = modalFooter.querySelector('[name="cancel"]');
        let okButton = modalFooter.querySelector('[name="ok"]');
        let closeButton = modalHeader.querySelector('.close');
        closeButton.onclick = cancelButton.onclick = function () {
            ui.hideDialog(confirmDialogElment).then(() => {
                confirmDialogElment.remove();
            });
        };
        okButton.onclick = function (event) {
            execute(event)
                .then(() => ui.hideDialog(confirmDialogElment))
                .then(() => {
                confirmDialogElment.remove();
            });
        };
        ui.showDialog(confirmDialogElment);
    }
    ui.confirm = confirm;
    ui.showPanel = (function () {
        let panel = document.createElement('div');
        panel.className = 'mobile-page panel';
        panel.style.display = 'none';
        document.body.appendChild(panel);
        panel.innerHTML = `
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
    
                        </div>
                        <div class="modal-body">
    
                        </div>
                        <div class="modal-footer">
    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in">
            </div>
        `;
        let modal = panel.querySelector('.modal');
        let backdrop = panel.querySelector('.modal-backdrop');
        let header = panel.querySelector('.modal-header');
        let footer = panel.querySelector('.modal-footer');
        let body = panel.querySelector(".modal-body");
        let modalDialog = panel.querySelector(".modal-dialog");
        let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;
        //=====================================================================
        // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
        // let panel = this.panel; //this.refs['panel'] as HTMLElement;
        // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;
        panel.addEventListener('touchstart', (event) => {
            let dialogRect = modalDialog.getBoundingClientRect();
            for (let i = 0; i < event.touches.length; i++) {
                let { clientX } = event.touches[i];
                if (clientX < dialogRect.left) {
                    hide();
                    return;
                }
            }
        });
        if (isIOS) {
            panel.addEventListener('touchstart', (event) => {
                let tagName = event.target.tagName;
                if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
                    return;
                }
                event.stopPropagation();
                event.preventDefault();
            });
        }
        function hide() {
            modal.style.removeProperty('transform');
            backdrop.style.opacity = '0';
            window.setTimeout(() => {
                panel.style.display = 'none';
            }, 500);
        }
        return function showPanel(args) {
            args = args || {};
            panel.style.display = 'block';
            modal.style.display = 'block';
            setTimeout(() => {
                modal.style.transform = 'translateX(0)';
                backdrop.style.opacity = '0.5';
            }, 50);
            let setBodyHeight = () => {
                let headerHeight = header.getBoundingClientRect().height;
                let footerHeight = footer.getBoundingClientRect().height;
                let bodyHeight = window.innerHeight - headerHeight - footerHeight;
                body.style.height = `${bodyHeight}px`;
            };
            window.addEventListener('resize', () => setBodyHeight());
            setBodyHeight();
            if (args.header)
                args.header(header);
            if (args.body)
                args.body(body);
            if (args.footer)
                args.footer(footer);
            return {
                hide: () => hide()
            };
        };
    })();
})(ui || (ui = {}));
var ui;
(function (ui) {
    ui.errors = {
        argumentNull(paramName) {
            let msg = `Argumnet ${paramName} can not be null or empty.`;
            let error = new Error();
            error.message = msg;
            return error;
        }
    };
})(ui || (ui = {}));
var ui;
(function (ui) {
    ui.loadImageConfig = {
        /** 图片的基本路径，图片地址如果不以 http 开头，则加上该路径 */
        imageBaseUrl: '',
        /** 图片显示的文字 */
        imageDisaplyText: '',
    };
    let config = ui.loadImageConfig;
    let draws = {
        text: (imageText, options) => {
            return (ctx, canvasWidth, canvasHeight) => {
                // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
                let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);
                let bgColor = 'whitesmoke';
                let textColor = '#999';
                // let fontSize = Math.min(fontSize1, fontSize2);
                options = Object.assign({
                    fontSize,
                    bgColor,
                    textColor
                }, options);
                ctx.fillStyle = options.bgColor; //'whitesmoke';
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                // 设置字体
                ctx.font = `Bold ${options.fontSize}px Arial`;
                // 设置对齐方式
                ctx.textAlign = "left";
                // 设置填充颜色
                ctx.fillStyle = options.textColor; //"#999";
                let textWidth = fontSize * imageText.length;
                let startX = Math.floor((canvasWidth - textWidth) * 0.5);
                let startY = Math.floor((canvasHeight - options.fontSize) * 0.3);
                // 设置字体内容，以及在画布上的位置
                ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
            };
        }
    };
    function generateImageBase64(width, height, obj, options) {
        var canvas = document.createElement('canvas');
        canvas.width = width; //img_width;
        canvas.height = height; //img_height;
        var ctx = canvas.getContext('2d');
        let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
        draw(ctx, width, height);
        return canvas.toDataURL();
    }
    ui.generateImageBase64 = generateImageBase64;
    function loadImageByUrl(url) {
    }
    const PREVIEW_IMAGE_DEFAULT_WIDTH = 200;
    const PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;
    /**
     * 在 IMG 元素上渲染图片
     * @param element 要渲染的 IMG 元素
     * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
     */
    function renderImage(element, options) {
        options = options || {};
        if (!element)
            throw ui.errors.argumentNull('element');
        let imageUrl = element.src || '';
        if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {
            return;
        }
        //====================================================
        // 通过 URL 设置图片大小
        if (imageUrl && !options.imageSize) {
            var match = imageUrl.match(/_\d+_\d+/);
            if (match && match.length > 0) {
                var arr = match[0].split('_');
                if (arr.length >= 2) {
                    var width = new Number(arr[1]).valueOf();
                    var height = new Number(arr[2]).valueOf();
                    options.imageSize = { width, height };
                }
            }
        }
        //====================================================
        options.imageSize = options.imageSize || { width: PREVIEW_IMAGE_DEFAULT_WIDTH, height: PREVIEW_IMAGE_DEFAULT_HEIGHT };
        //====================================================
        if (!options.imageText) {
            options.imageText = element.title || '';
            ;
        }
        let s = options.imageSize;
        //设置默认的图片
        var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);
        element.setAttribute('src', src_replace);
        return new Promise((resolve, reject) => {
            if (options.loadImage) {
                options.loadImage()
                    .then(base64 => base64 ? Promise.resolve(base64) : Promise.reject({}))
                    .catch(() => {
                    let base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', { fontSize: 24 }));
                    return Promise.resolve(base64);
                })
                    .then((base64) => {
                    element.src = base64;
                    element['rendered'] = true;
                });
            }
            else {
                var image = new Image();
                image.onload = function () {
                    element.src = this.src;
                    element['rendered'] = true;
                    resolve(element.src);
                };
                image.src = imageUrl;
            }
        });
    }
    ui.renderImage = renderImage;
    function imageFileToBase64(imageFile, size) {
        if (!imageFile)
            throw ui.errors.argumentNull('imageFile');
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsArrayBuffer(imageFile);
            reader.onload = (ev) => {
                var blob = new Blob([event.target['result']]);
                window['URL'] = window['URL'] || window['webkitURL'];
                var blobURL = window['URL'].createObjectURL(blob);
                var image = new Image();
                image.src = blobURL;
                image.onload = () => {
                    var canvas = document.createElement('canvas');
                    size = size || {};
                    let width = size.width != null && size.width < image.width ? size.width : image.width;
                    let height = size.height != null && size.height < image.height ? size.height : image.height;
                    if (width != null && height == null) {
                        height = width / image.width * image.height;
                    }
                    else if (width == null && height != null) {
                        width = height / image.height * image.width;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(image, 0, 0, width, height);
                    let data = canvas.toDataURL("image/jpeg", 0.5);
                    resolve({ base64: data, width, height });
                };
            };
        });
    }
    ui.imageFileToBase64 = imageFileToBase64;
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
            reader.readAsDataURL(file);
        });
    }
    ui.fileToBase64 = fileToBase64;
})(ui || (ui = {}));
var ui;
(function (ui) {
    class Panel {
        constructor(element) {
            if (!element)
                throw ui.errors.argumentNull('element');
            this.build(element);
            let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;
            //=====================================================================
            // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
            // let panel = this.panel; //this.refs['panel'] as HTMLElement;
            // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;
            this.panel.addEventListener('touchstart', (event) => {
                let dialogRect = this.modalDialog.getBoundingClientRect();
                for (let i = 0; i < event.touches.length; i++) {
                    let { clientX } = event.touches[i];
                    if (clientX < dialogRect.left) {
                        this.hide();
                        return;
                    }
                }
            });
            //=========================================================
            // 防止滚动面板时，事件穿透到面板底下的页面
            if (isIOS) {
                this.panel.addEventListener('touchstart', (event) => {
                    let tagName = event.target.tagName;
                    if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
                        return;
                    }
                    event.stopPropagation();
                    event.preventDefault();
                });
            }
            //=========================================================
        }
        get header() {
            return this._header;
        }
        get body() {
            return this._body;
        }
        get footer() {
            return this._footer;
        }
        build(element) {
            this.panel = element;
            this.panel.className = 'panel';
            this.panel.style.display = 'none';
            // document.body.appendChild(panel);
            this.panel.innerHTML = `
                <div class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
        
                            </div>
                            <div class="modal-body">
        
                            </div>
                            <div class="modal-footer">
        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-backdrop in">
                </div>
            `;
            this.modal = this.panel.querySelector('.modal');
            this.backdrop = this.panel.querySelector('.modal-backdrop');
            this._header = this.panel.querySelector('.modal-header');
            this._footer = this.panel.querySelector('.modal-footer');
            this._body = this.panel.querySelector(".modal-body");
            this.modalDialog = this.panel.querySelector(".modal-dialog");
        }
        show() {
            // args = args || {};
            this.panel.style.display = 'block';
            this.modal.style.display = 'block';
            setTimeout(() => {
                this.modal.style.transform = 'translateX(0)';
                this.backdrop.style.opacity = '0.5';
            }, 50);
            let setBodyHeight = () => {
                let headerHeight = this._header.getBoundingClientRect().height;
                let footerHeight = this._footer.getBoundingClientRect().height;
                let bodyHeight = window.innerHeight - headerHeight - footerHeight;
                this._body.style.height = `${bodyHeight}px`;
            };
            window.addEventListener('resize', () => setBodyHeight());
            setBodyHeight();
            // if (args.header)
            //     args.header(header);
            // if (args.body)
            //     args.body(body);
            // if (args.footer)
            //     args.footer(footer);
            // return {
            //     hide: () => hide()
            // }
        }
        hide() {
            this.modal.style.removeProperty('transform');
            this.backdrop.style.opacity = '0';
            window.setTimeout(() => {
                this.panel.style.display = 'none';
            }, 500);
        }
    }
    ui.Panel = Panel;
})(ui || (ui = {}));
