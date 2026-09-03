import type { Metadata } from "next";

import { IntegrityGuide } from "@/components/municipal/chapter-6/integrity-guide";

export const metadata: Metadata = {
  title: "Guía de Integridad",
};

export default function Page() {
  return <IntegrityGuide />;
}
