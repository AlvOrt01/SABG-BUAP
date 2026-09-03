"use client";

import { useRouter } from "next/navigation";

import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ClipboardList,
    FileText,
    Lightbulb,
    Map,
} from "lucide-react";
import { recommendedRouteMock } from "@/config/route";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

import type {
    RecommendedChapter,
    RoutePriority,
    RouteResource,
} from "@/types/route";
import { MunicipalWorkflowProgress } from "@/components/dashboard/progress/municipal-workflow-progress";
import { MunicipalProgressHeader } from "@/components/dashboard/progress/municipal-progress-header";

export function RecommendedRoute() {
    const router = useRouter();

    const {
        currentStep,
        isCompleted,
        completeStep,
    } = useMunicipalProgress();

    const routeCompleted =
        isCompleted("route");

    function handleConfirmRoute() {
        if (!routeCompleted) {
            completeStep("route");
        }

        router.push("/municipal/instrument");
    }

    return (
        <>
            <MunicipalProgressHeader />

            <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
                <div className="mx-auto max-w-7xl space-y-6">
                    {/* Encabezado */}
                    <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-2 text-primary">
                                    <Map className="h-5 w-5" />

                                    <p className="text-xs font-semibold uppercase tracking-wide">
                                        Ruta recomendada
                                    </p>
                                </div>

                                <h1 className="mt-3 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
                                    Tu ruta de fortalecimiento municipal
                                </h1>

                                <p className="mt-3 text-sm leading-6 text-text-secondary md:text-base">
                                    A partir de la información recopilada en tu diagnóstico
                                    identificamos los capítulos y herramientas que pueden
                                    ayudarte a atender las principales áreas de oportunidad
                                    del municipio.
                                </p>
                            </div>

                            {routeCompleted && (
                                <div className="flex shrink-0 items-center gap-2 rounded-xl bg-primary-light px-4 py-3 text-sm font-semibold text-primary">
                                    <CheckCircle2 className="h-5 w-5" />

                                    Ruta confirmada
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Resumen */}
                    <section className="grid gap-4 sm:grid-cols-3">
                        <SummaryCard
                            label="Capítulos recomendados"
                            value={String(recommendedRouteMock.length)}
                        />

                        <SummaryCard
                            label="Prioridad alta"
                            value={String(
                                recommendedRouteMock.filter(
                                    (chapter) =>
                                        chapter.priority === "high"
                                ).length
                            )}
                        />

                        <SummaryCard
                            label="Siguiente etapa"
                            value="Instrumento"
                        />
                    </section>

                    {/* Capítulos */}
                    <section>
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-text-primary">
                                Capítulos recomendados
                            </h2>

                            <p className="mt-1 text-sm text-text-secondary">
                                Trabaja los capítulos en el orden sugerido para mantener
                                una secuencia clara de intervención.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {recommendedRouteMock.map(
                                (chapter, index) => (
                                    <ChapterCard
                                        key={chapter.id}
                                        chapter={chapter}
                                        index={index}
                                    />
                                )
                            )}
                        </div>
                    </section>

                    {/* Confirmación */}
                    <section className="rounded-2xl border border-primary/20 bg-primary-light p-6 md:p-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />

                                    <h2 className="font-bold text-text-primary">
                                        {routeCompleted
                                            ? "Tu ruta ya fue confirmada"
                                            : "¿Todo listo para comenzar?"}
                                    </h2>
                                </div>

                                <p className="mt-2 text-sm leading-6 text-text-secondary">
                                    {routeCompleted
                                        ? "Puedes consultar esta ruta cuando lo necesites y continuar con el instrumento correspondiente."
                                        : "Confirma tu ruta para habilitar el instrumento y comenzar a trabajar con las herramientas asociadas a los capítulos recomendados."}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleConfirmRoute}
                                className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                {routeCompleted
                                    ? "Ir al instrumento"
                                    : "Confirmar y continuar"}

                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

function ChapterCard({
    chapter,
    index,
}: {
    chapter: RecommendedChapter;
    index: number;
}) {
    return (
        <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <div className="grid lg:grid-cols-[110px_minmax(0,1fr)]">
                {/* Número */}
                <div className="flex items-center justify-center border-b border-border bg-background p-5 lg:border-b-0 lg:border-r">
                    <div className="text-center">
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                            Paso
                        </p>

                        <p className="mt-1 text-3xl font-bold text-primary">
                            {index + 1}
                        </p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <PriorityBadge
                                priority={chapter.priority}
                            />

                            <p className="mt-3 text-sm font-semibold text-primary">
                                Capítulo {chapter.chapter}
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-text-primary">
                                {chapter.title}
                            </h3>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6 xl:grid-cols-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                                ¿Por qué está en tu ruta?
                            </p>

                            <p className="mt-2 text-sm leading-6 text-text-secondary">
                                {chapter.reason}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                                Producto esperado
                            </p>

                            <div className="mt-2 flex gap-2">
                                <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                                <p className="text-sm font-medium leading-6 text-text-primary">
                                    {chapter.expectedProduct}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-border pt-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                            Recursos relacionados
                        </p>

                        <div className="mt-3 grid gap-3 md:grid-cols-3">
                            {chapter.resources.map(
                                (resource) => (
                                    <ResourceCard
                                        key={`${chapter.id}-${resource.type}-${resource.label}`}
                                        resource={resource}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

function PriorityBadge({
    priority,
}: {
    priority: RoutePriority;
}) {
    const labels: Record<
        RoutePriority,
        string
    > = {
        high: "Prioridad alta",
        medium: "Prioridad media",
        low: "Prioridad baja",
    };

    return (
        <span className="inline-flex rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            {labels[priority]}
        </span>
    );
}

function ResourceCard({
    resource,
}: {
    resource: RouteResource;
}) {
    const icons = {
        guide: BookOpen,
        annex: FileText,
        case: Lightbulb,
    };

    const Icon = icons[resource.type];

    return (
        <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon className="h-4 w-4" />
            </div>

            <p className="text-sm font-medium leading-5 text-text-primary">
                {resource.label}
            </p>
        </div>
    );
}

function SummaryCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {label}
            </p>

            <p className="mt-2 text-xl font-bold text-text-primary">
                {value}
            </p>
        </div>
    );
}