import type { Metadata } from "next";

import { ProgressReport } from "@/components/municipal/chapter-8/progress-report";

export const metadata: Metadata = {
  title: "Informe de Avance",
};

export default function Page() {
  return <ProgressReport />;
}
