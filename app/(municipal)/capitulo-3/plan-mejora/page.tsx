import type { Metadata } from "next";

import { ImprovementPlan } from "@/components/municipal/chapter-3/improvement-plan";

export const metadata: Metadata = {
  title: "Plan de Mejora Institucional",
};

export default function Page() {
  return <ImprovementPlan />;
}
