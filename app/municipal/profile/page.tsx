import type { Metadata } from "next";

import { MunicipalProfileContent } from "./components/municipal-profile-content";

export const metadata: Metadata = {
    title: "Mi perfil",
};

export default function MunicipalProfilePage() {
    return (
        <MunicipalProfileContent />
    );
}