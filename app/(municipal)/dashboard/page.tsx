import type { Metadata } from "next";

import { MunicipalDashboardContent } from "@/components/municipal/dashboard/municipal-dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return <MunicipalDashboardContent />;
}
