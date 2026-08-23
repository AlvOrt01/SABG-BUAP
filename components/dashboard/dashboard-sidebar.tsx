"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    CircleHelp,
    FolderOpen,
    House,
    Map,
    ChartNoAxesColumnIncreasing,
} from "lucide-react";

import type {
    NavigationConfig,
    NavigationIcon,
} from "@/types/navigation";

type DashboardSidebarProps = {
    navigation: NavigationConfig;

    organization?: {
        name: string;
        area?: string;
        logo?: string;
    };
};

const navigationIcons = {
    home: House,
    route: Map,
    tracking: ChartNoAxesColumnIncreasing,
    resources: FolderOpen,
    help: CircleHelp,
} satisfies Record<NavigationIcon, React.ElementType>;

export function DashboardSidebar({
    navigation,
    organization,
}: DashboardSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="flex w-72 shrink-0 flex-col border-r border-border bg-sidebar px-5 py-6">
            {/* Organización */}
            {organization && (
                <div className="mb-8 px-2">
                    {organization.logo && (
                        <Image
                            src={organization.logo}
                            alt={organization.name}
                            width={70}
                            height={70}
                            priority
                            className="h-auto w-[70px] object-contain"
                        />
                    )}

                    <p className="mt-4 text-sm font-semibold leading-snug text-primary">
                        {organization.name}
                    </p>

                    {organization.area && (
                        <p className="mt-1 text-sm font-medium text-text-secondary">
                            {organization.area}
                        </p>
                    )}
                </div>
            )}

            {/* Navegación */}
            <nav className="flex flex-col gap-2">
                {navigation.items.map((item) => {
                    const Icon = navigationIcons[item.icon];

                    const isActive =
                        pathname === item.path ||
                        pathname.startsWith(`${item.path}/`);

                    if (item.disabled) {
                        return (
                            <div
                                key={item.path}
                                className="flex cursor-not-allowed items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-muted opacity-60"
                            >
                                <Icon className="h-5 w-5" />

                                {item.label}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={
                                isActive
                                    ? "flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm"
                                    : "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                            }
                        >
                            <Icon className="h-5 w-5" />

                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Ayuda */}
            <div className="mt-auto pt-8">
                <Link
                    href="/municipal/help"
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                >
                    <CircleHelp className="h-5 w-5" />

                    Ayuda
                </Link>
            </div>
        </aside>
    );
}