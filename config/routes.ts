export const routes = {
    dashboard: "/dashboard",

    admin: {
        home: "/admin",
        users: "/admin/usuarios",
        municipalities: "/admin/municipios",
        audit: "/admin/registro",
        profile: "/admin/perfil",
        preferences: "/admin/preferencias",
    },

    profile: "/perfil",
    preferences: "/preferencias",
    help: "/ayuda",
    resources: "/recursos",
    tracking: "/seguimiento",

    chapter1: {
        home: "/capitulo-1",
        resources: "/capitulo-1/recursos",
        selfAssessment: "/capitulo-1/autoevaluacion",
    },

    chapter2: {
        home: "/capitulo-2",
        diagnosis: "/capitulo-2/diagnostico",
        route: "/capitulo-2/ruta",
        instrument: "/capitulo-2/instrumento",
        evidence: "/capitulo-2/evidencias",
    },

    chapter3: {
        home: "/capitulo-3",
        improvementPlan: "/capitulo-3/plan-mejora",
        actionPlan: "/capitulo-3/plan-accion",
        closureVerification:
            "/capitulo-3/verificacion-cierre",
    },

    chapter4: {
        home: "/capitulo-4",
        internalControl:
            "/capitulo-4/control-interno",
        riskMatrix:
            "/capitulo-4/matriz-riesgos",
    },

    chapter5: {
        home: "/capitulo-5",
        compliance:
            "/capitulo-5/cumplimiento",
        report:
            "/capitulo-5/reporte",
    },

    chapter6: {
        home: "/capitulo-6",
        integrityGuide:
            "/capitulo-6/guia-integridad",
        ethicsCode:
            "/capitulo-6/codigo-etica",
    },

    chapter7: {
        home: "/capitulo-7",
        register:
            "/capitulo-7/registro",
        program:
            "/capitulo-7/programa",
    },

    chapter8: {
        home: "/capitulo-8",
        indicators:
            "/capitulo-8/indicadores",
        progressReport:
            "/capitulo-8/informe-avance",
    },
} as const;