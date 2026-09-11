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
const CHAPTER_STORAGE_KEY = "sabg-unlocked-chapter";

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
    unlockedChapter: number;

    isUnlocked: (step: MunicipalStep) => boolean;
    isChapterUnlocked: (chapter: number) => boolean;
    isCompleted: (step: MunicipalStep) => boolean;

    completeStep: (step: MunicipalStep) => void;
    completeChapter: (chapter: number) => void;
    unlockChapter: (chapter: number) => void;

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
    const [unlockedChapter, setUnlockedChapter] =
        useState(1);

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved && isMunicipalStep(saved)) {
            setCurrentStep(saved);
        }

        const savedChapter = Number(
            localStorage.getItem(CHAPTER_STORAGE_KEY)
        );

        if (
            Number.isInteger(savedChapter) &&
            savedChapter >= 1
        ) {
            setUnlockedChapter(savedChapter);
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

    const isChapterUnlocked = useCallback(
        (chapter: number) => {
            return chapter <= unlockedChapter;
        },
        [unlockedChapter]
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

    const completeChapter = useCallback(
        (chapter: number) => {
            setUnlockedChapter((previousChapter) => {
                if (chapter !== previousChapter) {
                    return previousChapter;
                }

                const nextChapter = chapter + 1;

                localStorage.setItem(
                    CHAPTER_STORAGE_KEY,
                    String(nextChapter)
                );

                return nextChapter;
            });
        },
        []
    );

    const unlockChapter = useCallback(
        (chapter: number) => {
            setUnlockedChapter((previousChapter) => {
                if (chapter <= previousChapter) {
                    return previousChapter;
                }

                localStorage.setItem(
                    CHAPTER_STORAGE_KEY,
                    String(chapter)
                );

                return chapter;
            });
        },
        []
    );

    const value = useMemo(
        () => ({
            currentStep,
            unlockedChapter,
            isUnlocked,
            isChapterUnlocked,
            isCompleted,
            completeStep,
            completeChapter,
            unlockChapter,
            setStep: persistStep,
        }),
        [
            currentStep,
            unlockedChapter,
            isUnlocked,
            isChapterUnlocked,
            isCompleted,
            completeStep,
            completeChapter,
            unlockChapter,
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