import type { Metadata } from "next";

import { EvidenceUpload } from "./components/evidence-upload";

export const metadata: Metadata = {
  title: "Evidencias",
};

export default function MunicipalEvidencePage() {
  return <EvidenceUpload />;
}