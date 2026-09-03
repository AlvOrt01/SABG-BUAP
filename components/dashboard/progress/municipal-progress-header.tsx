"use client";

import {
    ChapterProgress,
    type ChapterProgressItem,
} from "./chapter-progress";

import { MunicipalWorkflowProgress } from "./municipal-workflow-progress";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

import { recommendedRouteMock } from "@/config/route";

export function MunicipalProgressHeader() {
    const { currentStep } =
        useMunicipalProgress();

    const hasRoute =
        currentStep !== "not-started" &&
        currentStep !== "diagnosis";

    /*
     * Temporalmente usamos el primer capítulo
     * recomendado como capítulo actual.
     *
     * Después esto vendrá de la base de datos.
     */
    const currentChapterIndex = 0;

    const chapters: ChapterProgressItem[] =
        recommendedRouteMock.map(
            (chapter, index) => ({
                id: chapter.id,
                chapter: chapter.chapter,
                title: chapter.title,

                status:
                    index <
                        currentChapterIndex
                        ? "completed"
                        : index ===
                            currentChapterIndex
                            ? "current"
                            : "pending",
            })
        );

    return (
        <div className="bg-surface">
            {hasRoute && (
                <ChapterProgress
                    chapters={chapters}
                />
            )}

            <MunicipalWorkflowProgress />
        </div>
    );
}