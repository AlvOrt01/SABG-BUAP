import type { Metadata } from "next";

import { HelpCenterContent } from "./components/help-center-content";

export const metadata: Metadata = {
    title: "Centro de ayuda",
    description:
        "Centro de ayuda y orientación para usuarios de SABG-BUAP.",
};

export default function MunicipalHelpPage() {
    return <HelpCenterContent />;
}