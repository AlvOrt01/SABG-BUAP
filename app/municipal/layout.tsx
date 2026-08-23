import type { ReactNode } from "react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { municipalNavigation } from "@/config/navigation/municipal-navigation";

export const metadata = {
  title: {
    default: "SABG-BUAP",
    template: "%s | SABG-BUAP",
  },
};

export default function MunicipalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardShell
      navigation={municipalNavigation}
      user={{
        name: "María Hernández López",
        role: "Usuario municipal",
        initials: "MH",
      }}
      organization={{
        name: "Municipio Demo SABG-BUAP 001",
        area: "Contraloría Municipal",
        logo: "/logotipo.png",
      }}
    >
      {children}
    </DashboardShell>
  );
}