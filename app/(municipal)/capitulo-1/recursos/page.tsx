import type { Metadata } from "next";

import { ResourcesContent } from "@/components/municipal/chapter-1/resources-content";

export const metadata: Metadata = {
  title: "Recursos",
};

export default function Page() {
  return <ResourcesContent />;
}
