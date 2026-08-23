"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        href: "/municipal/dashboard",
        label: "Inicio",
        icon: "⌂",
    },
    {
        href: "/municipal/route",
        label: "Mi ruta",
        icon: "▣",
    },
    {
        href: "/municipal/tracking",
        label: "Seguimiento",
        icon: "▤",
    },
    {
        href: "/municipal/resources",
        label: "Recursos",
        icon: "▱",
    },
];

export function MunicipalSidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex w-72 shrink-0 flex-col border-r border-border bg-sidebar px-5 py-6">
            <div className="mb-8">
                <Image
                    src="/logotipo.png"
                    alt="SABG-BUAP"
                    width={70}
                    height={70}
                />

                <p className="mt-4 text-sm font-semibold text-primary">
                    Municipio Demo SABG-BUAP 001
                </p>

                <p className="text-sm font-medium text-text-secondary">
                    Contraloría Municipal
                </p>
            </div>

            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                isActive
                                    ? "flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
                                    : "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                            }
                        >
                            <span aria-hidden="true">{item.icon}</span>

                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <Link
                    href="/municipal/help"
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-primary-light hover:text-primary"
                >
                    <span>?</span>
                    Ayuda
                </Link>
            </div>
        </aside>
    );
}