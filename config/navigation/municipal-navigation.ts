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
        },
        {
            label: "Seguimiento",
            path: "/municipal/tracking",
            icon: "tracking",
        },
        {
            label: "Recursos",
            path: "/municipal/resources",
            icon: "resources",
        },
    ],
};