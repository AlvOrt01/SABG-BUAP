export type WorkflowStep = {
    id: string;
    label: string;
};

export type WorkflowProgressProps = {
    steps: WorkflowStep[];
    currentStep: string;
};