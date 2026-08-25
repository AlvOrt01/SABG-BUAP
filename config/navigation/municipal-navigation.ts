import type { NavigationConfig } from "@/types/navigation";

export const municipalNavigation: NavigationConfig = {
    items: [
        {
            label: "Inicio",
            path: "/municipal/dashboard",
            icon: "home",
        },

        {
            label: "Mi ruta",
            path: "/municipal/route",
            icon: "route",
            disabled: true,

            children: [
                {
                    label: "Diagnóstico",
                    path: "/municipal/diagnosis",
                    disabled: true,
                },
                {
                    label: "Ruta recomendada",
                    path: "/municipal/route",
                    disabled: true,
                },
                {
                    label: "Capítulo actual",
                    path: "/municipal/chapter",
                    disabled: true,
                },
                {
                    label: "Instrumento",
                    path: "/municipal/instrument",
                    disabled: true,
                },
                {
                    label: "Evidencias",
                    path: "/municipal/evidence",
                    disabled: true,
                },
            ],
        },

        {
            label: "Seguimiento",
            path: "/municipal/tracking",
            icon: "tracking",
            disabled: true,

            children: [
                {
                    label: "Estados de revisión",
                    path: "/municipal/tracking/review-status",
                },
                {
                    label: "Observaciones",
                    path: "/municipal/tracking/observations",
                },
                {
                    label: "Historial",
                    path: "/municipal/tracking/history",
                },
                {
                    label: "Reporte",
                    path: "/municipal/tracking/report",
                },
            ],
        },

        {
            label: "Recursos",
            path: "/municipal/resources",
            icon: "resources",

            children: [
                {
                    label: "Guía práctica",
                    path: "/municipal/resources/guide",
                },
                {
                    label: "Anexos",
                    path: "/municipal/resources/annexes",
                },
                {
                    label: "Casos prácticos",
                    path: "/municipal/resources/cases",
                },
                {
                    label: "IA y recursos digitales",
                    path: "/municipal/resources/digital",
                },
            ],
        },
    ],
};