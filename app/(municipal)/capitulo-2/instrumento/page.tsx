import type { Metadata } from "next";

import { InstrumentForm } from "@/components/municipal/chapter-2/instrument-form";

export const metadata: Metadata = {
  title: "Instrumento",
};

export default function Page() {
  return <InstrumentForm />;
}
