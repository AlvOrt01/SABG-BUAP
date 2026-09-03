import type { Metadata } from "next";

import { RecommendedRoute } from "@/components/municipal/chapter-2/recommended-route";

export const metadata: Metadata = {
  title: "Ruta del Diagnóstico",
};

export default function Page() {
  return <RecommendedRoute />;
}
