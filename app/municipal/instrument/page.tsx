import type { Metadata } from "next";

import { InstrumentForm } from "./components/instrument-form";

export const metadata: Metadata = {
  title: "Instrumento",
};

export default function MunicipalInstrumentPage() {
  return <InstrumentForm />;
}