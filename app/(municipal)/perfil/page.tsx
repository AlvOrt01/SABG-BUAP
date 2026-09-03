import type { Metadata } from "next";

import { ProfileContent } from "@/components/municipal/profile/profile-content";

export const metadata: Metadata = {
  title: "Mi Perfil",
};

export default function Page() {
  return <ProfileContent />;
}
