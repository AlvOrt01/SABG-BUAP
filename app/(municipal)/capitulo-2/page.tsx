import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

import { MunicipalWorkflowProgress } from "@/components/dashboard/progress/municipal-workflow-progress";
import { routes } from "@/config/routes";

export default function Chapter2Page() {
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
                            Inicia aquí el proceso para conocer la situación actual de tu municipio y reunir la información necesaria para definir una ruta de mejora.
                        </p>

                        <Link
                            href={routes.chapter2.diagnosis}
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            <ClipboardCheck className="h-4 w-4" />
                            Iniciar diagnóstico
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </section>
                </div>
            </main>
        </>
    );
}
