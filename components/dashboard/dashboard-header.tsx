"use client";

import Link from "next/link";

import {
    Bell,
    Menu,
    UserRound,
} from "lucide-react";

type DashboardHeaderProps = {
    userName: string;
    userRole: string;
    userInitials?: string;

    homePath?: string;
    profilePath?: string;

    onMenuClick?: () => void;
};

export function DashboardHeader({
    userName,
    userRole,
    userInitials,
    homePath = "/",
    profilePath = "/",
    onMenuClick,
}: DashboardHeaderProps) {
    const initials =
        userInitials ??
        userName
            .split(" ")
            .slice(0, 2)
            .map((word) =>
                word.charAt(0)
            )
            .join("")
            .toUpperCase();

    return (
        <header className="flex h-16 shrink-0 items-center border-b border-border bg-surface px-4 md:h-20 md:px-6 lg:px-8">
            {/* Mobile / Tablet */}
            <button
                type="button"
                onClick={onMenuClick}
                aria-label="Abrir menú de navegación"
                className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-background hover:text-primary lg:hidden"
            >
                <Menu className="h-5 w-5" />
            </button>

            {/* Marca */}
            <Link
                href={homePath}
                className="hidden text-2xl font-bold text-primary transition-opacity hover:opacity-80 lg:block"
            >
                SABG-BUAP
            </Link>

            {/* Usuario */}
            <div className="ml-auto flex items-center gap-2 md:gap-5">
                <button
                    type="button"
                    aria-label="Notificaciones"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
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
                    href={profilePath}
                    aria-label="Abrir perfil"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                    {initials || (
                        <UserRound className="h-5 w-5" />
                    )}
                </Link>
            </div>
        </header>
    );
}