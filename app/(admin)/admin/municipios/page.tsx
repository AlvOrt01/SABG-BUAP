import { Building2 } from "lucide-react";

export default function AdminMunicipalitiesPage() {
    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3 text-primary">
                        <Building2 className="h-6 w-6" />
                        <p className="text-sm font-semibold">Administración</p>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                        Municipios
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
                        El catálogo de municipios y sus asignaciones se habilitará al incorporar el modelo de dominio correspondiente.
                    </p>
                </section>
            </div>
        </main>
    );
}
