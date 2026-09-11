import { Users } from "lucide-react";

import { prisma } from "@/lib/prisma";

export default async function AdminUsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            active: true,
            createdAt: true,
        },
    });

    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3 text-primary">
                        <Users className="h-6 w-6" />
                        <p className="text-sm font-semibold">Administración</p>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                        Usuarios
                    </h1>
                    <p className="mt-2 text-sm text-text-secondary">
                        Consulta las cuentas registradas en el sistema.
                    </p>
                </section>

                <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[720px] text-left text-sm">
                            <thead className="border-b border-border bg-background text-xs uppercase tracking-wide text-text-muted">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Usuario</th>
                                    <th className="px-6 py-4 font-semibold">Rol</th>
                                    <th className="px-6 py-4 font-semibold">Estado</th>
                                    <th className="px-6 py-4 font-semibold">Alta</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-text-primary">{user.name}</p>
                                            <p className="mt-1 text-text-secondary">{user.email}</p>
                                        </td>
                                        <td className="px-6 py-4 capitalize text-text-secondary">{user.role}</td>
                                        <td className="px-6 py-4">
                                            <span className={user.active ? "text-success" : "text-danger"}>
                                                {user.active ? "Activo" : "Inactivo"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-text-secondary">
                                            {user.createdAt.toLocaleDateString("es-MX")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}
