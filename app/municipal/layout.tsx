import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { MunicipalProgressProvider } from "@/contexts/municipal-progress-context";
import { MunicipalDashboardShell } from "./components/municipal-dashboard-shell";

export default async function MunicipalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <MunicipalProgressProvider>
      <MunicipalDashboardShell
        user={{
          name: session.user.name,
          role: "Usuario municipal",
        }}
        organization={{
          name: "Municipio Demo SABG-BUAP 001",
          area: "Contraloría Municipal",
        }}
      >
        {children}
      </MunicipalDashboardShell>
    </MunicipalProgressProvider>
  );
}