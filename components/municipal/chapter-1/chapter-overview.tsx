import Link from "next/link";

import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ClipboardCheck,
    Gavel,
    Landmark,
    Scale,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import { routes } from "@/config/routes";

const concepts = [
    {
        title: "Legalidad",
        description:
            "Actuación de las instituciones públicas conforme al marco jurídico aplicable.",
        icon: Scale,
    },
    {
        title: "Transparencia",
        description:
            "Apertura de la información pública y acceso de la ciudadanía a la gestión gubernamental.",
        icon: BookOpen,
    },
    {
        title: "Rendición de cuentas",
        description:
            "Responsabilidad de las instituciones y personas servidoras públicas frente a la sociedad.",
        icon: ShieldCheck,
    },
    {
        title: "Eficiencia",
        description:
            "Uso adecuado de los recursos públicos para alcanzar resultados concretos.",
        icon: CheckCircle2,
    },
    {
        title: "Participación social",
        description:
            "Incorporación de ciudadanía, sociedad civil y sector privado en la toma de decisiones.",
        icon: Users,
    },
    {
        title: "Integridad",
        description:
            "Conducta ética y profesional de las personas servidoras públicas.",
        icon: Sparkles,
    },
];

const governmentComponents = [
    "Transparencia y rendición de cuentas.",
    "Atención de demandas y necesidades sociales.",
    "Participación social.",
    "Instituciones eficaces, eficientes e inclusivas.",
    "Personas servidoras públicas íntegras y profesionales.",
];

const legalFramework = [
    "Constitución Política de los Estados Unidos Mexicanos.",
    "Constitución Política del Estado Libre y Soberano de Puebla.",
    "Ley Orgánica Municipal del Estado de Puebla.",
    "Ley de Planeación y legislación federal vinculada con las competencias municipales.",
    "Normativa en materia de transparencia y acceso a la información.",
];

export function ChapterOverview() {
    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-7">
                {/* Encabezado */}
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold text-primary">
                                Capítulo 1
                            </p>

                            <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
                                Fundamentos del Buen Gobierno y la Gobernanza Municipal
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-text-secondary">
                                Este capítulo introduce los principios
                                básicos que orientan el Buen Gobierno
                                Municipal antes de comenzar con la
                                aplicación de instrumentos y procesos
                                posteriores.
                            </p>
                        </div>

                        <div className="rounded-xl border border-primary/20 bg-primary-light px-5 py-4 lg:w-64">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                Estado del capítulo
                            </p>

                            <p className="mt-2 font-semibold text-text-primary">
                                En preparación
                            </p>

                            <p className="mt-1 text-xs leading-5 text-text-secondary">
                                Consulta los recursos antes de realizar
                                la autoevaluación.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Objetivo */}
                <section className="rounded-2xl border border-primary/20 bg-primary-light p-6 md:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                            <Landmark className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                Objetivo del capítulo
                            </p>

                            <h2 className="mt-2 text-lg font-bold text-text-primary">
                                Comprender las bases del Buen Gobierno Municipal
                            </h2>

                            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
                                Reconocer los principios, componentes y
                                fundamentos jurídicos que orientan una
                                Administración Pública municipal íntegra,
                                eficaz, eficiente, transparente y abierta
                                a la participación social.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conceptos */}
                <section>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Fundamentos
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-text-primary">
                            Conceptos básicos
                        </h2>

                        <p className="mt-1 text-sm text-text-secondary">
                            Principios que orientan el ejercicio del
                            Buen Gobierno.
                        </p>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {concepts.map((concept) => {
                            const Icon = concept.icon;

                            return (
                                <article
                                    key={concept.title}
                                    className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-4 font-semibold text-text-primary">
                                        {concept.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        {concept.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Componentes y marco jurídico */}
                <section className="grid gap-6 lg:grid-cols-2">
                    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-7">
                        <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-primary" />

                            <h2 className="text-lg font-bold text-text-primary">
                                Componentes del Buen Gobierno
                            </h2>
                        </div>

                        <div className="mt-5 space-y-3">
                            {governmentComponents.map(
                                (component) => (
                                    <div
                                        key={component}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                                        <p className="text-sm leading-6 text-text-secondary">
                                            {component}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </article>

                    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-7">
                        <div className="flex items-center gap-3">
                            <Gavel className="h-5 w-5 text-primary" />

                            <h2 className="text-lg font-bold text-text-primary">
                                Marco jurídico municipal
                            </h2>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-text-secondary">
                            La aplicación del Buen Gobierno debe
                            realizarse en congruencia con el marco
                            constitucional, estatal y municipal vigente.
                        </p>

                        <div className="mt-5 space-y-3">
                            {legalFramework.map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                        <p className="text-sm leading-6 text-text-secondary">
                                            {item}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </article>
                </section>

                {/* Qué realizarás */}
                <section>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Actividades
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-text-primary">
                        ¿Qué realizarás en este capítulo?
                    </h2>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <Link
                            href={
                                routes.chapter1.resources
                            }
                            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                                    <BookOpen className="h-5 w-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                        Paso 1
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-text-primary">
                                        Consultar recursos
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Revisa la guía y el marco normativo
                                        relacionado con los principios del
                                        Buen Gobierno Municipal.
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                                        Ver recursos

                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={
                                routes.chapter1.selfAssessment
                            }
                            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                                    <ClipboardCheck className="h-5 w-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                        Paso 2
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-text-primary">
                                        Realizar autoevaluación
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Identifica el nivel de aplicación de
                                        los componentes del Buen Gobierno en
                                        el municipio.
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                                        Iniciar autoevaluación

                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}