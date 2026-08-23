export type NavigationIcon =
    | "home"
    | "route"
    | "tracking"
    | "resources"
    | "help";

export type NavigationItem = {
    label: string;
    path: string;
    icon: NavigationIcon;
    disabled?: boolean;
};

export type NavigationConfig = {
    items: NavigationItem[];
};