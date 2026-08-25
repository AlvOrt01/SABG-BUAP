"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    FolderOpen,
    House,
    Lock,
    Map,
    ChartNoAxesColumnIncreasing,
} from "lucide-react";

export function MobileBottomNavigation() {
    const pathname = usePathname();

    const items = [
        {
            label: "Inicio",
            path: "/municipal/dashboard",
            icon: House,
            disabled: false,
        },
        {
            label: "Ruta",
            path: "/municipal/route",
            icon: Map,
            disabled: true,
        },
        {
            label: "Progreso",
            path: "/municipal/tracking",
            icon: ChartNoAxesColumnIncreasing,
            disabled: true,
        },
        {
            label: "Recursos",
            path: "/municipal/resources",
            icon: FolderOpen,
            disabled: false,
        },
    ];

    return (
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface px-3 py-2 shadow-lg lg:hidden">
            <div className="grid grid-cols-4 gap-2">
                {items.map((item) => {
                    const Icon = item.icon;

                    const active = pathname === item.path;

                    if (item.disabled) {
                        return (
                            <div
                                key={item.path}
                                className="flex flex-col items-center justify-center gap-1 py-1 text-text-muted opacity-60"
                            >
                                <Lock className="h-5 w-5" />

                                <span className="text-[10px]">
                                    {item.label}
                                </span>
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={
                                active
                                    ? "flex flex-col items-center justify-center gap-1 rounded-xl bg-primary px-2 py-2 text-white"
                                    : "flex flex-col items-center justify-center gap-1 px-2 py-2 text-text-secondary"
                            }
                        >
                            <Icon className="h-5 w-5" />

                            <span className="text-[10px]">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}