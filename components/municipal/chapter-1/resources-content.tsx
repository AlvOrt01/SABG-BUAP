"use client";

import { useMemo, useState } from "react";

import {
  BookOpen,
  FileText,
  Gavel,
  Landmark,
  Search,
  Scale,
} from "lucide-react";

type ResourceCategory =
  | "federal-constitutional"
  | "state"
  | "municipal-transparency"
  | "planning-development";

type ChapterResource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileName: string;
};

const categoryLabels: Record<
  ResourceCategory,
  string
> = {
  "federal-constitutional":
    "Marco Constitucional Federal",

  state:
    "Marco Estatal",

  "municipal-transparency":
    "Marco Municipal y Transparencia",

  "planning-development":
    "Marco de Planeación y Desarrollo",
};

const categoryIcons: Record<
  ResourceCategory,
  React.ElementType
> = {
  "federal-constitutional": Landmark,
  state: Scale,
  "municipal-transparency": Gavel,
  "planning-development": BookOpen,
};

const resources: ChapterResource[] = [
  // =====================================================
  // MARCO CONSTITUCIONAL FEDERAL
  // =====================================================

  {
    id: "federal-constitution",
    title:
      "Constitución Política de los Estados Unidos Mexicanos",
    description:
      "Marco constitucional federal del Buen Gobierno y del municipio libre. Para este capítulo son especialmente relevantes los artículos 2, 3, 6, 21, 73, 115 y 134.",
    category:
      "federal-constitutional",
    fileName:
      "Constitucion Politica Estados Unidos Mexicanos.pdf",
  },

  // =====================================================
  // MARCO ESTATAL
  // =====================================================

  {
    id: "puebla-constitution",
    title:
      "Constitución Política del Estado Libre y Soberano de Puebla",
    description:
      "Marco constitucional del Estado de Puebla. El capítulo destaca disposiciones relacionadas con el municipio libre, su administración, servicios públicos y acceso a la información.",
    category: "state",
    fileName:
      "Constitucion Politica Puebla Jun 5 2025.pdf",
  },

  // =====================================================
  // MARCO MUNICIPAL Y TRANSPARENCIA
  // =====================================================

  {
    id: "municipal-law",
    title:
      "Ley Orgánica Municipal del Estado de Puebla",
    description:
      "Regula la organización, funcionamiento, competencias, autoridades y administración de los municipios del Estado de Puebla.",
    category:
      "municipal-transparency",
    fileName:
      "Recursos Cap 1.pdf",
  },

  {
    id: "general-transparency-law",
    title:
      "Ley General de Transparencia y Acceso a la Información Pública",
    description:
      "Marco general en materia de transparencia, acceso a la información pública y rendición de cuentas.",
    category:
      "municipal-transparency",
    fileName:
      "Ley General de Transparencia.pdf",
  },

  {
    id: "administrative-responsibilities",
    title:
      "Ley General de Responsabilidades Administrativas",
    description:
      "Establece principios, obligaciones y responsabilidades aplicables a las personas servidoras públicas, así como mecanismos relacionados con integridad y ética pública.",
    category:
      "municipal-transparency",
    fileName:
      "General Administrative Responsibilities.pdf",
  },

  // =====================================================
  // MARCO DE PLANEACIÓN Y DESARROLLO
  // =====================================================

  {
    id: "puebla-planning-law",
    title:
      "Ley de Planeación para el Desarrollo del Estado de Puebla",
    description:
      "Regula el Sistema Estatal de Planeación Democrática y los procesos e instrumentos de planeación para el desarrollo del Estado.",
    category:
      "planning-development",
    fileName:
      "Puebla Planning Law Aug 25 2023.pdf",
  },

  {
    id: "puebla-urban-development",
    title:
      "Ley de Ordenamiento Territorial y Desarrollo Urbano del Estado de Puebla",
    description:
      "Marco estatal relacionado con ordenamiento territorial, desarrollo urbano y competencias institucionales.",
    category:
      "planning-development",
    fileName:
      "Puebla Urban Development Law.pdf",
  },

  {
    id: "environmental-law",
    title:
      "Ley General del Equilibrio Ecológico y la Protección al Ambiente",
    description:
      "Regula aspectos de protección ambiental, desarrollo sustentable y competencias concurrentes de Federación, entidades federativas y municipios.",
    category:
      "planning-development",
    fileName:
      "Ley General Equilibrio Ecológico.pdf",
  },

  {
    id: "national-waters-law",
    title:
      "Ley de Aguas Nacionales",
    description:
      "Marco federal relacionado con el uso, aprovechamiento, distribución y gestión de las aguas nacionales.",
    category:
      "planning-development",
    fileName:
      "Ley Aguas Nacionales.pdf",
  },

  {
    id: "agrarian-law",
    title:
      "Ley Agraria",
    description:
      "Marco federal relacionado con materia agraria y coordinación entre Federación, entidades federativas y municipios.",
    category:
      "planning-development",
    fileName:
      "Ley Agraria Recursos Cap 1.pdf",
  },

  {
    id: "forestry-law",
    title:
      "Ley General de Desarrollo Forestal Sustentable",
    description:
      "Regula el manejo y aprovechamiento sustentable de los recursos forestales y distribuye competencias entre los tres órdenes de gobierno.",
    category:
      "planning-development",
    fileName:
      "Ley General Desarrollo Forestal Sustentable.pdf",
  },
];

export function ResourcesContent() {
  const [search, setSearch] =
    useState("");

  const filteredResources =
    useMemo(() => {
      const value =
        search
          .trim()
          .toLowerCase();

      if (!value) {
        return resources;
      }

      return resources.filter(
        (resource) =>
          resource.title
            .toLowerCase()
            .includes(value) ||
          resource.description
            .toLowerCase()
            .includes(value) ||
          categoryLabels[
            resource.category
          ]
            .toLowerCase()
            .includes(value)
      );
    }, [search]);

  const categories = Object.keys(
    categoryLabels
  ) as ResourceCategory[];

  const constitutionalCount =
    resources.filter(
      (resource) =>
        resource.category ===
        "federal-constitutional" ||
        resource.category === "state"
    ).length;

  const municipalCount =
    resources.filter(
      (resource) =>
        resource.category ===
        "municipal-transparency"
    ).length;

  const planningCount =
    resources.filter(
      (resource) =>
        resource.category ===
        "planning-development"
    ).length;

  return (
    <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Encabezado */}
        <section>
          <p className="text-sm font-semibold text-primary">
            Capítulo 1
          </p>

          <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
            Recursos para Buen Gobierno
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
            Consulta los documentos normativos que
            complementan el capítulo de Preparación y
            Autoevaluación. Estos recursos permiten
            comprender los principios del Buen Gobierno
            y el marco jurídico relacionado con la
            gestión municipal.
          </p>

          <div className="relative mt-6 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Buscar recurso..."
              className="w-full rounded-xl border border-border bg-surface py-3 pl-12 pr-4 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </section>

        {/* Resumen */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            label="Total de recursos"
            value={resources.length}
          />

          <SummaryCard
            label="Marco constitucional"
            value={constitutionalCount}
          />

          <SummaryCard
            label="Municipal y transparencia"
            value={municipalCount}
          />

          <SummaryCard
            label="Planeación y desarrollo"
            value={planningCount}
          />
        </section>

        {/* Categorías */}
        {categories.map(
          (category) => {
            const categoryResources =
              filteredResources.filter(
                (resource) =>
                  resource.category ===
                  category
              );

            if (
              categoryResources.length ===
              0
            ) {
              return null;
            }

            const Icon =
              categoryIcons[
              category
              ];

            return (
              <section
                key={category}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-text-primary">
                      {
                        categoryLabels[
                        category
                        ]
                      }
                    </h2>

                    <p className="text-xs text-text-secondary">
                      {
                        categoryResources.length
                      }{" "}
                      {categoryResources.length ===
                        1
                        ? "recurso"
                        : "recursos"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {categoryResources.map(
                    (resource) => (
                      <ResourceCard
                        key={
                          resource.id
                        }
                        resource={
                          resource
                        }
                      />
                    )
                  )}
                </div>
              </section>
            );
          }
        )}

        {/* Sin resultados */}
        {filteredResources.length ===
          0 && (
            <section className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
              <FileText className="mx-auto h-8 w-8 text-text-muted" />

              <p className="mt-3 font-semibold text-text-primary">
                No encontramos recursos
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Intenta realizar la
                búsqueda con otras
                palabras.
              </p>
            </section>
          )}
      </div>
    </main>
  );
}

function ResourceCard({
  resource,
}: {
  resource: ChapterResource;
}) {
  const href =
    `/resources/chapter-1/${encodeURIComponent(
      resource.fileName
    )}`;

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
          <FileText className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Documento PDF
          </p>

          <h3 className="mt-1 font-semibold leading-6 text-text-primary">
            {resource.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-secondary">
        {resource.description}
      </p>

      <div className="mt-auto pt-5">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          <BookOpen className="h-4 w-4" />

          Consultar PDF
        </a>
      </div>
    </article>
  );
}

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-text-primary">
        {value}
      </p>
    </article>
  );
}