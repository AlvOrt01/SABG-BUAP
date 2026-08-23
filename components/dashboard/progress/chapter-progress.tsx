import type {
    ChapterProgressProps,
} from "@/types/chapter";

export function ChapterProgress({
    chapters,
    currentChapterId,
}: ChapterProgressProps) {
    const activeChapters = chapters
        .filter((chapter) => chapter.enabled)
        .sort((a, b) => a.number - b.number);

    const currentIndex = activeChapters.findIndex(
        (chapter) => chapter.id === currentChapterId,
    );

    return (
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <header className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Progreso de capítulos
                </p>

                <h2 className="mt-1 text-lg font-semibold text-text-primary">
                    Ruta de Buen Gobierno y Gobernanza Municipal
                </h2>
            </header>

            <div className="overflow-x-auto pb-2">
                <div className="flex min-w-max items-start">
                    {activeChapters.map((chapter, index) => {
                        const completed = index < currentIndex;
                        const active = index === currentIndex;

                        return (
                            <div
                                key={chapter.id}
                                className="flex items-start"
                            >
                                <div className="flex w-28 flex-col items-center">
                                    <div
                                        className={[
                                            "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                                            completed
                                                ? "border-primary bg-primary text-white"
                                                : active
                                                    ? "border-primary bg-primary text-white ring-4 ring-primary/10"
                                                    : "border-border bg-background text-text-muted",
                                        ].join(" ")}
                                    >
                                        {completed ? "✓" : chapter.number}
                                    </div>

                                    <span
                                        className={[
                                            "mt-2 text-center text-xs font-medium leading-tight",
                                            completed || active
                                                ? "text-primary"
                                                : "text-text-muted",
                                        ].join(" ")}
                                    >
                                        {chapter.shortLabel}
                                    </span>
                                </div>

                                {index < activeChapters.length - 1 && (
                                    <div
                                        className={[
                                            "mt-4.5 h-px w-12",
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
        </section>
    );
}