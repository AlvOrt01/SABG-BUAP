"use client";

import {
    Building2,
    Bot,
} from "lucide-react";

import { MunicipalWorkflowProgress } from "@/components/dashboard/progress/municipal-workflow-progress";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

import { StartDiagnosisButton } from "@/app/municipal/dashboard/components/start-diagnosis-button";
import { MunicipalProgressHeader } from "@/components/dashboard/progress/municipal-progress-header";

export function MunicipalDashboardContent() {
    const { currentStep } = useMunicipalProgress();

    return (
        <>
            <MunicipalProgressHeader />

            <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    {/* Bienvenida */}
                    <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8 lg:p-10">
                        <div className="flex items-center justify-between gap-10">
                            <div className="max-w-4xl">
                                <h1 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl lg:text-text-primary">
                                    ¡Hola, María!
                                </h1>

                                <p className="mt-4 max-w-4xl text-sm leading-6 text-text-secondary md:text-base md:leading-7 lg:text-lg">
                                    Sistema de Administración de Bienes Gubernamentales.
                                    Inicie el proceso de diagnóstico para evaluar y
                                    gestionar el patrimonio municipal de manera eficiente
                                    y transparente.
                                </p>

                                <div className="mt-8">
                                    <StartDiagnosisButton />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Municipio */}
                    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                        <header className="flex items-center gap-3 border-b border-border px-6 py-5 lg:px-8">
                            <Building2 className="h-6 w-6 text-primary" />

                            <h2 className="text-xl font-semibold text-primary">
                                Tu municipio
                            </h2>
                        </header>

                        <div className="grid gap-6 px-6 py-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                            <MunicipalInformation
                                label="Municipio"
                                value="Municipio Demo SABG-BUAP 001"
                            />

                            <MunicipalInformation
                                label="Área"
                                value="Contraloría Municipal"
                            />

                            <MunicipalInformation
                                label="Responsable"
                                value="María Hernández López"
                            />
                        </div>
                    </section>
                </div>

                {/* Asistente */}
                <button
                    type="button"
                    aria-label="Abrir Asistente SABG-BUAP"
                    className="fixed bottom-8 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform hover:scale-105 lg:right-8"
                >
                    <Bot className="h-6 w-6" />
                </button>
            </main>
        </>
    );
}

type MunicipalInformationProps = {
    label: string;
    value: string;
};

function MunicipalInformation({
    label,
    value,
}: MunicipalInformationProps) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {label}
            </p>

            <p className="mt-2 text-base font-medium text-text-primary">
                {value}
            </p>
        </div>
    );
}