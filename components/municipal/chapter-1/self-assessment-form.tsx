"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CheckCircle2,
  ClipboardCheck,
  Info,
  RotateCcw,
  Save,
  Send,
} from "lucide-react";

import { useMunicipalProgress } from "@/contexts/municipal-progress-context";

const STORAGE_KEY =
  "sabg-chapter-1-self-assessment";

type AssessmentValue =
  | "applies"
  | "partial"
  | "not-applies"
  | "";

type AssessmentAnswers = Record<
  string,
  AssessmentValue
>;

type ReflectionAnswers = {
  mainProblems: string;
  goodGovernanceApplication: string;
  citizenImpact: string;
};

const components = [
  {
    id: "transparency",
    label:
      "Transparencia y rendición de cuentas",
    description:
      "Apertura informativa y responsabilidad por el ejercicio de las funciones y el uso de los recursos públicos.",
  },
  {
    id: "social-needs",
    label:
      "Atención de demandas y necesidades sociales",
    description:
      "Orientación de la actuación municipal hacia las necesidades colectivas y la atención de grupos en situación de vulnerabilidad.",
  },
  {
    id: "participation",
    label:
      "Participación social",
    description:
      "Existencia de mecanismos para involucrar a ciudadanía, sociedad civil y sector privado.",
  },
  {
    id: "effective-institutions",
    label:
      "Instituciones eficaces, eficientes e inclusivas",
    description:
      "Capacidad institucional para obtener resultados, utilizar adecuadamente los recursos y garantizar acceso equitativo a los servicios públicos.",
  },
  {
    id: "public-servants",
    label:
      "Personas servidoras públicas íntegras y profesionales",
    description:
      "Personal capacitado, comprometido con la ética pública, la integridad y el desempeño profesional.",
  },
] as const;

const assessmentOptions = [
  {
    value: "applies" as const,
    label: "Se aplica",
  },
  {
    value: "partial" as const,
    label: "Parcialmente",
  },
  {
    value: "not-applies" as const,
    label: "No se aplica",
  },
];

const initialAssessment =
  Object.fromEntries(
    components.map((component) => [
      component.id,
      "",
    ])
  ) as AssessmentAnswers;

const initialReflection: ReflectionAnswers = {
  mainProblems: "",
  goodGovernanceApplication: "",
  citizenImpact: "",
};

export function SelfAssessmentForm() {
  const { completeChapter } = useMunicipalProgress();

  const [
    assessment,
    setAssessment,
  ] = useState<AssessmentAnswers>(
    initialAssessment
  );

  const [
    reflection,
    setReflection,
  ] = useState<ReflectionAnswers>(
    initialReflection
  );

  const [
    saved,
    setSaved,
  ] = useState(false);

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  /*
   * Recuperar borrador.
   */
  useEffect(() => {
    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!stored) {
      return;
    }

    try {
      const parsed =
        JSON.parse(stored);

      if (parsed.assessment) {
        setAssessment(
          parsed.assessment
        );
      }

      if (parsed.reflection) {
        setReflection(
          parsed.reflection
        );
      }
    } catch {
      localStorage.removeItem(
        STORAGE_KEY
      );
    }
  }, []);

  const completedComponents =
    useMemo(() => {
      return Object.values(
        assessment
      ).filter(Boolean).length;
    }, [assessment]);

  const assessmentComplete =
    completedComponents ===
    components.length;

  const reflectionComplete =
    Object.values(
      reflection
    ).every(
      (value) =>
        value.trim() !== ""
    );

  const isFormValid =
    assessmentComplete &&
    reflectionComplete;

  const progress =
    Math.round(
      (completedComponents /
        components.length) *
      100
    );

  function handleAssessmentChange(
    componentId: string,
    value: AssessmentValue
  ) {
    setAssessment(
      (previous) => ({
        ...previous,
        [componentId]: value,
      })
    );

    setSaved(false);
  }

  function handleReflectionChange(
    field: keyof ReflectionAnswers,
    value: string
  ) {
    setReflection(
      (previous) => ({
        ...previous,
        [field]: value,
      })
    );

    setSaved(false);
  }

  function handleSaveDraft() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        assessment,
        reflection,
      })
    );

    setSaved(true);
  }

  function handleReset() {
    setAssessment(
      initialAssessment
    );

    setReflection(
      initialReflection
    );

    localStorage.removeItem(
      STORAGE_KEY
    );

    setSaved(false);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    /*
     * Temporal.
     *
     * Más adelante esta información
     * se almacenará en la base de datos.
     */
    localStorage.removeItem(
      STORAGE_KEY
    );

    completeChapter(1);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SelfAssessmentCompleted />
    );
  }

  return (
    <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Encabezado */}
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary">
                Capítulo 1
              </p>

              <h1 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
                Autoevaluación de Buen Gobierno
              </h1>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Valora el nivel de aplicación de los
                principales componentes del Buen Gobierno
                dentro del municipio y reflexiona sobre
                su situación actual.
              </p>
            </div>

            <div className="min-w-56 rounded-xl border border-border bg-background p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold text-text-secondary">
                  Progreso
                </p>

                <p className="text-sm font-bold text-primary">
                  {progress}%
                </p>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Información */}
        <section className="rounded-2xl border border-primary/20 bg-primary-light p-5">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

            <div>
              <p className="text-sm font-semibold text-text-primary">
                Antes de comenzar
              </p>

              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Selecciona la opción que mejor represente
                la situación actual del municipio. Esta
                autoevaluación busca identificar áreas
                de oportunidad y no constituye una
                calificación.
              </p>
            </div>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Componentes */}
          <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <header className="border-b border-border p-6 md:p-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Parte 1
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-text-primary">
                    Autoevaluación de componentes
                  </h2>
                </div>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-text-secondary">
                Indica el nivel de aplicación actual de
                cada componente del Buen Gobierno.
              </p>
            </header>

            {/* Desktop */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[minmax(280px,1fr)_repeat(3,140px)] border-b border-border bg-background px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Componente
                </p>

                {assessmentOptions.map(
                  (option) => (
                    <p
                      key={
                        option.value
                      }
                      className="text-center text-xs font-semibold text-text-secondary"
                    >
                      {option.label}
                    </p>
                  )
                )}
              </div>

              {components.map(
                (
                  component,
                  index
                ) => (
                  <div
                    key={
                      component.id
                    }
                    className={[
                      "grid grid-cols-[minmax(280px,1fr)_repeat(3,140px)] items-center px-6 py-5",
                      index <
                        components.length -
                        1
                        ? "border-b border-border"
                        : "",
                    ].join(" ")}
                  >
                    <div className="pr-5">
                      <p className="text-sm font-semibold text-text-primary">
                        {
                          component.label
                        }
                      </p>

                      <p className="mt-1 text-xs leading-5 text-text-secondary">
                        {
                          component.description
                        }
                      </p>
                    </div>

                    {assessmentOptions.map(
                      (option) => (
                        <label
                          key={
                            option.value
                          }
                          className="flex cursor-pointer justify-center"
                        >
                          <input
                            type="radio"
                            name={
                              component.id
                            }
                            value={
                              option.value
                            }
                            checked={
                              assessment[
                              component.id
                              ] ===
                              option.value
                            }
                            onChange={() =>
                              handleAssessmentChange(
                                component.id,
                                option.value
                              )
                            }
                            className="h-4 w-4 appearance-none rounded-full border-2 border-text-muted bg-surface transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                          />

                          <span className="sr-only">
                            {
                              option.label
                            }
                          </span>
                        </label>
                      )
                    )}
                  </div>
                )
              )}
            </div>

            {/* Mobile */}
            <div className="space-y-4 p-4 md:hidden">
              {components.map(
                (component) => (
                  <article
                    key={
                      component.id
                    }
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <p className="text-sm font-semibold text-text-primary">
                      {
                        component.label
                      }
                    </p>

                    <p className="mt-1 text-xs leading-5 text-text-secondary">
                      {
                        component.description
                      }
                    </p>

                    <div className="mt-4 space-y-2">
                      {assessmentOptions.map(
                        (option) => (
                          <label
                            key={
                              option.value
                            }
                            className={[
                              "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition",
                              assessment[
                                component.id
                              ] ===
                                option.value
                                ? "border-primary bg-primary-light font-medium text-primary"
                                : "border-border bg-surface text-text-secondary",
                            ].join(
                              " "
                            )}
                          >
                            <input
                              type="radio"
                              name={
                                component.id
                              }
                              value={
                                option.value
                              }
                              checked={
                                assessment[
                                component.id
                                ] ===
                                option.value
                              }
                              onChange={() =>
                                handleAssessmentChange(
                                  component.id,
                                  option.value
                                )
                              }
                              className="h-4 w-4 appearance-none rounded-full border-2 border-text-muted bg-surface transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />

                            {
                              option.label
                            }
                          </label>
                        )
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          {/* Reflexión */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Parte 2
              </p>

              <h2 className="mt-1 text-xl font-bold text-text-primary">
                Reflexión municipal
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
                Responde brevemente considerando la
                situación actual del municipio.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <ReflectionField
                id="mainProblems"
                label="Principales problemas del municipio"
                description="¿Cuáles son los principales problemas o áreas de oportunidad que actualmente enfrenta el municipio?"
                placeholder="Describe los principales problemas identificados..."
                value={
                  reflection.mainProblems
                }
                onChange={(value) =>
                  handleReflectionChange(
                    "mainProblems",
                    value
                  )
                }
              />

              <ReflectionField
                id="goodGovernanceApplication"
                label="Aplicación de principios de Buen Gobierno"
                description="¿Cómo se aplican actualmente los principios de Buen Gobierno dentro de la administración municipal?"
                placeholder="Describe cómo se aplican actualmente estos principios..."
                value={
                  reflection.goodGovernanceApplication
                }
                onChange={(value) =>
                  handleReflectionChange(
                    "goodGovernanceApplication",
                    value
                  )
                }
              />

              <ReflectionField
                id="citizenImpact"
                label="Impacto en la ciudadanía"
                description="¿De qué manera la gestión municipal actual impacta en la ciudadanía?"
                placeholder="Describe el impacto que observas en la ciudadanía..."
                value={
                  reflection.citizenImpact
                }
                onChange={(value) =>
                  handleReflectionChange(
                    "citizenImpact",
                    value
                  )
                }
              />
            </div>
          </section>

          {/* Acciones */}
          <section className="flex flex-col-reverse gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={
                handleReset
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-background"
            >
              <RotateCcw className="h-4 w-4" />

              Limpiar respuestas
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={
                  handleSaveDraft
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-background"
              >
                <Save className="h-4 w-4" />

                {saved
                  ? "Borrador guardado"
                  : "Guardar borrador"}
              </button>

              <button
                type="submit"
                disabled={
                  !isFormValid
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Finalizar autoevaluación

                <Send className="h-4 w-4" />
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}

function ReflectionField({
  id,
  label,
  description,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  placeholder: string;
  value: string;
  onChange: (
    value: string
  ) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-text-primary"
      >
        {label}

        <span className="ml-1 text-primary">
          *
        </span>
      </label>

      <p className="mt-1 text-xs leading-5 text-text-secondary">
        {description}
      </p>

      <textarea
        id={id}
        required
        rows={4}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        placeholder={
          placeholder
        }
        className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}

function SelfAssessmentCompleted() {
  return (
    <main className="flex-1 bg-background px-4 py-6 md:px-6 md:py-8 lg:p-8">
      <section className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <p className="mt-5 text-sm font-semibold text-primary">
          Capítulo 1
        </p>

        <h1 className="mt-1 text-2xl font-bold text-text-primary">
          Autoevaluación completada
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-secondary">
          Las respuestas de la autoevaluación fueron
          registradas correctamente. Más adelante esta
          información permitirá integrar el seguimiento
          del capítulo.
        </p>
      </section>
    </main>
  );
}