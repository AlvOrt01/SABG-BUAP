import type { ReactNode } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { municipalNavigation } from "@/config/navigation/municipal-navigation";

export const metadata = {
  title: {
    default: "SABG-BUAP",
    template: "%s | SABG-BUAP",
  },
};

export default async function MunicipalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <DashboardShell
      navigation={municipalNavigation}
      user={{
        name: session.user.name,
        role: "Usuario municipal",
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