import type { Metadata } from "next";

import { MunicipalProgram } from "@/components/municipal/chapter-7/municipal-program";

export const metadata: Metadata = {
  title: "Programa Municipal",
};

export default function Page() {
  return <MunicipalProgram />;
}
