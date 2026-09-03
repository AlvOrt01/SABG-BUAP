import type { Metadata } from "next";

import { TrackingContent } from "@/components/municipal/tracking/tracking-content";

export const metadata: Metadata = {
  title: "Seguimiento",
};

export default function Page() {
  return <TrackingContent />;
}
