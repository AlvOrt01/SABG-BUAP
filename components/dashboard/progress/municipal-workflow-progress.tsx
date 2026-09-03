"use client";

import { WorkflowProgress } from "./workflow-progress";
import { sabgWorkflow } from "@/config/workflow";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function MunicipalWorkflowProgress() {
    const { currentStep } = useMunicipalProgress();

    const workflowStep =
        currentStep === "not-started"
            ? null
            : currentStep === "tracking"
                ? "review"
                : currentStep;

    return (
        <WorkflowProgress
            steps={sabgWorkflow}
            currentStep={workflowStep}
        />
    );
}