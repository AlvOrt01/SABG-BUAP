import type {
    NavigationConfig,
} from "@/types/navigation";

import { routes } from "@/config/routes";

export const municipalNavigationBase: NavigationConfig = {
    items: [
        {
            id: "dashboard",
            label: "Dashboard",
            path: routes.dashboard,
            icon: "home",
        },

        {
            id: "chapter-1",
            label: "Capítulo 1",
            description:
                "Preparación y Autoevaluación",
            path: routes.chapter1.home,
            icon: "chapter",
            chapter: 1,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter1.home,
                },
                {
                    label: "Recursos",
                    path: routes.chapter1.resources,
                },
                {
                    label: "Autoevaluación",
                    path: routes.chapter1.selfAssessment,
                },
            ],
        },

        {
            id: "chapter-2",
            label: "Capítulo 2",
            description:
                "Diagnóstico Municipal",
            path: routes.chapter2.home,
            icon: "chapter",
            chapter: 2,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter2.home,
                },
                {
                    label: "Diagnóstico",
                    path: routes.chapter2.diagnosis,
                    step: "diagnosis",
                },
                {
                    label: "Ruta del diagnóstico",
                    path: routes.chapter2.route,
                    step: "route",
                },
                {
                    label: "Instrumento",
                    path: routes.chapter2.instrument,
                    step: "instrument",
                },
                {
                    label: "Evidencias",
                    path: routes.chapter2.evidence,
                    step: "evidence",
                },
                {
                    label: "Seguimiento",
                    path: routes.tracking,
                    step: "tracking",
                },
            ],
        },

        {
            id: "chapter-3",
            label: "Capítulo 3",
            description:
                "Planeación Estratégica",
            path: routes.chapter3.home,
            icon: "chapter",
            chapter: 3,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter3.home,
                },
                {
                    label: "Plan de Mejora",
                    path: routes.chapter3.improvementPlan,
                },
                {
                    label: "Plan de Acción",
                    path: routes.chapter3.actionPlan,
                },
                {
                    label: "Verificación de Cierre",
                    path: routes.chapter3.closureVerification,
                },
            ],
        },

        {
            id: "chapter-4",
            label: "Capítulo 4",
            description:
                "Gestión de Riesgos",
            path: routes.chapter4.home,
            icon: "chapter",
            chapter: 4,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter4.home,
                },
                {
                    label: "Control Interno",
                    path: routes.chapter4.internalControl,
                },
                {
                    label: "Matriz de Riesgos",
                    path: routes.chapter4.riskMatrix,
                },
            ],
        },

        {
            id: "chapter-5",
            label: "Capítulo 5",
            description:
                "Transparencia",
            path: routes.chapter5.home,
            icon: "chapter",
            chapter: 5,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter5.home,
                },
                {
                    label: "Lista de Cumplimiento",
                    path: routes.chapter5.compliance,
                },
                {
                    label: "Reporte Básico",
                    path: routes.chapter5.report,
                },
            ],
        },

        {
            id: "chapter-6",
            label: "Capítulo 6",
            description:
                "Integridad y Ética",
            path: routes.chapter6.home,
            icon: "chapter",
            chapter: 6,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter6.home,
                },
                {
                    label: "Guía de Integridad",
                    path: routes.chapter6.integrityGuide,
                },
                {
                    label: "Código de Ética y Conducta",
                    path: routes.chapter6.ethicsCode,
                },
            ],
        },

        {
            id: "chapter-7",
            label: "Capítulo 7",
            description:
                "Participación Ciudadana",
            path: routes.chapter7.home,
            icon: "chapter",
            chapter: 7,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter7.home,
                },
                {
                    label: "Registro de Participación",
                    path: routes.chapter7.register,
                },
                {
                    label: "Programa Municipal",
                    path: routes.chapter7.program,
                },
            ],
        },

        {
            id: "chapter-8",
            label: "Capítulo 8",
            description:
                "Monitoreo y Evaluación",
            path: routes.chapter8.home,
            icon: "chapter",
            chapter: 8,
            children: [
                {
                    label: "Inicio",
                    path: routes.chapter8.home,
                },
                {
                    label: "Indicadores de Desempeño",
                    path: routes.chapter8.indicators,
                },
                {
                    label: "Informe de Avance",
                    path: routes.chapter8.progressReport,
                },
            ],
        },

        {
            id: "resources",
            label: "Recursos",
            path: routes.resources,
            icon: "resources",
        },

    ],
};