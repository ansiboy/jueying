declare class Carousel {
    private playTimeId;
    private playing;
    private paned;
    private window_width;
    private active_position;
    private active_index;
    private items;
    private indicators;
    private is_pause;
    private autoplay;
    constructor(element: HTMLElement, options?: {
        autoplay: boolean;
    });
    private listenTouch(element);
    private panstart(e);
    private panmove(e, deltaX);
    private move(element, deltaX, time);
    private panend(e, deltaX);
    private increaseActiveIndex();
    private decreaseActiveIndex();
    private nextItemIndex();
    private prevItemIndex();
    private nextItem();
    private prevItem();
    private activeItem();
    private moveNext();
    private movePrev();
    private setIndicatorClassName(index, className);
    stop(): void;
    private pause;
    play(): void;
}
export = Carousel;
