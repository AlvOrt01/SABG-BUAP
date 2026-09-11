import { ClipboardList } from "lucide-react";

export default function AdminAuditPage() {
    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3 text-primary">
                        <ClipboardList className="h-6 w-6" />
                        <p className="text-sm font-semibold">Administración</p>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                        Registro de auditoría
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
                        Aquí se mostrarán las altas, cambios de rol, activaciones y demás acciones administrativas.
                    </p>
                </section>
            </div>
        </main>
    );
}
