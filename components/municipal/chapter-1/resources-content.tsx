"use client";

import { useMemo, useState } from "react";

import {
  BookOpen,
  FileText,
  Gavel,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type ResourceCategory =
  | "guide"
  | "constitutional"
  | "municipal"
  | "transparency"
  | "ethics";

type ChapterResource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileName: string;
  available?: boolean;
};

const categoryLabels: Record<
  ResourceCategory,
  string
> = {
  guide: "Guía y autoevaluación",
  constitutional: "Marco constitucional",
  municipal:
    "Marco municipal y administrativo",
  transparency:
    "Transparencia y rendición de cuentas",
  ethics: "Integridad y ética",
};

const categoryIcons: Record<
  ResourceCategory,
  React.ElementType
> = {
  guide: BookOpen,
  constitutional: Landmark,
  municipal: Gavel,
  transparency: ShieldCheck,
  ethics: Sparkles,
};

const resources: ChapterResource[] = [
  {
    id: "guide-chapter-1",
    title:
      "Guía SABG-BUAP - Capítulo 1",
    description:
      "Contenido del capítulo sobre Buen Gobierno y Gobernanza Municipal.",
    category: "guide",
    fileName:
      "01-guia-sabg-capitulo-1.pdf",
  },
  {
    id: "self-assessment",
    title:
      "Formato de Autoevaluación - Capítulo 1",
    description:
      "Formato de referencia para la autoevaluación de los componentes del Buen Gobierno.",
    category: "guide",
    fileName:
      "02-formato-autoevaluacion-capitulo-1.pdf",
  },
  {
    id: "constitution-mexico",
    title:
      "Constitución Política de los Estados Unidos Mexicanos",
    description:
      "Marco constitucional federal relacionado con el municipio, transparencia, seguridad pública y rendición de cuentas.",
    category: "constitutional",
    fileName:
      "03-constitucion-politica-estados-unidos-mexicanos.pdf",
  },
  {
    id: "constitution-puebla",
    title:
      "Constitución Política del Estado Libre y Soberano de Puebla",
    description:
      "Marco constitucional estatal relacionado con la organización y funcionamiento municipal.",
    category: "constitutional",
    fileName:
      "04-constitucion-politica-estado-puebla.pdf",
  },
  {
    id: "municipal-law",
    title:
      "Ley Orgánica Municipal del Estado de Puebla",
    description:
      "Regula la organización, funcionamiento, competencias y administración de los ayuntamientos.",
    category: "municipal",
    fileName:
      "05-ley-organica-municipal-puebla.pdf",
  },
  {
    id: "planning-law",
    title: "Ley de Planeación",
    description:
      "Marco federal relacionado con los procesos de planeación y coordinación institucional.",
    category: "municipal",
    fileName:
      "06-ley-planeacion.pdf",
  },
  {
    id: "human-settlements",
    title:
      "Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano",
    description:
      "Normativa vinculada con el ordenamiento territorial y el desarrollo urbano.",
    category: "municipal",
    fileName:
      "07-ley-general-asentamientos-humanos.pdf",
  },
  {
    id: "environment",
    title:
      "Ley General del Equilibrio Ecológico y la Protección al Ambiente",
    description:
      "Normativa ambiental relacionada con competencias y responsabilidades municipales.",
    category: "municipal",
    fileName:
      "08-ley-general-equilibrio-ecologico.pdf",
  },
  {
    id: "waters",
    title:
      "Ley de Aguas Nacionales",
    description:
      "Normativa relacionada con la gestión y prestación de servicios vinculados con el agua.",
    category: "municipal",
    fileName:
      "09-ley-aguas-nacionales.pdf",
  },
  {
    id: "agrarian",
    title:
      "Ley Agraria",
    description:
      "Marco federal relacionado con el régimen agrario y la coordinación institucional.",
    category: "municipal",
    fileName:
      "10-ley-agraria.pdf",
  },
  {
    id: "forest",
    title:
      "Ley General de Desarrollo Forestal Sustentable",
    description:
      "Normativa relacionada con la conservación y desarrollo forestal sustentable.",
    category: "municipal",
    fileName:
      "11-ley-general-desarrollo-forestal-sustentable.pdf",
  },
  {
    id: "responsibilities",
    title:
      "Ley General de Responsabilidades Administrativas",
    description:
      "Marco normativo sobre responsabilidades e integridad de las personas servidoras públicas.",
    category: "municipal",
    fileName:
      "12-ley-general-responsabilidades-administrativas.pdf",
  },
  {
    id: "transparency-law",
    title:
      "Ley de Transparencia y Acceso a la Información Pública del Estado de Puebla",
    description:
      "Normativa estatal en materia de transparencia y acceso a la información pública.",
    category: "transparency",
    fileName:
      "13-ley-transparencia-puebla.pdf",
  },
  {
    id: "technical-guidelines",
    title:
      "Lineamientos Técnicos Generales de Obligaciones de Transparencia",
    description:
      "Lineamientos para la publicación, homologación y estandarización de obligaciones de transparencia.",
    category: "transparency",
    fileName:
      "14-lineamientos-tecnicos-generales-transparencia.pdf",
  },
  {
    id: "technical-criteria",
    title:
      "Criterios Técnicos Generales de Transparencia del Estado de Puebla",
    description:
      "Criterios técnicos aplicables a la información relacionada con obligaciones de transparencia.",
    category: "transparency",
    fileName:
      "15-criterios-tecnicos-generales-transparencia-puebla.pdf",
  },
  {
    id: "classification-guidelines",
    title:
      "Lineamientos Generales en materia de clasificación y desclasificación",
    description:
      "Lineamientos para clasificación, desclasificación y elaboración de versiones públicas.",
    category: "transparency",
    fileName:
      "16-lineamientos-clasificacion-desclasificacion.pdf",
  },
  {
    id: "ethics-code",
    title:
      "Código de Ética e Integridad para un Buen Gobierno",
    description:
      "Documento de referencia sobre principios, valores y reglas de conducta de las personas servidoras públicas.",
    category: "ethics",
    fileName:
      "17-codigo-etica-integridad-buen-gobierno.pdf",
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
            Consulta los documentos que
            complementan el capítulo de
            Preparación y Autoevaluación.
            Estos recursos sirven como
            referencia para comprender los
            principios del Buen Gobierno y
            su marco jurídico municipal.
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
            label="Recursos"
            value={
              resources.length
            }
          />

          <SummaryCard
            label="Constitucionales"
            value={
              resources.filter(
                (resource) =>
                  resource.category ===
                  "constitutional"
              ).length
            }
          />

          <SummaryCard
            label="Normativos"
            value={
              resources.filter(
                (resource) =>
                  resource.category ===
                  "municipal" ||
                  resource.category ===
                  "transparency"
              ).length
            }
          />

          <SummaryCard
            label="Guía y apoyo"
            value={
              resources.filter(
                (resource) =>
                  resource.category ===
                  "guide" ||
                  resource.category ===
                  "ethics"
              ).length
            }
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
                      {
                        categoryResources.length ===
                          1
                          ? "recurso"
                          : "recursos"
                      }
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {categoryResources.map(
                    (
                      resource
                    ) => (
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
    `/resources/chapter-1/${resource.fileName}`;

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
          <FileText className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            PDF
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