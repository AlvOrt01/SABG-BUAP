import type { WorkflowProgressProps } from "@/types/workflow";

export function WorkflowProgress({
    steps,
    currentStep,
}: WorkflowProgressProps) {
    const currentIndex = steps.findIndex(
        (step) => step.id === currentStep
    );

    return (
        <div className="shrink-0 border-b border-border bg-surface">
            <div className="overflow-x-auto px-4 py-4 md:px-6 lg:px-8">
                <div className="flex min-w-max items-center">
                    {steps.map((step, index) => {
                        const completed = index < currentIndex;
                        const active = index === currentIndex;

                        return (
                            <div
                                key={step.id}
                                className="flex items-center"
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className={[
                                            "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                                            completed || active
                                                ? "border-primary bg-primary text-white"
                                                : "border-border bg-background text-text-muted",
                                        ].join(" ")}
                                    >
                                        {completed ? "✓" : index + 1}
                                    </div>

                                    <span
                                        className={[
                                            "whitespace-nowrap text-xs font-semibold sm:text-sm",
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
                                            "mx-3 h-px w-8 sm:w-12",
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
        </div>
    );
}