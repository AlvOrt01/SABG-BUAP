import type { Metadata } from "next";

import { SelfAssessmentForm } from "@/components/municipal/chapter-1/self-assessment-form";

export const metadata: Metadata = {
  title: "Autoevaluación | Capítulo 1",
};

export default function SelfAssessmentPage() {
  return <SelfAssessmentForm />;
}