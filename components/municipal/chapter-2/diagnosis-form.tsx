"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, FileText } from "lucide-react";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function DiagnosisForm() {
    const router = useRouter();

    const {
        isCompleted,
        completeStep,
    } = useMunicipalProgress();

    const diagnosisCompleted =
        isCompleted("diagnosis");

    const [formData, setFormData] = useState({
        area: "",
        currentSituation: "",
        compliance: "",
        riskLevel: "",
        problem: "",
        observations: "",
    });

    const isFormValid =
        formData.area !== "" &&
        formData.currentSituation.trim() !== "" &&
        formData.compliance !== "" &&
        formData.riskLevel !== "" &&
        formData.problem.trim() !== "" &&
        formData.observations.trim() !== "";

    function handleChange(
        event: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        completeStep("diagnosis");

        router.push("/municipal/route");
    }

    if (diagnosisCompleted) {
        return <DiagnosisCompleted />;
    }

    return (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="rounded-2xl border border-border bg-surface shadow-sm">
                <header className="border-b border-border px-6 py-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Diagnóstico institucional
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-text-primary">
                        Diagnóstico inicial del municipio
                    </h1>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
                        Completa la información solicitada para identificar la situación
                        actual, el nivel de cumplimiento y los principales riesgos del
                        municipio. Esta información permitirá establecer una línea base y
                        generar una ruta recomendada.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 p-6"
                >
                    {/* Área */}
                    <FormField label="Área o proceso evaluado">
                        <select
                            required
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        >
                            <option value="">
                                Selecciona un área
                            </option>

                            <option value="contraloria">
                                Contraloría Municipal
                            </option>

                            <option value="tesoreria">
                                Tesorería
                            </option>

                            <option value="administracion">
                                Administración
                            </option>

                            <option value="transparencia">
                                Unidad de Transparencia
                            </option>

                            <option value="secretaria">
                                Secretaría del Ayuntamiento
                            </option>

                            <option value="otra">
                                Otra
                            </option>
                        </select>
                    </FormField>

                    {/* Situación actual */}
                    <FormField label="Situación actual">
                        <textarea
                            required
                            name="currentSituation"
                            value={formData.currentSituation}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe brevemente cómo funciona actualmente el área o proceso..."
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                    </FormField>

                    {/* Cumplimiento */}
                    <FormField label="Cumplimiento institucional">
                        <div className="grid gap-3 sm:grid-cols-3">
                            {[
                                "Cumple",
                                "Cumple parcialmente",
                                "No cumple",
                            ].map((option) => (
                                <label
                                    key={option}
                                    className={[
                                        "cursor-pointer rounded-xl border p-4 text-center text-sm font-semibold transition",
                                        formData.compliance === option
                                            ? "border-primary bg-primary-light text-primary"
                                            : "border-border bg-background text-text-secondary hover:border-primary/40",
                                    ].join(" ")}
                                >
                                    <input
                                        required
                                        type="radio"
                                        name="compliance"
                                        value={option}
                                        checked={
                                            formData.compliance === option
                                        }
                                        onChange={handleChange}
                                        className="sr-only"
                                    />

                                    {option}
                                </label>
                            ))}
                        </div>
                    </FormField>

                    {/* Riesgo */}
                    <FormField label="Nivel de riesgo identificado">
                        <div className="grid gap-3 sm:grid-cols-3">
                            {[
                                "Bajo",
                                "Medio",
                                "Alto",
                            ].map((risk) => (
                                <label
                                    key={risk}
                                    className={[
                                        "cursor-pointer rounded-xl border p-4 text-center text-sm font-semibold transition",
                                        formData.riskLevel === risk
                                            ? "border-primary bg-primary-light text-primary"
                                            : "border-border bg-background text-text-secondary hover:border-primary/40",
                                    ].join(" ")}
                                >
                                    <input
                                        required
                                        type="radio"
                                        name="riskLevel"
                                        value={risk}
                                        checked={
                                            formData.riskLevel === risk
                                        }
                                        onChange={handleChange}
                                        className="sr-only"
                                    />

                                    {risk}
                                </label>
                            ))}
                        </div>
                    </FormField>

                    {/* Problema */}
                    <FormField label="Principal problemática detectada">
                        <textarea
                            required
                            name="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe el principal problema, incumplimiento o área de oportunidad detectada..."
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                    </FormField>

                    {/* Observaciones */}
                    <FormField label="Observaciones adicionales">
                        <textarea
                            required
                            name="observations"
                            value={formData.observations}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Agrega cualquier información adicional relevante para el diagnóstico..."
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                    </FormField>

                    <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-background"
                        >
                            Guardar borrador
                        </button>

                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Finalizar diagnóstico
                        </button>
                    </div>
                </form>
            </section>

            <aside className="space-y-5">
                <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                            <FileText className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-text-primary">
                                Diagnóstico institucional
                            </p>

                            <p className="text-xs text-text-secondary">
                                Etapa 1 de 4
                            </p>
                        </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-text-secondary">
                        Identifica capacidades, cumplimiento institucional, riesgos y
                        áreas prioritarias para establecer una línea base del municipio.
                    </p>
                </section>

                <section className="rounded-2xl border border-primary/20 bg-primary-light p-5">
                    <div className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                        <div>
                            <p className="text-sm font-semibold text-text-primary">
                                Completa todos los campos
                            </p>

                            <p className="mt-1 text-sm leading-6 text-text-secondary">
                                La ruta recomendada se habilitará cuando el diagnóstico
                                haya sido completado correctamente.
                            </p>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    );
}

function DiagnosisCompleted() {
    const router = useRouter();

    return (
        <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
                    <CheckCircle2 className="h-7 w-7" />
                </div>

                <h1 className="mt-5 text-2xl font-bold text-text-primary">
                    Diagnóstico completado
                </h1>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Ya has respondido el diagnóstico institucional. La información fue
                    registrada y tu ruta recomendada ya se encuentra disponible.
                </p>

                <button
                    type="button"
                    onClick={() =>
                        router.push("/municipal/route")
                    }
                    className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    Ver ruta recomendada
                </button>
            </div>
        </section>
    );
}

function FormField({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-text-primary">
                {label}
            </label>

            {children}
        </div>
    );
}