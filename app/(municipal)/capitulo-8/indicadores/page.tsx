import type { Metadata } from "next";

import { PerformanceIndicators } from "@/components/municipal/chapter-8/performance-indicators";

export const metadata: Metadata = {
  title: "Indicadores de Desempeño",
};

export default function Page() {
  return <PerformanceIndicators />;
}
