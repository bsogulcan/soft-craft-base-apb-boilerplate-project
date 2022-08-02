export class DialogOptions {
    footer?: string;
    width?: string = "60%";
    height?: string = "auto";
    closeOnEscape?: boolean;
    baseZIndex?: number = 10000;
    autoZIndex?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    style?: any;
    contentStyle?: any;
    styleClass?: string;
    transitionOptions?: string;
    closable?: boolean;
    showHeader?: boolean;
    modal?: boolean;
}