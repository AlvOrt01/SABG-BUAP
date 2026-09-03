import type { Metadata } from "next";

import { ComplianceChecklist } from "@/components/municipal/chapter-5/compliance-checklist";

export const metadata: Metadata = {
  title: "Lista de Cumplimiento",
};

export default function Page() {
  return <ComplianceChecklist />;
}
