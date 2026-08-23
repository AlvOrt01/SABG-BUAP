export type Chapter = {
    id: string;
    number: number;
    shortLabel: string;
    title: string;
    slug: string;
    enabled: boolean;
};

export type ChapterProgressProps = {
    chapters: Chapter[];
    currentChapterId: string;
};

