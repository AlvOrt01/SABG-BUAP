export type RoutePriority =
    | "high"
    | "medium"
    | "low";

export type RouteResource = {
    type: "guide" | "annex" | "case";
    label: string;
};

export type RecommendedChapter = {
    id: string;
    chapter: number;
    title: string;
    priority: RoutePriority;
    reason: string;
    expectedProduct: string;
    resources: RouteResource[];
};