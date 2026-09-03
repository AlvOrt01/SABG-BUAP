export type InstrumentFieldType =
    | "text"
    | "textarea"
    | "select";

export type InstrumentOption = {
    label: string;
    value: string;
};

export type InstrumentField = {
    id: string;
    label: string;
    description?: string;
    placeholder?: string;
    type: InstrumentFieldType;
    required?: boolean;
    options?: InstrumentOption[];
};

export type MunicipalInstrument = {
    id: string;
    annex: number;
    chapter: number;
    title: string;
    description: string;
    objective: string;
    expectedProduct: string;
    fields: InstrumentField[];
};