import type { Metadata } from "next";

import { EthicsCode } from "@/components/municipal/chapter-6/ethics-code";

export const metadata: Metadata = {
  title: "Código de Ética y Conducta",
};

export default function Page() {
  return <EthicsCode />;
}
