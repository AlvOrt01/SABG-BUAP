import type { ReactNode } from "react";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

import type { NavigationConfig } from "@/types/navigation";

type DashboardShellProps = {
    children: ReactNode;

    navigation: NavigationConfig;

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
    user,
    organization,
}: DashboardShellProps) {
    return (
        <div className="flex min-h-screen bg-background">
            <DashboardSidebar
                navigation={navigation}
                organization={organization}
            />

            <div className="flex min-w-0 flex-1 flex-col">
                <DashboardHeader
                    userName={user.name}
                    userRole={user.role}
                    userInitials={user.initials}
                />

                {children}
            </div>
        </div>
    );
}