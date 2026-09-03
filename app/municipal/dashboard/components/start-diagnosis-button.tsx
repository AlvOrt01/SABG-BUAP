"use client";

import { useRouter } from "next/navigation";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function StartDiagnosisButton() {
    const router = useRouter();

    const { setStep } =
        useMunicipalProgress();

    function handleStart() {
        setStep("diagnosis");

        router.push("/municipal/diagnosis");
    }

    return (
        <button
            type="button"
            onClick={handleStart}
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white"
        >
            Comenzar diagnóstico
        </button>
    );
}