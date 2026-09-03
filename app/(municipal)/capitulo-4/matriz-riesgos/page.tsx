import type { Metadata } from "next";

import { RiskMatrix } from "@/components/municipal/chapter-4/risk-matrix";

export const metadata: Metadata = {
  title: "Matriz de Riesgos",
};

export default function Page() {
  return <RiskMatrix />;
}
