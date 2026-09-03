import type { MunicipalInstrument } from "@/types/instrument";

export const municipalInstrumentMock: MunicipalInstrument = {
    id: "strategic-planning-matrix",
    annex: 4,
    chapter: 3,

    title: "Matriz de Planeación Estratégica",

    description:
        "Este instrumento permite transformar los hallazgos del diagnóstico en acciones concretas de mejora municipal.",

    objective:
        "Definir objetivos, acciones, responsables, indicadores y metas para atender las áreas prioritarias identificadas.",

    expectedProduct:
        "Plan de mejora institucional.",

    fields: [
        {
            id: "problem",
            label: "Problema o hallazgo identificado",
            description:
                "Describe el problema principal que será atendido.",
            placeholder:
                "Ej. Retrasos constantes en la atención de servicios municipales.",
            type: "textarea",
            required: true,
        },
        {
            id: "objective",
            label: "Objetivo de mejora",
            description:
                "Define qué resultado desea alcanzar el municipio.",
            placeholder:
                "Ej. Reducir los tiempos de atención de solicitudes ciudadanas.",
            type: "textarea",
            required: true,
        },
        {
            id: "action",
            label: "Acción propuesta",
            description:
                "Indica qué acción concreta se realizará.",
            placeholder:
                "Ej. Implementar un mecanismo de seguimiento de solicitudes.",
            type: "textarea",
            required: true,
        },
        {
            id: "responsible",
            label: "Área responsable",
            type: "select",
            required: true,
            options: [
                {
                    label: "Presidencia Municipal",
                    value: "presidencia",
                },
                {
                    label: "Contraloría Municipal",
                    value: "contraloria",
                },
                {
                    label: "Tesorería",
                    value: "tesoreria",
                },
                {
                    label: "Secretaría del Ayuntamiento",
                    value: "secretaria",
                },
                {
                    label: "Unidad de Transparencia",
                    value: "transparencia",
                },
                {
                    label: "Otra",
                    value: "otra",
                },
            ],
        },
        {
            id: "indicator",
            label: "Indicador",
            description:
                "Define cómo se medirá el cumplimiento de la acción.",
            placeholder:
                "Ej. Porcentaje de solicitudes atendidas dentro del plazo establecido.",
            type: "text",
            required: true,
        },
        {
            id: "goal",
            label: "Meta",
            placeholder:
                "Ej. Atender el 90% de las solicitudes en tiempo.",
            type: "text",
            required: true,
        },
        {
            id: "period",
            label: "Periodo de ejecución",
            placeholder:
                "Ej. Octubre 2026 - Enero 2027",
            type: "text",
            required: true,
        },
    ],
};