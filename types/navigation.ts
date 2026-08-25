export type NavigationIcon =
    | "home"
    | "route"
    | "tracking"
    | "resources"
    | "help";

export type NavigationChild = {
    label: string;
    path: string;
    disabled?: boolean;
};

export type NavigationItem = {
    label: string;
    path: string;
    icon: NavigationIcon;
    disabled?: boolean;
    children?: NavigationChild[];
};

export type NavigationConfig = {
    items: NavigationItem[];
};