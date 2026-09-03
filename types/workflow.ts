export type WorkflowStep = {
    id: string;
    label: string;
};

export type WorkflowProgressProps = {
    steps: WorkflowStep[];
    currentStep: string | null;
};

export type MunicipalStep =
    | "not-started"
    | "diagnosis"
    | "route"
    | "instrument"
    | "evidence"
    | "tracking";