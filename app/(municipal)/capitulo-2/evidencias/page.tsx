import type { Metadata } from "next";

import { EvidenceUpload } from "@/components/municipal/chapter-2/evidence-upload";

export const metadata: Metadata = {
  title: "Evidencias",
};

export default function Page() {
  return <EvidenceUpload />;
}
