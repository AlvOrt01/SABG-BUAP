import type { Metadata } from "next";

import { BasicReport } from "@/components/municipal/chapter-5/basic-report";

export const metadata: Metadata = {
  title: "Reporte Básico",
};

export default function Page() {
  return <BasicReport />;
}
