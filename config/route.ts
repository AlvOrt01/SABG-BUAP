import type { RecommendedChapter } from "@/types/route";

export const recommendedRouteMock: RecommendedChapter[] = [
    {
        id: "chapter-1",
        chapter: 1,
        title: "Preparación y Autoevaluación",
        priority: "high",
        reason:
            "Permite establecer una base común sobre los principios del Buen Gobierno y reconocer la situación inicial del municipio.",
        expectedProduct:
            "Autoevaluación inicial de los componentes del Buen Gobierno.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 1 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Formato de Autoevaluación del Capítulo 1",
            },
            {
                type: "case",
                label: "Marco de referencia de Buen Gobierno Municipal",
            },
        ],
    },

    {
        id: "chapter-2",
        chapter: 2,
        title: "Diagnóstico Municipal",
        priority: "high",
        reason:
            "Permite identificar las principales necesidades, capacidades institucionales y áreas de oportunidad del municipio.",
        expectedProduct:
            "Diagnóstico municipal y ruta de fortalecimiento.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 2 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Instrumento de Diagnóstico Municipal",
            },
            {
                type: "case",
                label: "Caso práctico 2",
            },
        ],
    },

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

    {
        id: "chapter-6",
        chapter: 6,
        title: "Integridad y Ética Pública",
        priority: "medium",
        reason:
            "Permite fortalecer los principios de integridad, ética pública y conducta institucional de las personas servidoras públicas.",
        expectedProduct:
            "Lineamientos y acciones para fortalecer la integridad y la ética institucional.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 6 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Guía de Integridad y Código de Ética",
            },
            {
                type: "case",
                label: "Caso práctico 6",
            },
        ],
    },

    {
        id: "chapter-7",
        chapter: 7,
        title: "Participación Ciudadana",
        priority: "medium",
        reason:
            "Permite fortalecer los mecanismos mediante los cuales la ciudadanía participa en las decisiones y acciones del gobierno municipal.",
        expectedProduct:
            "Programa municipal de participación ciudadana.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 7 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Registro y Programa de Participación Ciudadana",
            },
            {
                type: "case",
                label: "Caso práctico 7",
            },
        ],
    },

    {
        id: "chapter-8",
        chapter: 8,
        title: "Monitoreo y Evaluación",
        priority: "medium",
        reason:
            "Permite establecer mecanismos de seguimiento para conocer los avances y resultados de las acciones implementadas.",
        expectedProduct:
            "Sistema básico de indicadores e informe de avance.",
        resources: [
            {
                type: "guide",
                label: "Capítulo 8 de la Guía Práctica",
            },
            {
                type: "annex",
                label: "Formato de Indicadores e Informe de Avance",
            },
            {
                type: "case",
                label: "Caso práctico 8",
            },
        ],
    },
];