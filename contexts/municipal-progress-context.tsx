"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import type { ReactNode } from "react";
import type { MunicipalStep } from "@/types/workflow";

const STORAGE_KEY = "sabg-current-step";

const stepOrder: MunicipalStep[] = [
    "not-started",
    "diagnosis",
    "route",
    "instrument",
    "evidence",
    "tracking",
];

type MunicipalProgressContextValue = {
    currentStep: MunicipalStep;

    isUnlocked: (step: MunicipalStep) => boolean;
    isCompleted: (step: MunicipalStep) => boolean;

    completeStep: (step: MunicipalStep) => void;

    setStep: (step: MunicipalStep) => void;
};

const MunicipalProgressContext =
    createContext<MunicipalProgressContextValue | null>(null);

type MunicipalProgressProviderProps = {
    children: ReactNode;
};

function isMunicipalStep(value: string): value is MunicipalStep {
    return stepOrder.includes(value as MunicipalStep);
}

export function MunicipalProgressProvider({
    children,
}: MunicipalProgressProviderProps) {
    const [currentStep, setCurrentStep] =
        useState<MunicipalStep>("not-started");

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved && isMunicipalStep(saved)) {
            setCurrentStep(saved);
        }

        setHydrated(true);
    }, []);

    const persistStep = useCallback(
        (step: MunicipalStep) => {
            setCurrentStep((previousStep) => {
                const previousIndex =
                    stepOrder.indexOf(previousStep);

                const nextIndex =
                    stepOrder.indexOf(step);

                if (
                    previousIndex !== -1 &&
                    nextIndex < previousIndex
                ) {
                    return previousStep;
                }

                localStorage.setItem(
                    STORAGE_KEY,
                    step
                );

                return step;
            });
        },
        []
    );

    const currentIndex = stepOrder.indexOf(currentStep);

    const isUnlocked = useCallback(
        (step: MunicipalStep) => {
            if (
                currentStep === "not-started" &&
                step === "diagnosis"
            ) {
                return true;
            }

            return stepOrder.indexOf(step) <=
                stepOrder.indexOf(currentStep);
        },
        [currentStep]
    );

    const isCompleted = useCallback(
        (step: MunicipalStep) => {
            return stepOrder.indexOf(step) < currentIndex;
        },
        [currentIndex]
    );

    const completeStep = useCallback(
        (step: MunicipalStep) => {
            const stepIndex = stepOrder.indexOf(step);
            const currentIndex = stepOrder.indexOf(currentStep);

            if (stepIndex === -1) {
                return;
            }

            const nextStep = stepOrder[stepIndex + 1];

            if (!nextStep) {
                return;
            }

            /*
             * Caso especial:
             * El diagnóstico es la primera etapa disponible.
             *
             * Aunque el usuario todavía esté en "not-started",
             * si termina correctamente el diagnóstico debemos
             * avanzar a "route".
             */
            if (
                step === "diagnosis" &&
                currentStep === "not-started"
            ) {
                persistStep("route");
                return;
            }

            /*
             * Solo la etapa actual puede desbloquear
             * la siguiente.
             */
            if (stepIndex !== currentIndex) {
                return;
            }

            persistStep(nextStep);
        },
        [currentStep, persistStep]
    );

    const value = useMemo(
        () => ({
            currentStep,
            isUnlocked,
            isCompleted,
            completeStep,
            setStep: persistStep,
        }),
        [
            currentStep,
            isUnlocked,
            isCompleted,
            completeStep,
            persistStep,
        ]
    );

    if (!hydrated) {
        return null;
    }

    return (
        <MunicipalProgressContext.Provider value={value}>
            {children}
        </MunicipalProgressContext.Provider>
    );
}

export function useMunicipalProgress() {
    const context = useContext(MunicipalProgressContext);

    if (!context) {
        throw new Error(
            "useMunicipalProgress debe utilizarse dentro de MunicipalProgressProvider."
        );
    }

    return context;
}