import type { Metadata } from "next";

import { SelfAssessmentForm } from "@/components/municipal/chapter-1/self-assessment-form";

export const metadata: Metadata = {
  title: "Autoevaluación",
};

export default function Page() {
  return <SelfAssessmentForm />;
}
