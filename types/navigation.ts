export type NavigationIcon =
    | "home"
    | "chapter"
    | "tracking"
    | "resources"
    | "help";

export type ChapterNavigationStatus =
    | "completed"
    | "current"
    | "pending";

export type NavigationChild = {
    label: string;
    path: string;
    disabled?: boolean;
};

export type NavigationItem = {
    id: string;
    label: string;
    description?: string;
    path?: string;
    icon: NavigationIcon;
    chapter?: number;
    status?: ChapterNavigationStatus;
    disabled?: boolean;
    children?: NavigationChild[];
};

export type NavigationConfig = {
    items: NavigationItem[];
};