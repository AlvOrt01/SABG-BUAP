"use client";

import Link from "next/link";
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
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-4 md:h-20 md:px-6 lg:px-8">
            <span className="hidden text-2xl font-bold text-primary lg:block">
                SABG-BUAP
            </span>

            <div className="ml-auto flex items-center gap-3 md:gap-5">
                <button
                    type="button"
                    aria-label="Notificaciones"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-primary-light hover:text-primary"
                >
                    <Bell className="h-5 w-5" />
                </button>

                <div className="hidden h-10 w-px bg-border md:block" />

                <div className="hidden text-right md:block">
                    <p className="text-sm font-semibold text-text-primary">
                        {userName}
                    </p>

                    <p className="text-xs text-text-secondary">
                        {userRole}
                    </p>
                </div>

                <Link
                    href="/municipal/profile"
                    aria-label="Abrir preferencias del perfil"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                    {initials || <UserRound className="h-5 w-5" />}
                </Link>
            </div>
        </header>
    );
}