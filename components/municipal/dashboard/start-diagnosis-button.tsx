"use client";

import { useRouter } from "next/navigation";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function StartDiagnosisButton() {
    const router = useRouter();

    const {
        currentStep,
        setStep,
        unlockChapter,
    } = useMunicipalProgress();

    function handleClick() {
        if (currentStep === "not-started") {
            unlockChapter(2);
            setStep("diagnosis");
        }

        router.push("/capitulo-2/diagnostico");
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