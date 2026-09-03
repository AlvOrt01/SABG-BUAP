import type { RecommendedChapter } from "@/types/route";

export const recommendedRouteMock: RecommendedChapter[] = [
    {
        id: "chapter-3",
        chapter: 3,
        title: "Planeación Estratégica Municipal",
        priority: "high",
        reason:
            "Se identificaron oportunidades para fortalecer la definición de objetivos, responsables, metas e indicadores.",
        expectedProduct:
            "Plan de mejora institucional.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 3 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Anexo 4 · Matriz de Planeación Estratégica",
            },
            {
                type: "case",
                label: "Caso práctico 3",
            },
        ],
    },
    {
        id: "chapter-4",
        chapter: 4,
        title: "Control Interno y Gestión de Riesgos",
        priority: "high",
        reason:
            "El diagnóstico refleja áreas de oportunidad relacionadas con prevención de riesgos y fortalecimiento de controles internos.",
        expectedProduct:
            "Sistema básico de control interno y matriz de riesgos.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 4 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Anexos 5 y 6 · Riesgos y Control Interno",
            },
            {
                type: "case",
                label: "Caso práctico 4",
            },
        ],
    },
    {
        id: "chapter-5",
        chapter: 5,
        title: "Transparencia y Rendición de Cuentas",
        priority: "medium",
        reason:
            "Se detectaron oportunidades para fortalecer el cumplimiento institucional y los mecanismos de rendición de cuentas.",
        expectedProduct:
            "Acciones de mejora para el cumplimiento y fortalecimiento institucional.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 5 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Anexo 7 · Lista de Verificación de Transparencia",
            },
            {
                type: "case",
                label: "Caso práctico 5",
            },
        ],
    },
];