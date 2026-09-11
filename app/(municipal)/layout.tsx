import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { MunicipalDashboardShell } from "@/components/municipal/municipal-dashboard-shell";

import { MunicipalProgressProvider } from "@/contexts/municipal-progress-context";

export default async function MunicipalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session =
    await auth.api.getSession({
      headers: await headers(),
    });

  if (!session) {
    redirect("/auth/login");
  }

  const user =
    await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        role: true,
        active: true,
      },
    });

  if (!user || !user.active) {
    redirect("/auth/login");
  }

  if (user.role === "admin") {
    redirect("/admin");
  }

  const name =
    session.user.name ??
    "Usuario municipal";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0)
    )
    .join("")
    .toUpperCase();

  return (
    <MunicipalProgressProvider>
      <MunicipalDashboardShell
        user={{
          name,
          role: "Usuario municipal",
          initials,
          email: session.user.email,
        }}
      >
        {children}
      </MunicipalDashboardShell>
    </MunicipalProgressProvider>
  );
}