import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preferencias",
};

export default function MunicipalPreferencesPage() {
    return (
        <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
            <section className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    Preferencias
                </h1>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                    Aquí podrás configurar las preferencias de tu cuenta y experiencia dentro de SABG-BUAP.
                </p>

                <div className="mt-8 rounded-xl border border-border bg-background p-5">
                    <p className="text-sm font-semibold text-text-primary">
                        Próximamente
                    </p>

                    <p className="mt-2 text-sm text-text-secondary">
                        Notificaciones, idioma y otras preferencias estarán disponibles en esta sección.
                    </p>
                </div>
            </section>
        </main>
    );
}