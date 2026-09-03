"use client";

import { useMemo } from "react";

import { municipalNavigationBase } from "@/config/navigation/municipal-navigation";
import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

export function useMunicipalNavigation() {
    const { isUnlocked } = useMunicipalProgress();

    return useMemo(() => {
        return {
            items: municipalNavigationBase.items.map((item) => ({
                ...item,

                disabled: item.step
                    ? !isUnlocked(item.step)
                    : item.disabled,

                children: item.children?.map((child) => ({
                    ...child,

                    disabled: child.step
                        ? !isUnlocked(child.step)
                        : child.disabled,
                })),
            })),
        };
    }, [isUnlocked]);
}