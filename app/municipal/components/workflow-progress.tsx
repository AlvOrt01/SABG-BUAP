type WorkflowStep =
    | "diagnosis"
    | "route"
    | "instrument"
    | "evidence"
    | "review"
    | "result";

type WorkflowProgressProps = {
    currentStep: WorkflowStep;
};

const steps = [
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
] as const;

export function WorkflowProgress({
    currentStep,
}: WorkflowProgressProps) {
    const currentIndex = steps.findIndex(
        (step) => step.id === currentStep
    );

    return (
        <div className="border-b border-border bg-surface px-8 py-5">
            <div className="flex items-center">
                {steps.map((step, index) => {
                    const completed = index < currentIndex;
                    const active = index === currentIndex;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-1 items-center"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={[
                                        "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                                        completed
                                            ? "border-primary bg-primary text-white"
                                            : active
                                                ? "border-primary bg-primary text-white"
                                                : "border-border bg-background text-text-secondary",
                                    ].join(" ")}
                                >
                                    {completed ? "✓" : index + 1}
                                </div>

                                <span
                                    className={[
                                        "text-sm font-semibold",
                                        active || completed
                                            ? "text-primary"
                                            : "text-text-muted",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </span>
                            </div>

                            {index < steps.length - 1 && (
                                <div
                                    className={[
                                        "mx-4 h-px flex-1",
                                        completed ? "bg-primary" : "bg-border",
                                    ].join(" ")}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}