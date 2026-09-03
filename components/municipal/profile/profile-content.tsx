"use client";

import {
    Building2,
    Mail,
    ShieldCheck,
    UserRound,
} from "lucide-react";

export function ProfileContent() {
    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-5xl space-y-6">
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                            MH
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                Perfil municipal
                            </p>

                            <h1 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                                María Hernández López
                            </h1>

                            <p className="mt-1 text-sm text-text-secondary">
                                Usuario municipal
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-2">
                    <ProfileCard
                        icon={Mail}
                        label="Correo"
                        value="maria.hernandez@sabg.local"
                    />

                    <ProfileCard
                        icon={ShieldCheck}
                        label="Rol"
                        value="Usuario municipal"
                    />

                    <ProfileCard
                        icon={Building2}
                        label="Municipio"
                        value="Municipio Demo SABG-BUAP 001"
                    />

                    <ProfileCard
                        icon={UserRound}
                        label="Área"
                        value="Contraloría Municipal"
                    />
                </section>
            </div>
        </main>
    );
}

function ProfileCard({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon className="h-5 w-5" />
                </div>

                <div>
                    <p className="text-xs font-medium text-text-muted">
                        {label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-text-primary">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}