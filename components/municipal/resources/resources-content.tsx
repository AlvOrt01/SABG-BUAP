"use client";

import {
    BookOpen,
    Bot,
    BriefcaseBusiness,
    FileText,
    ArrowRight,
} from "lucide-react";

type ResourceItem = {
    id: string;
    title: string;
    description: string;
    detail: string;
    icon: React.ElementType;
    actionLabel: string;
};

const resources: ResourceItem[] = [
    {
        id: "guide",
        title: "Guía práctica",
        description:
            "Consulta el documento principal que acompaña el proceso de fortalecimiento municipal.",
        detail:
            "Incluye los capítulos, conceptos, metodologías y orientaciones necesarias para desarrollar tu ruta.",
        icon: BookOpen,
        actionLabel: "Consultar guía",
    },
    {
        id: "annexes",
        title: "Anexos",
        description:
            "Accede a los instrumentos y materiales complementarios asociados a los capítulos de la guía.",
        detail:
            "Aquí encontrarás matrices, formatos, listas de verificación y herramientas de apoyo.",
        icon: FileText,
        actionLabel: "Ver anexos",
    },
    {
        id: "cases",
        title: "Casos prácticos",
        description:
            "Revisa ejemplos que muestran cómo pueden aplicarse los contenidos de la guía en situaciones municipales.",
        detail:
            "Los casos sirven como referencia para comprender mejor la aplicación de los capítulos y herramientas.",
        icon: BriefcaseBusiness,
        actionLabel: "Ver casos prácticos",
    },
    {
        id: "digital",
        title: "IA y recursos digitales",
        description:
            "Consulta herramientas digitales que pueden apoyar las actividades desarrolladas durante tu ruta.",
        detail:
            "Incluye recursos tecnológicos y herramientas de inteligencia artificial que pueden complementar el trabajo municipal.",
        icon: Bot,
        actionLabel: "Explorar recursos",
    },
];

export function ResourcesContent() {
    function handleResourceClick(
        resourceId: string
    ) {
        /*
         * Temporal.
         *
         * Aquí después conectaremos cada recurso
         * con su página, archivo PDF o colección.
         */
        console.log(
            "Resource selected:",
            resourceId
        );
    }

    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Encabezado */}
                <section>
                    <p className="text-sm font-semibold text-primary">
                        Recursos
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
                        Biblioteca de recursos
                    </h1>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
                        Consulta los materiales que acompañan tu
                        proceso de fortalecimiento municipal.
                        Puedes acceder a estos recursos en cualquier
                        momento, independientemente de la etapa en
                        la que te encuentres.
                    </p>
                </section>

                {/* Recursos */}
                <section className="grid gap-5 md:grid-cols-2">
                    {resources.map(
                        (resource) => {
                            const Icon =
                                resource.icon;

                            return (
                                <article
                                    key={
                                        resource.id
                                    }
                                    className="flex min-h-64 flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h2 className="mt-5 text-xl font-bold text-text-primary">
                                        {
                                            resource.title
                                        }
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        {
                                            resource.description
                                        }
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-text-muted">
                                        {
                                            resource.detail
                                        }
                                    </p>

                                    <div className="mt-auto pt-6">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleResourceClick(
                                                    resource.id
                                                )
                                            }
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-75"
                                        >
                                            {
                                                resource.actionLabel
                                            }

                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </article>
                            );
                        }
                    )}
                </section>

                {/* Nota */}
                <section className="rounded-2xl border border-primary/20 bg-primary-light p-5 md:p-6">
                    <div className="flex gap-4">
                        <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                        <div>
                            <p className="text-sm font-semibold text-text-primary">
                                Recursos disponibles durante todo el proceso
                            </p>

                            <p className="mt-1 text-sm leading-6 text-text-secondary">
                                Estos materiales no forman parte de una
                                etapa específica. Puedes consultarlos
                                cuando necesites apoyo para completar tu
                                ruta, instrumento o evidencias.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}