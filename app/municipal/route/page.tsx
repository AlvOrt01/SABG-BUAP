import type { Metadata } from "next";

import { RecommendedRoute } from "./components/recommended-route";

export const metadata: Metadata = {
  title: "Ruta recomendada",
};

export default function MunicipalRoutePage() {
  return <RecommendedRoute />;
}