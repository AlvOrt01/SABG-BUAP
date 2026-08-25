"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    ChartNoAxesColumnIncreasing,
    ChevronDown,
    ChevronRight,
    CircleHelp,
    FolderOpen,
    House,
    Lock,
    Map,
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

    onNavigate?: () => void;
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
    onNavigate,
}: DashboardSidebarProps) {
    const pathname = usePathname();

    const [openSection, setOpenSection] =
        useState<string | null>(null);

    function toggleSection(path: string) {
        setOpenSection((current) =>
            current === path ? null : path
        );
    }

    return (
        <aside className="flex h-full w-72 shrink-0 flex-col bg-sidebar px-5 py-6">
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
                            className="h-auto w-17.5 object-contain"
                        />
                    )}

                    <p className="mt-4 text-sm font-semibold leading-snug text-primary">
                        {organization.name}
                    </p>

                    {organization.area && (
                        <p className="mt-1 text-sm text-text-secondary">
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

                    const hasChildren =
                        item.children &&
                        item.children.length > 0;

                    const isOpen =
                        openSection === item.path ||
                        item.children?.some(
                            (child) =>
                                pathname === child.path ||
                                pathname.startsWith(
                                    `${child.path}/`
                                )
                        );

                    /*
                     * Elemento bloqueado
                     */
                    if (item.disabled) {
                        return (
                            <div key={item.path}>
                                <div
                                    className="
                    flex
                    cursor-not-allowed
                    items-center
                    gap-3
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-text-muted
                    opacity-60
                  "
                                >
                                    <Icon className="h-5 w-5" />

                                    <span className="flex-1">
                                        {item.label}
                                    </span>

                                    <Lock className="h-4 w-4" />
                                </div>
                            </div>
                        );
                    }

                    /*
                     * Elemento con submenú
                     */
                    if (hasChildren) {
                        return (
                            <div key={item.path}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleSection(item.path)
                                    }
                                    className={[
                                        "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-primary text-white shadow-sm"
                                            : "text-text-secondary hover:bg-primary-light hover:text-primary",
                                    ].join(" ")}
                                >
                                    <Icon className="h-5 w-5" />

                                    <span className="flex-1">
                                        {item.label}
                                    </span>

                                    {isOpen ? (
                                        <ChevronDown className="h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4" />
                                    )}
                                </button>

                                {/* Submenú */}
                                {isOpen && (
                                    <div className="ml-8 mt-1 flex flex-col gap-1">
                                        {item.children?.map(
                                            (child) => {
                                                const childActive =
                                                    pathname === child.path ||
                                                    pathname.startsWith(
                                                        `${child.path}/`
                                                    );

                                                if (child.disabled) {
                                                    return (
                                                        <div
                                                            key={child.path}
                                                            className="
                                flex
                                cursor-not-allowed
                                items-center
                                gap-2
                                rounded-lg
                                px-3
                                py-2
                                text-xs
                                text-text-muted
                                opacity-60
                              "
                                                        >
                                                            <Lock className="h-3 w-3" />

                                                            {child.label}
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <Link
                                                        key={child.path}
                                                        href={child.path}
                                                        onClick={onNavigate}
                                                        className={[
                                                            "rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                                                            childActive
                                                                ? "bg-primary-light text-primary"
                                                                : "text-text-secondary hover:bg-primary-light hover:text-primary",
                                                        ].join(" ")}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    /*
                     * Elemento normal
                     */
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={onNavigate}
                            className={[
                                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-text-secondary hover:bg-primary-light hover:text-primary",
                            ].join(" ")}
                        >
                            <Icon className="h-5 w-5" />

                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Centro de ayuda */}
            <div className="mt-auto">
                <Link
                    href="/municipal/help"
                    onClick={onNavigate}
                    className="
            flex
            items-center
            gap-3
            rounded-lg
            px-4
            py-3
            text-sm
            text-text-secondary
            transition-colors
            hover:bg-primary-light
            hover:text-primary
          "
                >
                    <CircleHelp className="h-5 w-5" />

                    Centro de ayuda
                </Link>
            </div>
        </aside>
    );
}