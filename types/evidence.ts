export type EvidenceStatus =
    | "pending"
    | "ready"
    | "error";

export type EvidenceFile = {
    id: string;
    file: File;
    name: string;
    size: number;
    status: EvidenceStatus;
    error?: string;
};