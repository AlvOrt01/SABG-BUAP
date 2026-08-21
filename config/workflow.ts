export const WORKFLOW_STEPS = [
  "Diagnóstico",
  "Ruta",
  "Instrumento",
  "Evidencias",
  "Revisión",
  "Resultado",
] as const;

export type WorkflowStep = (typeof WORKFLOW_STEPS)[number];
