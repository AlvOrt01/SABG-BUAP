import type { Metadata } from "next";

import { ActionPlan } from "@/components/municipal/chapter-3/action-plan";

export const metadata: Metadata = {
  title: "Plan de Acción",
};

export default function Page() {
  return <ActionPlan />;
}
