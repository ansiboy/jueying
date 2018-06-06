//TODO: 如果 items 为0,或者为 1 的情况。
//import cm = require('chitu.mobile');
define(["require", "exports"], function (require, exports) {
    "use strict";
    class Errors {
        static argumentNull(parameterName) {
            let msg = `Argument '${parameterName}' cannt be null.`;
            return new Error(msg);
        }
    }
    var animateTime = 400; //ms，这个数值，要和样式中的设定一致。
    const MOVE_PERSEND = 20;
    class Carousel {
        constructor(element, options) {
            this.playTimeId = 0; // 0 为停止中，－1 为已停止，非 0 为播放中。
            this.playing = false;
            this.paned = false;
            this.is_pause = false;
            if (element == null)
                throw Errors.argumentNull('element');
            this.window_width = document.body.clientWidth;
            this.items = new Array();
            let q = element.querySelectorAll('.item');
            for (let i = 0; i < q.length; i++) {
                this.items[i] = q.item(i);
            }
            this.indicators = new Array();
            q = element.querySelectorAll('.carousel-indicators li');
            for (let i = 0; i < q.length; i++)
                this.indicators[i] = q.item(i);
            console.assert(this.indicators.length == this.items.length);
            this.active_index = this.active_index >= 0 ? this.active_index : 0;
            addClassName(this.activeItem(), 'active');
            addClassName(this.indicators[this.active_index], 'active');
            this.listenTouch(element);
            options = Object.assign({ autoplay: true }, options);
            this.autoplay = options.autoplay;
            if (this.autoplay) {
                this.play();
                // let pageView = this.findPageView(element);
                // console.assert(pageView != null);
                // pageView.addEventListener('touchstart', () => {
                //     this.stop();
                // });
                // pageView.addEventListener('touchend', () => {
                //     this.play();
                // })
            }
        }
        listenTouch(element) {
            let startY, currentY;
            let startX, currentX;
            let moving;
            let horizontal_swipe_angle = 35;
            let vertical_pull_angle = 65;
            element.addEventListener('touchstart', (event) => {
                startY = event.touches[0].pageY;
                startX = event.touches[0].pageX;
                this.panstart(event);
            });
            element.addEventListener('touchmove', (event) => {
                currentX = event.targetTouches[0].pageX;
                currentY = event.targetTouches[0].pageY;
                let angle = calculateAngle(currentX - startX, currentY - startY);
                if (angle < horizontal_swipe_angle) {
                    moving = 'horizontal';
                    this.panmove(event, currentX - startX);
                }
                if (moving != null) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            });
            var calculateAngle = (x, y) => {
                let d = Math.atan(Math.abs(y / x)) / 3.14159265 * 180;
                return d;
            };
            let readyElement;
            let initElement;
            var endHorizontal = (event, deltaX) => {
                moving = null;
                this.panend(event, deltaX);
            };
            element.addEventListener('touchcancel', (event) => endHorizontal(event, currentX - startX));
            element.addEventListener('touchend', (event) => endHorizontal(event, currentX - startX));
        }
        panstart(e) {
            if (this.is_pause)
                return false;
            this.stop();
        }
        panmove(e, deltaX) {
            var percent_position = Math.floor(deltaX / document.body.clientWidth * 100);
            if (this.active_position == percent_position || this.playing == true) {
                return;
            }
            this.paned = true;
            this.move(this.activeItem(), deltaX, 0);
            this.active_position = percent_position;
            if (percent_position < 0) {
                this.nextItem().className = 'item next';
                this.move(this.nextItem(), this.window_width + deltaX, 0);
            }
            else if (percent_position > 0) {
                this.prevItem().className = 'item prev';
                this.move(this.prevItem(), deltaX - this.window_width, 0);
            }
        }
        move(element, deltaX, time) {
            element.style.transform = `translate(${deltaX}px, 0px)`;
            element.style.transition = `${time / 1000}s`;
        }
        panend(e, deltaX) {
            if (this.paned == false)
                return;
            this.paned = false;
            var duration_time = 200;
            let p = MOVE_PERSEND;
            if (this.active_position > 0 && this.active_position >= p) {
                this.move(this.activeItem(), this.window_width, duration_time);
                this.move(this.prevItem(), 0, duration_time);
                window.setTimeout(() => {
                    removeClassName(this.prevItem(), 'prev', 'next');
                    addClassName(this.prevItem(), 'active');
                    removeClassName(this.activeItem(), 'active');
                    this.decreaseActiveIndex();
                }, duration_time);
            }
            else if (this.active_position > 0 && this.active_position < p) {
                this.move(this.activeItem(), 0, duration_time); //
                this.move(this.prevItem(), 0 - this.window_width, duration_time);
            }
            else if (this.active_position <= 0 - p) {
                this.move(this.activeItem(), 0 - this.window_width, duration_time);
                this.move(this.nextItem(), 0, duration_time);
                window.setTimeout(() => {
                    removeClassName(this.nextItem(), 'prev', 'next');
                    addClassName(this.nextItem(), 'active');
                    removeClassName(this.activeItem(), 'active');
                    this.increaseActiveIndex();
                }, duration_time);
            }
            else {
                // 取消滑动到下一页，还原回原来的位置。
                this.move(this.activeItem(), 0, duration_time);
                this.move(this.nextItem(), this.window_width, duration_time);
            }
            window.setTimeout(() => {
                if (this.autoplay) {
                    this.play();
                }
            }, duration_time + 200);
        }
        increaseActiveIndex() {
            this.setIndicatorClassName(this.active_index, '');
            this.active_index = this.active_index + 1;
            if (this.active_index > this.items.length - 1)
                this.active_index = 0;
            this.setIndicatorClassName(this.active_index, 'active');
            return this.active_index;
        }
        decreaseActiveIndex() {
            this.setIndicatorClassName(this.active_index, '');
            this.active_index = this.active_index - 1;
            if (this.active_index < 0)
                this.active_index = this.items.length - 1;
            this.setIndicatorClassName(this.active_index, 'active');
        }
        nextItemIndex() {
            var next = this.active_index + 1;
            if (next > this.items.length - 1)
                next = 0;
            return next;
        }
        prevItemIndex() {
            var prev = this.active_index - 1;
            if (prev < 0)
                prev = this.items.length - 1;
            return prev;
        }
        nextItem() {
            var nextIndex = this.active_index + 1;
            if (nextIndex > this.items.length - 1)
                nextIndex = 0;
            return this.items[nextIndex];
        }
        prevItem() {
            var prevIndex = this.active_index - 1;
            if (prevIndex < 0)
                prevIndex = this.items.length - 1;
            return this.items[prevIndex];
        }
        activeItem() {
            return this.items[this.active_index];
        }
        moveNext() {
            if (this.playTimeId == 0)
                return;
            if (this.playing == true)
                return;
            this.playing = true;
            this.nextItem().style.transform = this.nextItem().style.webkitTransform = '';
            this.nextItem().style.transitionDuration = this.nextItem().style.webkitTransitionDuration = '';
            this.activeItem().style.transform = this.activeItem().style.webkitTransform = '';
            this.activeItem().style.transitionDuration = this.activeItem().style.webkitTransitionDuration = '';
            //==================================================
            // 加入 next 样式式，使得该 item 在 active item 右边。
            this.activeItem().className = 'item active';
            this.nextItem().className = 'item next';
            //==================================================
            // 需要延时，否则第二个动画不生效。
            window.setTimeout(() => {
                addClassName(this.activeItem(), 'left');
                addClassName(this.nextItem(), 'active');
                //==================================================
                // 动画完成后，清除样式。
                setTimeout(() => {
                    this.nextItem().className = 'item active';
                    this.activeItem().className = 'item';
                    this.increaseActiveIndex();
                    this.playing = false;
                }, animateTime);
                //==================================================
            }, 50);
        }
        movePrev() {
            if (this.playTimeId == 0)
                return;
            if (this.playing == true)
                return;
            this.playing = true;
            //==================================================
            // 加入 next 样式式，使得该 item 在 active item 右边。
            addClassName(this.prevItem(), 'prev');
            this.prevItem().style.transform = this.prevItem().style.webkitTransform = '';
            this.activeItem().style.transform = this.activeItem().style.webkitTransform = '';
            //==================================================
            // 需要延时，否则第二个动画不生效。
            window.setTimeout(() => {
                addClassName(this.activeItem(), 'right');
                addClassName(this.prevItem(), 'active');
                //==================================================
                // 动画完成后，清除样式。
                setTimeout(() => {
                    removeClassName(this.prevItem(), 'prev', 'next');
                    removeClassName(this.activeItem(), 'right', 'active');
                    this.decreaseActiveIndex();
                    this.playing = false;
                }, animateTime);
                //==================================================
            }, 10);
        }
        setIndicatorClassName(index, className) {
            let indicator = this.indicators[index];
            if (indicator == null) {
                return;
            }
            indicator.className = className;
        }
        stop() {
            if (this.playTimeId == 0) {
                return;
            }
            window.clearInterval(this.playTimeId);
            this.playTimeId = 0;
        }
        get pause() {
            return this.is_pause;
        }
        set pause(value) {
            this.is_pause = value;
            if (this.is_pause == true)
                this.stop();
        }
        // private findPageView(element: HTMLElement) {
        //     console.assert(element != null);
        //     let p = element;
        //     while (p) {
        //         if (p.tagName == cm.viewTagName) {
        //             return p;
        //         }
        //         p = p.parentElement;
        //     }
        // }
        play() {
            if (this.playTimeId != 0)
                return;
            this.playTimeId = window.setInterval(() => {
                this.moveNext();
            }, 2000);
        }
    }
    function addClassName(element, ...classNames) {
        console.assert(element.className != null);
        for (let className of classNames) {
            if (element.className.indexOf(className) >= 0)
                continue;
            element.className = element.className + ' ' + className;
        }
    }
    function removeClassName(element, ...classNames) {
        console.assert(element.className != null);
        for (let i = 0; i < classNames.length; i++)
            element.className = element.className.replace(classNames[i], '');
    }
    return Carousel;
});
