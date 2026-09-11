"use client";

import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ClipboardCheck,
    FileCheck2,
    Map,
    ShieldCheck,
} from "lucide-react";

import { MunicipalWorkflowProgress } from "@/components/dashboard/progress/municipal-workflow-progress";
import { routes } from "@/config/routes";
import { trackingMock } from "@/config/tracking";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export default function Chapter2Page() {
    const { currentStep, isUnlocked, isCompleted } =
        useMunicipalProgress();

    const diagnosisStarted =
        currentStep !== "not-started";
    const diagnosisCompleted =
        isCompleted("diagnosis");
    const routeUnlocked = isUnlocked("route");
    const evidenceUnlocked =
        isUnlocked("evidence");
    const trackingUnlocked =
        isUnlocked("tracking");

    return (
        <>
            <MunicipalWorkflowProgress />

            <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
                <div className="mx-auto max-w-7xl space-y-7">
                    <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                        <p className="text-sm font-semibold text-primary">
                            Capítulo 2
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
                            Diagnóstico Municipal
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary">
                            {diagnosisStarted
                                ? "Tu proceso ya está en marcha. Consulta aquí el avance del diagnóstico y continúa con la siguiente etapa disponible."
                                : "Inicia aquí el proceso para conocer la situación actual de tu municipio y reunir la información necesaria para definir una ruta de mejora."}
                        </p>

                        <Link
                            href={diagnosisStarted
                                ? routeUnlocked
                                    ? routes.chapter2.route
                                    : routes.chapter2.diagnosis
                                : routes.chapter2.diagnosis}
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            <ClipboardCheck className="h-4 w-4" />
                            {diagnosisStarted
                                ? routeUnlocked
                                    ? "Continuar proceso"
                                    : "Continuar diagnóstico"
                                : "Iniciar diagnóstico"}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </section>

                    {diagnosisStarted && (
                        <section className="space-y-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                    Resumen del proceso
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-text-primary">
                                    Avance de tu diagnóstico municipal
                                </h2>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                <ProgressSummaryCard
                                    title="Diagnóstico"
                                    description={diagnosisCompleted
                                        ? "Diagnóstico completado y listo para consultar la ruta recomendada."
                                        : "Completa la información institucional para desbloquear la ruta."}
                                    href={routes.chapter2.diagnosis}
                                    available
                                    completed={diagnosisCompleted}
                                    icon={ClipboardCheck}
                                    action={diagnosisCompleted
                                        ? "Ver diagnóstico"
                                        : "Continuar diagnóstico"}
                                />

                                <ProgressSummaryCard
                                    title="Ruta del diagnóstico"
                                    description={routeUnlocked
                                        ? "Tu ruta recomendada está disponible para confirmar."
                                        : "Se habilitará al completar el diagnóstico."}
                                    href={routes.chapter2.route}
                                    available={routeUnlocked}
                                    completed={isCompleted("route")}
                                    icon={Map}
                                    action="Consultar ruta"
                                />

                                <ProgressSummaryCard
                                    title="Evidencias"
                                    description={evidenceUnlocked
                                        ? "Reúne los documentos que respaldan tu proceso."
                                        : "Se habilitarán al completar el instrumento."}
                                    href={routes.chapter2.evidence}
                                    available={evidenceUnlocked}
                                    completed={isCompleted("evidence")}
                                    icon={FileCheck2}
                                    action="Ver evidencias"
                                />

                                {trackingUnlocked && (
                                    <ProgressSummaryCard
                                        title="Seguimiento"
                                        description={`Estado actual: ${trackingMock.status === "pending" ? "en revisión" : trackingMock.status}.`}
                                        href={routes.tracking}
                                        available
                                        completed={isCompleted("tracking")}
                                        icon={ShieldCheck}
                                        action="Ver seguimiento"
                                    />
                                )}

                                {trackingUnlocked && (
                                    <div className="rounded-2xl border border-primary/20 bg-primary-light p-5 shadow-sm">
                                        <div className="flex items-center gap-3 text-primary">
                                            <CheckCircle2 className="h-5 w-5" />
                                            <h3 className="font-bold text-text-primary">
                                                Resultado
                                            </h3>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-text-secondary">
                                            {trackingMock.status === "pending"
                                                ? "Tu información fue enviada y está pendiente de revisión."
                                                : "La revisión de tu proceso ya tiene un resultado disponible."}
                                        </p>

                                        <Link
                                            href={routes.tracking}
                                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                                        >
                                            Consultar resultado
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </>
    );
}

function ProgressSummaryCard({
    title,
    description,
    href,
    available,
    completed,
    icon: Icon,
    action,
}: {
    title: string;
    description: string;
    href: string;
    available: boolean;
    completed: boolean;
    icon: typeof ClipboardCheck;
    action: string;
}) {
    return (
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon className="h-5 w-5" />
                </div>

                {completed && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                )}
            </div>

            <h3 className="mt-4 font-bold text-text-primary">
                {title}
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-text-secondary">
                {description}
            </p>

            {available ? (
                <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                    {action}
                    <ArrowRight className="h-4 w-4" />
                </Link>
            ) : (
                <p className="mt-4 text-xs font-semibold text-text-muted">
                    Bloqueado hasta completar la etapa anterior
                </p>
            )}
        </article>
    );
}
