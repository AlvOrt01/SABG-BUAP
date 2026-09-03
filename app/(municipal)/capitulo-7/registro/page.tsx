import type { Metadata } from "next";

import { ParticipationRegister } from "@/components/municipal/chapter-7/participation-register";

export const metadata: Metadata = {
  title: "Registro de Participación",
};

export default function Page() {
  return <ParticipationRegister />;
}
