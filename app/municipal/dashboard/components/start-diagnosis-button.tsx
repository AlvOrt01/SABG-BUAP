"use client";

import { useRouter } from "next/navigation";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function StartDiagnosisButton() {
    const router = useRouter();

    const {
        currentStep,
        setStep,
    } = useMunicipalProgress();

    function handleClick() {
        if (currentStep === "not-started") {
            setStep("diagnosis");
        }

        router.push("/municipal/diagnosis");
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
            Comenzar diagnóstico
        </button>
    );
}