"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

import type { NavigationConfig } from "@/types/navigation";

type DashboardShellProps = {
    children: ReactNode;

    navigation: NavigationConfig;

    homePath?: string;

    user: {
        name: string;
        role: string;
        initials?: string;
    };

    organization?: {
        name: string;
        area?: string;
        logo?: string;
    };
};

export function DashboardShell({
    children,
    navigation,
    homePath,
    user,
    organization,
}: DashboardShellProps) {
    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    return (
        <div className="flex min-h-screen bg-background">
            {/* Desktop sidebar */}
            <div className="hidden border-r border-border lg:block">
                <DashboardSidebar
                    navigation={navigation}
                    organization={organization}
                />
            </div>

            {/* Mobile / Tablet overlay */}
            {sidebarOpen && (
                <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            {/* Mobile / Tablet sidebar */}
            <div
                className={[
                    "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-sidebar shadow-xl transition-transform duration-300 lg:hidden",
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full",
                ].join(" ")}
            >
                <DashboardSidebar
                    navigation={navigation}
                    organization={organization}
                    onNavigate={() =>
                        setSidebarOpen(false)
                    }
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
                <DashboardHeader
                    userName={user.name}
                    userRole={user.role}
                    userInitials={user.initials}
                    homePath={homePath}
                    onMenuClick={() =>
                        setSidebarOpen(true)
                    }
                />

                {children}
            </div>
        </div>
    );
}