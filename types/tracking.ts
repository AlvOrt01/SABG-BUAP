export type ReviewStatus =
    | "pending"
    | "observations"
    | "approved";

export type TrackingReview = {
    status: ReviewStatus;
    submittedAt: string;
    chapter: number;
    chapterTitle: string;
    instrumentTitle: string;
    evidenceCount: number;
    reviewer?: string;
    reviewedAt?: string;
    observations?: string[];
};