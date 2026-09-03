import type { Metadata } from "next";

import { PreferencesContent } from "@/components/municipal/preferences/preferences-content";

export const metadata: Metadata = {
  title: "Preferencias",
};

export default function Page() {
  return <PreferencesContent />;
}
