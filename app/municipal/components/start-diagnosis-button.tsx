"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function StartDiagnosisButton() {
    const router = useRouter();

    function startDiagnosis() {
        localStorage.setItem(
            "sabg-diagnosis-started",
            "true"
        );

        router.push("/municipal/diagnosis");
    }

    return (
        <button
            type="button"
            onClick={startDiagnosis}
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover"
        >
            Comenzar diagnóstico

            <ArrowRight className="h-5 w-5" />
        </button>
    );
}