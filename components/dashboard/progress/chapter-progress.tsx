"use client";

import { useState } from "react";

import {
    Check,
    ChevronDown,
    Circle,
} from "lucide-react";

export type ChapterProgressItem = {
    id: string;
    chapter: number;
    title: string;
    status:
    | "completed"
    | "current"
    | "pending";
};

type ChapterProgressProps = {
    chapters: ChapterProgressItem[];
};

export function ChapterProgress({
    chapters,
}: ChapterProgressProps) {
    const [open, setOpen] =
        useState(false);

    if (chapters.length === 0) {
        return null;
    }

    const currentChapter =
        chapters.find(
            (chapter) =>
                chapter.status === "current"
        );

    const completedCount =
        chapters.filter(
            (chapter) =>
                chapter.status === "completed"
        ).length;

    return (
        <section className="border-b border-border bg-surface">
            {/* Encabezado */}
            <button
                type="button"
                onClick={() =>
                    setOpen(
                        (previous) => !previous
                    )
                }
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-background/50 md:px-6 lg:px-8"
            >
                <div className="mx-auto flex w-full max-w-7xl items-center">
                    <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                            Progreso de tu ruta
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {currentChapter ? (
                            <p className="hidden text-xs font-medium text-text-secondary sm:block">
                                Capítulo{" "}
                                {currentChapter.chapter}
                                {" · "}
                                {completedCount + 1} de{" "}
                                {chapters.length}
                            </p>
                        ) : (
                            <p className="hidden text-xs font-medium text-text-secondary sm:block">
                                Ruta completada
                            </p>
                        )}

                        <ChevronDown
                            className={[
                                "h-4 w-4 text-text-muted transition-transform duration-200",
                                open
                                    ? "rotate-180"
                                    : "",
                            ].join(" ")}
                        />
                    </div>
                </div>
            </button>

            {/* Contenido desplegable */}
            {/* Contenido desplegable */}
            {open && (
                <div className="border-t border-border px-4 pb-5 pt-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl overflow-x-auto">
                        <div className="mx-auto flex w-fit min-w-full items-start justify-center">
                            {chapters.map((chapter, index) => {
                                const completed =
                                    chapter.status === "completed";

                                const current =
                                    chapter.status === "current";

                                return (
                                    <div
                                        key={chapter.id}
                                        className="flex items-start"
                                    >
                                        {/* Capítulo */}
                                        <div className="flex w-44 shrink-0 flex-col items-center">
                                            <div
                                                className={[
                                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                                                    completed
                                                        ? "border-primary bg-primary text-white"
                                                        : current
                                                            ? "border-primary bg-primary-light text-primary"
                                                            : "border-border bg-background text-text-muted",
                                                ].join(" ")}
                                            >
                                                {completed ? (
                                                    <Check className="h-4 w-4" />
                                                ) : current ? (
                                                    chapter.chapter
                                                ) : (
                                                    <Circle className="h-3 w-3" />
                                                )}
                                            </div>

                                            <p
                                                className={[
                                                    "mt-2 text-center text-xs font-semibold",
                                                    completed || current
                                                        ? "text-text-primary"
                                                        : "text-text-muted",
                                                ].join(" ")}
                                            >
                                                Capítulo {chapter.chapter}
                                            </p>

                                            <p className="mt-0.5 max-w-40 text-center text-[11px] leading-4 text-text-secondary">
                                                {chapter.title}
                                            </p>
                                        </div>

                                        {/* Línea entre capítulos */}
                                        {index < chapters.length - 1 && (
                                            <div
                                                className={[
                                                    "mt-4 h-px w-24 shrink-0 lg:w-32",
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
            )}
        </section>
    );
}