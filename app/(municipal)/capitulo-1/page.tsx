import type { Metadata } from "next";

import { ChapterOverview } from "@/components/municipal/chapter-1/chapter-overview";

export const metadata: Metadata = {
    title: "Capítulo 1 |  Fundamentos del Buen Gobierno y la Gobernanza Municipal ",
    description:
        "Panorama general del Capítulo 1 de SABG-BUAP.",
};

export default function ChapterOnePage() {
    return <ChapterOverview />;
}