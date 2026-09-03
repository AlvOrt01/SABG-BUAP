import type { Metadata } from "next";

import { HelpCenterContent } from "@/components/municipal/help/help-center-content";

export const metadata: Metadata = {
  title: "Centro de Ayuda",
};

export default function Page() {
  return <HelpCenterContent />;
}
