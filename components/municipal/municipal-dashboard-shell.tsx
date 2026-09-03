"use client";

import type { ReactNode } from "react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { useMunicipalNavigation } from "@/hooks/use-municipal-navigation";

type MunicipalDashboardShellProps = {
    children: ReactNode;

    user: {
        name: string;
        role: string;
        initials?: string;
        email?: string;
    };

    organization?: {
        name: string;
        area?: string;
        logo?: string;
    };
};

export function MunicipalDashboardShell({
    children,
    user,
    organization,
}: MunicipalDashboardShellProps) {
    const navigation = useMunicipalNavigation();

    return (
        <DashboardShell
            navigation={navigation}
            homePath="/municipal/dashboard"
            profilePath="/municipal/profile"
            user={user}
            organization={organization}
        >
            {children}
        </DashboardShell>
    );
}