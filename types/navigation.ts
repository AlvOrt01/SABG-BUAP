import type { MunicipalStep } from "@/types/workflow";

export type NavigationIcon =
    | "home"
    | "route"
    | "tracking"
    | "resources"
    | "help";

export type NavigationChild = {
    label: string;
    path: string;
    step?: MunicipalStep;
    disabled?: boolean;
};

export type NavigationItem = {
    label: string;
    path: string;
    icon: NavigationIcon;
    step?: MunicipalStep;
    disabled?: boolean;
    children?: NavigationChild[];
};

export type NavigationConfig = {
    items: NavigationItem[];
};