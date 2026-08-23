import type {
    WorkflowProgressProps,
} from "@/types/workflow";

export function WorkflowProgress({
    steps,
    currentStep,
}: WorkflowProgressProps) {
    const currentIndex = steps.findIndex(
        (step) => step.id === currentStep,
    );

    return (
        <div className="shrink-0 border-b border-border bg-surface px-8 py-5">
            <div className="mx-auto flex max-w-7xl items-center">
                {steps.map((step, index) => {
                    const completed = index < currentIndex;
                    const active = index === currentIndex;

                    return (
                        <div
                            key={step.id}
                            className="flex min-w-0 flex-1 items-center"
                        >
                            <div className="flex shrink-0 items-center gap-2">
                                <div
                                    className={[
                                        "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                                        completed
                                            ? "border-primary bg-primary text-white"
                                            : active
                                                ? "border-primary bg-primary text-white ring-4 ring-primary/10"
                                                : "border-border bg-background text-text-muted",
                                    ].join(" ")}
                                >
                                    {completed ? "✓" : index + 1}
                                </div>

                                <span
                                    className={[
                                        "hidden whitespace-nowrap text-sm font-semibold md:block",
                                        completed || active
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
                                        "mx-4 h-px min-w-3 flex-1",
                                        completed
                                            ? "bg-primary"
                                            : "bg-border",
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