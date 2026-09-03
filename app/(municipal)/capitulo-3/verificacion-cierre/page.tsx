import type { Metadata } from "next";

import { ClosureVerification } from "@/components/municipal/chapter-3/closure-verification";

export const metadata: Metadata = {
  title: "Verificación de Cierre",
};

export default function Page() {
  return <ClosureVerification />;
}
