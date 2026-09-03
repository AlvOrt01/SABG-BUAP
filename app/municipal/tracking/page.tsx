import type { Metadata } from "next";

import { TrackingContent } from "./components/tracking-content";

export const metadata: Metadata = {
    title: "Seguimiento",
    description:
        "Consulta el estado de revisión de tu proceso municipal.",
};

export default function MunicipalTrackingPage() {
    return <TrackingContent />;
}