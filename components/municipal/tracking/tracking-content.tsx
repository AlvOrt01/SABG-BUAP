"use client";

import {
    CheckCircle2,
    Clock3,
    FileCheck2,
    FileText,
    MessageSquareText,
    ShieldCheck,
} from "lucide-react";

import { MunicipalWorkflowProgress } from "@/components/dashboard/progress/municipal-workflow-progress";
import { trackingMock } from "@/config/tracking";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function TrackingContent() {
    const {
        isUnlocked,
    } = useMunicipalProgress();

    const trackingUnlocked =
        isUnlocked("tracking");

    return (
        <>
            <MunicipalWorkflowProgress />

            {!trackingUnlocked ? (
                <TrackingLocked />
            ) : (
                <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
                    <div className="mx-auto max-w-7xl space-y-6">
                        {/* Encabezado */}
                        <section>
                            <p className="text-sm font-semibold text-primary">
                                Seguimiento
                            </p>

                            <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
                                Revisión de tu proceso
                            </h1>

                            <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
                                Consulta el estado de revisión de la
                                información y evidencias que enviaste.
                            </p>
                        </section>

                        {/* Estado principal */}
                        <ReviewStatusCard />

                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                            {/* Detalle */}
                            <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                                <div className="flex items-center gap-3">
                                    <FileCheck2 className="h-5 w-5 text-primary" />

                                    <h2 className="text-lg font-bold text-text-primary">
                                        Información enviada
                                    </h2>
                                </div>

                                <div className="mt-6 divide-y divide-border">
                                    <InformationRow
                                        label="Capítulo"
                                        value={`Capítulo ${trackingMock.chapter} · ${trackingMock.chapterTitle}`}
                                    />

                                    <InformationRow
                                        label="Instrumento"
                                        value={
                                            trackingMock.instrumentTitle
                                        }
                                    />

                                    <InformationRow
                                        label="Evidencias enviadas"
                                        value={`${trackingMock.evidenceCount} archivos PDF`}
                                    />

                                    <InformationRow
                                        label="Fecha de envío"
                                        value={
                                            trackingMock.submittedAt
                                        }
                                    />
                                </div>
                            </section>

                            {/* Proceso */}
                            <aside className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                                    Estado del proceso
                                </p>

                                <div className="mt-6">
                                    <TimelineItem
                                        title="Evidencias enviadas"
                                        description="La información fue enviada correctamente."
                                        completed
                                    />

                                    <TimelineItem
                                        title="Revisión"
                                        description={
                                            trackingMock.status ===
                                                "pending"
                                                ? "Esperando revisión del responsable."
                                                : "La revisión fue realizada."
                                        }
                                        completed={
                                            trackingMock.status !==
                                            "pending"
                                        }
                                        current={
                                            trackingMock.status ===
                                            "pending"
                                        }
                                    />

                                    <TimelineItem
                                        title="Resultado"
                                        description="Disponible después de completar la revisión."
                                        completed={
                                            trackingMock.status ===
                                            "approved"
                                        }
                                        current={
                                            trackingMock.status ===
                                            "approved"
                                        }
                                        last
                                    />
                                </div>
                            </aside>
                        </div>

                        {trackingMock.status ===
                            "observations" && (
                                <Observations />
                            )}

                        {trackingMock.status ===
                            "approved" && (
                                <Approved />
                            )}
                    </div>
                </main>
            )}
        </>
    );
}

function ReviewStatusCard() {
    if (
        trackingMock.status ===
        "observations"
    ) {
        return (
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                    <MessageSquareText className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />

                    <div>
                        <p className="font-bold text-text-primary">
                            Se requieren ajustes
                        </p>

                        <p className="mt-1 text-sm leading-6 text-text-secondary">
                            La revisión contiene observaciones.
                            Consulta los comentarios antes de enviar
                            una nueva versión.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (
        trackingMock.status ===
        "approved"
    ) {
        return (
            <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <div className="flex gap-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

                    <div>
                        <p className="font-bold text-text-primary">
                            Revisión completada
                        </p>

                        <p className="mt-1 text-sm leading-6 text-text-secondary">
                            La información y las evidencias fueron
                            revisadas satisfactoriamente.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-primary/20 bg-primary-light p-6">
            <div className="flex gap-4">
                <Clock3 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />

                <div>
                    <p className="font-bold text-text-primary">
                        Pendiente de revisión
                    </p>

                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                        Tus evidencias fueron enviadas
                        correctamente. En este momento están
                        esperando ser revisadas.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Observations() {
    return (
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
                <MessageSquareText className="h-5 w-5 text-primary" />

                <h2 className="text-lg font-bold text-text-primary">
                    Observaciones de la revisión
                </h2>
            </div>

            {trackingMock.observations?.length ? (
                <div className="mt-5 space-y-3">
                    {trackingMock.observations.map(
                        (observation, index) => (
                            <div
                                key={`${observation}-${index}`}
                                className="rounded-xl border border-border bg-background p-4"
                            >
                                <p className="text-sm leading-6 text-text-secondary">
                                    {observation}
                                </p>
                            </div>
                        )
                    )}
                </div>
            ) : (
                <p className="mt-4 text-sm text-text-secondary">
                    No hay observaciones disponibles.
                </p>
            )}
        </section>
    );
}

function Approved() {
    return (
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6 md:p-8">
            <div className="flex items-start gap-4">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />

                <div>
                    <h2 className="font-bold text-text-primary">
                        Capítulo validado
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                        El proceso de revisión fue completado.
                        El resultado correspondiente podrá
                        consultarse en la siguiente etapa.
                    </p>
                </div>
            </div>
        </section>
    );
}

function InformationRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="py-4 first:pt-0 last:pb-0">
            <p className="text-xs font-medium text-text-muted">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-text-primary">
                {value}
            </p>
        </div>
    );
}

function TimelineItem({
    title,
    description,
    completed = false,
    current = false,
    last = false,
}: {
    title: string;
    description: string;
    completed?: boolean;
    current?: boolean;
    last?: boolean;
}) {
    return (
        <div className="relative flex gap-4">
            {!last && (
                <div className="absolute left-3.75 top-8 h-[calc(100%-8px)] w-px bg-border" />
            )}

            <div
                className={[
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                    completed
                        ? "border-primary bg-primary text-white"
                        : current
                            ? "border-primary bg-primary-light text-primary"
                            : "border-border bg-background text-text-muted",
                ].join(" ")}
            >
                {completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                ) : (
                    <Clock3 className="h-4 w-4" />
                )}
            </div>

            <div className={last ? "" : "pb-7"}>
                <p className="text-sm font-semibold text-text-primary">
                    {title}
                </p>

                <p className="mt-1 text-xs leading-5 text-text-secondary">
                    {description}
                </p>
            </div>
        </div>
    );
}

function TrackingLocked() {
    return (
        <main className="flex-1 bg-background p-6 lg:p-8">
            <section className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
                <FileText className="mx-auto h-8 w-8 text-text-muted" />

                <h1 className="mt-4 text-2xl font-bold text-text-primary">
                    Seguimiento no disponible
                </h1>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                    El seguimiento estará disponible después de
                    completar y enviar tus evidencias.
                </p>
            </section>
        </main>
    );
}