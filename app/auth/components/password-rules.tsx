type PasswordRulesProps = {
    password: string;
};

const rules = [
    {
        label: "Mínimo 8 caracteres",
        validate: (password: string) => password.length >= 8,
    },
    {
        label: "Al menos una letra mayúscula",
        validate: (password: string) => /[A-Z]/.test(password),
    },
    {
        label: "Al menos un número",
        validate: (password: string) => /[0-9]/.test(password),
    },
    {
        label: "Al menos un carácter especial",
        validate: (password: string) => /[^A-Za-z0-9]/.test(password),
    },
];

export function PasswordRules({ password }: PasswordRulesProps) {
    return (
        <div className="rounded-lg border border-primary/15 bg-primary-light p-4">
            <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                <span className="text-primary" aria-hidden="true">
                    ◈
                </span>

                Reglas de seguridad
            </h2>

            <ul className="space-y-1 text-xs">
                {rules.map((rule) => {
                    const isValid = rule.validate(password);

                    return (
                        <li
                            key={rule.label}
                            className={
                                isValid
                                    ? "text-success"
                                    : "text-text-secondary"
                            }
                        >
                            <span className="mr-2" aria-hidden="true">
                                {isValid ? "✓" : "•"}
                            </span>

                            {rule.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}