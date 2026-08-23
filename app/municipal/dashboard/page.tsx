import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Headphones,
} from "lucide-react";

import { WorkflowProgress } from "@/components/dashboard/progress/workflow-progress";

import { sabgWorkflow } from "@/config/sabg-buap/workflow";

export const metadata = {
  title: "Inicio",
};

export default function MunicipalDashboardPage() {
  return (
    <>
      <WorkflowProgress
        steps={sabgWorkflow}
        currentStep="diagnosis"
      />

      <main className="flex-1 bg-background p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Bienvenida */}
          <section className="rounded-2xl border border-border bg-surface p-10 shadow-sm">
            <div className="flex items-center justify-between gap-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-text-primary">
                  Bienvenido al SABG-BUAP
                </h1>

                <p className="mt-4 max-w-4xl text-lg leading-relaxed text-text-secondary">
                  Sistema de Administración de Bienes
                  Gubernamentales. Inicie el proceso de diagnóstico
                  para evaluar y gestionar el patrimonio municipal de
                  manera eficiente y transparente.
                </p>

                <Link
                  href="/municipal/diagnosis"
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
                >
                  Comenzar diagnóstico

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

            </div>
          </section>

          {/* Municipio */}
          <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <header className="flex items-center gap-3 border-b border-border px-8 py-5">
              <Building2 className="h-6 w-6 text-primary" />

              <h2 className="text-xl font-semibold text-primary">
                Tu municipio
              </h2>
            </header>

            <div className="grid gap-8 px-8 py-7 md:grid-cols-3">
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
          className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform hover:scale-105"
        >
          <Headphones className="h-6 w-6" />
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