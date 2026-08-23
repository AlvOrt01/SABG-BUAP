import type { WorkflowStep } from "@/types/workflow";

export const sabgWorkflow: WorkflowStep[] = [
    {
        id: "diagnosis",
        label: "Diagnóstico",
    },
    {
        id: "route",
        label: "Ruta",
    },
    {
        id: "instrument",
        label: "Instrumento",
    },
    {
        id: "evidence",
        label: "Evidencias",
    },
    {
        id: "review",
        label: "Revisión",
    },
    {
        id: "result",
        label: "Resultado",
    },
];