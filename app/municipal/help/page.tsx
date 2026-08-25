import { CircleHelp } from "lucide-react";

export default function MunicipalHelpPage() {
    return (
        <main className="flex-1 p-6 lg:p-8">
            <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:p-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                        <CircleHelp className="h-5 w-5" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-text-primary">
                            Centro de ayuda
                        </h1>

                        <p className="mt-1 text-sm text-text-secondary">
                            Encuentra información y recursos para utilizar SABG-BUAP.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}