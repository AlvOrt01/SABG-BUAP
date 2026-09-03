import type { Metadata } from "next";

import { InternalControl } from "@/components/municipal/chapter-4/internal-control";

export const metadata: Metadata = {
  title: "Control Interno",
};

export default function Page() {
  return <InternalControl />;
}
