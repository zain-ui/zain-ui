export interface stylesType {
    root?: string;
    popper?: string;
    paper?: string;
    leftText?: string;
    rightText?: string;
    subList?: string;
    subIcon?: string;
    buttonHover?: string;
    splitLine?: string;
}
export declare const styles: Record<"root" | "paper" | "popper" | "leftText" | "rightText" | "subList" | "subIcon" | "buttonHover" | "splitLine", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
