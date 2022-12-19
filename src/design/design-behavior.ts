
export enum DesignBehavior {
    disableClick = 1,
    disableHref = 2,
    isContainer = 4,

    default = DesignBehavior.disableClick | DesignBehavior.disableHref,
}

