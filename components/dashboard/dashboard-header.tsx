"use client";

import { Bell, UserRound } from "lucide-react";

type DashboardHeaderProps = {
    userName: string;
    userRole: string;
    userInitials?: string;
};

export function DashboardHeader({
    userName,
    userRole,
    userInitials,
}: DashboardHeaderProps) {
    const initials =
        userInitials ??
        userName
            .split(" ")
            .slice(0, 2)
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase();

    return (
        <header className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-surface px-8">
            {/* Marca */}
            <div>
                <span className="text-2xl font-bold tracking-tight text-primary">
                    SABG-BUAP
                </span>
            </div>

            {/* Usuario */}
            <div className="flex items-center gap-5">
                <button
                    type="button"
                    aria-label="Notificaciones"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                >
                    <Bell className="h-5 w-5" />
                </button>

                <div className="h-10 w-px bg-border" />

                <div className="hidden text-right sm:block">
                    <p className="text-sm font-semibold text-text-primary">
                        {userName}
                    </p>

                    <p className="mt-0.5 text-xs font-medium text-text-secondary">
                        {userRole}
                    </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {initials.length > 0 ? (
                        initials
                    ) : (
                        <UserRound className="h-5 w-5" />
                    )}
                </div>
            </div>
        </header>
    );
}