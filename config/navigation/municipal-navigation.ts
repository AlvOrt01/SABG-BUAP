import type {
    NavigationConfig,
} from "@/types/navigation";

export const municipalNavigationBase: NavigationConfig = {
    items: [
        {
            id: "dashboard",
            label: "Dashboard",
            path: "/dashboard",
            icon: "home",
        },

        {
            id: "chapter-1",
            label: "Capítulo 1",
            description:
                "Preparación y Autoevaluación",
            icon: "chapter",
            chapter: 1,
            children: [
                {
                    label: "Recursos",
                    path: "/capitulo-1/recursos",
                },
                {
                    label: "Autoevaluación",
                    path: "/capitulo-1/autoevaluacion",
                },
            ],
        },

        {
            id: "chapter-2",
            label: "Capítulo 2",
            description:
                "Diagnóstico Municipal",
            icon: "chapter",
            chapter: 2,
            children: [
                {
                    label: "Diagnóstico",
                    path: "/capitulo-2/diagnostico",
                },
                {
                    label: "Ruta del diagnóstico",
                    path: "/capitulo-2/ruta",
                },
                {
                    label: "Instrumento",
                    path: "/capitulo-2/instrumento",
                },
                {
                    label: "Evidencias",
                    path: "/capitulo-2/evidencias",
                },
            ],
        },

        {
            id: "chapter-3",
            label: "Capítulo 3",
            description:
                "Planeación Estratégica",
            icon: "chapter",
            chapter: 3,
            children: [
                {
                    label: "Plan de Mejora",
                    path: "/capitulo-3/plan-mejora",
                },
                {
                    label: "Plan de Acción",
                    path: "/capitulo-3/plan-accion",
                },
                {
                    label: "Verificación de Cierre",
                    path: "/capitulo-3/verificacion-cierre",
                },
            ],
        },

        {
            id: "chapter-4",
            label: "Capítulo 4",
            description:
                "Gestión de Riesgos",
            icon: "chapter",
            chapter: 4,
            children: [
                {
                    label: "Control Interno",
                    path: "/capitulo-4/control-interno",
                },
                {
                    label: "Matriz de Riesgos",
                    path: "/capitulo-4/matriz-riesgos",
                },
            ],
        },

        {
            id: "chapter-5",
            label: "Capítulo 5",
            description:
                "Transparencia",
            icon: "chapter",
            chapter: 5,
            children: [
                {
                    label: "Lista de Cumplimiento",
                    path: "/capitulo-5/cumplimiento",
                },
                {
                    label: "Reporte Básico",
                    path: "/capitulo-5/reporte",
                },
            ],
        },

        {
            id: "chapter-6",
            label: "Capítulo 6",
            description:
                "Integridad y Ética",
            icon: "chapter",
            chapter: 6,
            children: [
                {
                    label: "Guía de Integridad",
                    path: "/capitulo-6/guia-integridad",
                },
                {
                    label: "Código de Ética y Conducta",
                    path: "/capitulo-6/codigo-etica",
                },
            ],
        },

        {
            id: "chapter-7",
            label: "Capítulo 7",
            description:
                "Participación Ciudadana",
            icon: "chapter",
            chapter: 7,
            children: [
                {
                    label: "Registro de Participación",
                    path: "/capitulo-7/registro",
                },
                {
                    label: "Programa Municipal",
                    path: "/capitulo-7/programa",
                },
            ],
        },

        {
            id: "chapter-8",
            label: "Capítulo 8",
            description:
                "Monitoreo y Evaluación",
            icon: "chapter",
            chapter: 8,
            children: [
                {
                    label: "Indicadores de Desempeño",
                    path: "/capitulo-8/indicadores",
                },
                {
                    label: "Informe de Avance",
                    path: "/capitulo-8/informe-avance",
                },
            ],
        },

        {
            id: "resources",
            label: "Recursos",
            path: "/recursos",
            icon: "resources",
        },

        {
            id: "tracking",
            label: "Seguimiento",
            path: "/seguimiento",
            icon: "tracking",
        },
    ],
};