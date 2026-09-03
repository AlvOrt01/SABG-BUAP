"use client";

import { useMemo, useState } from "react";

import {
    BookOpen,
    CheckCircle2,
    ChevronDown,
    CircleHelp,
    FileCheck2,
    FileUp,
    KeyRound,
    Map,
    MessageCircleQuestion,
    Search,
} from "lucide-react";

type HelpItem = {
    id: string;
    title: string;
    description: string;
    category: string;
};

const helpItems: HelpItem[] = [
    {
        id: "route",
        title: "No puedo continuar con mi ruta",
        description:
            "Verifica que hayas completado la etapa anterior. Las etapas de la ruta se habilitan progresivamente conforme avanzas en el proceso.",
        category: "Ruta",
    },
    {
        id: "evidence",
        title: "Problemas al cargar evidencias",
        description:
            "Las evidencias deben cargarse en formato PDF y cada archivo debe tener un tamaño máximo de 5 MB.",
        category: "Evidencias",
    },
    {
        id: "review",
        title: "¿Cómo funciona la revisión?",
        description:
            "Después de enviar tus evidencias, el proceso pasa a revisión. Podrás consultar el estado y las observaciones correspondientes desde Seguimiento.",
        category: "Seguimiento",
    },
    {
        id: "account",
        title: "Problemas con mi cuenta",
        description:
            "Consulta la información de tu perfil y verifica que los datos de tu usuario, municipio y área sean correctos.",
        category: "Cuenta",
    },
];

const workflow = [
    {
        number: 1,
        title: "Diagnóstico",
        description:
            "Responde el diagnóstico inicial para identificar las principales áreas de oportunidad.",
    },
    {
        number: 2,
        title: "Ruta",
        description:
            "Consulta los capítulos y herramientas recomendados a partir de tu diagnóstico.",
    },
    {
        number: 3,
        title: "Instrumento",
        description:
            "Completa el instrumento asignado para documentar las acciones de fortalecimiento.",
    },
    {
        number: 4,
        title: "Evidencias",
        description:
            "Adjunta los documentos que respaldan el trabajo realizado.",
    },
    {
        number: 5,
        title: "Revisión",
        description:
            "Consulta el estado de revisión y las observaciones realizadas.",
    },
    {
        number: 6,
        title: "Resultado",
        description:
            "Consulta el resultado final una vez concluido el proceso.",
    },
];

export function HelpCenterContent() {
    const [search, setSearch] = useState("");
    const [openItem, setOpenItem] =
        useState<string | null>(null);

    const filteredItems = useMemo(() => {
        const normalizedSearch =
            search.trim().toLowerCase();

        if (!normalizedSearch) {
            return helpItems;
        }

        return helpItems.filter((item) => {
            return (
                item.title
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                item.description
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                item.category
                    .toLowerCase()
                    .includes(normalizedSearch)
            );
        });
    }, [search]);

    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-6xl space-y-8">
                {/* Encabezado */}
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                            <CircleHelp className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                Centro de ayuda
                            </p>

                            <h1 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                                ¿Cómo podemos ayudarte?
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
                                Encuentra información sobre el uso de
                                SABG-BUAP y las diferentes etapas de tu
                                proceso municipal.
                            </p>

                            <div className="relative mt-6 max-w-2xl">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="Buscar en el centro de ayuda..."
                                    className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accesos rápidos */}
                <section>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-text-primary">
                            Ayuda rápida
                        </h2>

                        <p className="mt-1 text-sm text-text-secondary">
                            Consulta las dudas más comunes durante el
                            proceso.
                        </p>
                    </div>

                    {filteredItems.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {filteredItems.map((item) => (
                                <HelpCard
                                    key={item.id}
                                    item={item}
                                    open={openItem === item.id}
                                    onToggle={() =>
                                        setOpenItem((previous) =>
                                            previous === item.id
                                                ? null
                                                : item.id
                                        )
                                    }
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
                            <MessageCircleQuestion className="mx-auto h-8 w-8 text-text-muted" />

                            <p className="mt-3 font-semibold text-text-primary">
                                No encontramos resultados
                            </p>

                            <p className="mt-1 text-sm text-text-secondary">
                                Intenta buscar utilizando otras palabras.
                            </p>
                        </div>
                    )}
                </section>

                {/* Cómo funciona */}
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />

                        <h2 className="text-xl font-bold text-text-primary">
                            Cómo funciona tu proceso
                        </h2>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                        SABG-BUAP te guía de manera progresiva desde
                        el diagnóstico inicial hasta el resultado del
                        proceso.
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-xl border border-border bg-background p-5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                        {step.number}
                                    </div>

                                    <p className="font-semibold text-text-primary">
                                        {step.title}
                                    </p>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-text-secondary">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Guía rápida */}
                <section>
                    <h2 className="text-xl font-bold text-text-primary">
                        Temas frecuentes
                    </h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <TopicCard
                            icon={Map}
                            title="Mi ruta"
                            description="Consulta cómo avanzar entre las etapas."
                        />

                        <TopicCard
                            icon={FileCheck2}
                            title="Instrumentos"
                            description="Conoce cómo completar y guardar tu instrumento."
                        />

                        <TopicCard
                            icon={FileUp}
                            title="Evidencias"
                            description="Revisa los requisitos para adjuntar documentos."
                        />

                        <TopicCard
                            icon={KeyRound}
                            title="Mi cuenta"
                            description="Información sobre perfil y acceso."
                        />
                    </div>
                </section>

                {/* Soporte */}
                <section className="rounded-2xl border border-primary/20 bg-primary-light p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                            <MessageCircleQuestion className="h-5 w-5" />
                        </div>

                        <div className="flex-1">
                            <h2 className="font-bold text-text-primary">
                                ¿Aún necesitas ayuda?
                            </h2>

                            <p className="mt-1 text-sm leading-6 text-text-secondary">
                                Si no encuentras una respuesta, podrás
                                solicitar apoyo al responsable de la
                                plataforma.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Solicitar ayuda
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

function HelpCard({
    item,
    open,
    onToggle,
}: {
    item: HelpItem;
    open: boolean;
    onToggle: () => void;
}) {
    return (
        <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="flex w-full items-center gap-4 p-5 text-left"
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {item.category}
                    </p>

                    <h3 className="mt-1 font-semibold text-text-primary">
                        {item.title}
                    </h3>
                </div>

                <ChevronDown
                    className={[
                        "h-5 w-5 shrink-0 text-text-muted transition-transform",
                        open ? "rotate-180" : "",
                    ].join(" ")}
                />
            </button>

            {open && (
                <div className="border-t border-border px-5 py-4">
                    <p className="text-sm leading-6 text-text-secondary">
                        {item.description}
                    </p>
                </div>
            )}
        </article>
    );
}

function TopicCard({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) {
    return (
        <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-semibold text-text-primary">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
            </p>
        </article>
    );
}