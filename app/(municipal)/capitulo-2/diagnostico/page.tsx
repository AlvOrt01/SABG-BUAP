import type { Metadata } from "next";

import { DiagnosisForm } from "@/components/municipal/chapter-2/diagnosis-form";

export const metadata: Metadata = {
  title: "Diagnóstico Municipal",
};

export default function Page() {
  return <DiagnosisForm />;
}
