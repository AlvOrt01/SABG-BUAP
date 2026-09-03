import type { NavigationConfig } from "@/types/navigation";

export const municipalNavigationBase: NavigationConfig = {
    items: [
        {
            label: "Dashboard",
            path: "/municipal/dashboard",
            icon: "home",
        },
        {
            label: "Mi ruta",
            path: "/municipal/diagnosis",
            icon: "route",
            children: [
                {
                    label: "Diagnóstico",
                    path: "/municipal/diagnosis",
                    step: "diagnosis",
                },
                {
                    label: "Ruta recomendada",
                    path: "/municipal/route",
                    step: "route",
                },
                {
                    label: "Instrumento",
                    path: "/municipal/instrument",
                    step: "instrument",
                },
                {
                    label: "Evidencias",
                    path: "/municipal/evidence",
                    step: "evidence",
                },
            ],
        },
        {
            label: "Seguimiento",
            path: "/municipal/tracking",
            icon: "tracking",
            step: "tracking",
        },
        {
            label: "Recursos",
            path: "/municipal/resources",
            icon: "resources",
        },
    ],
};