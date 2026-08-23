type MunicipalHeaderProps = {
    userName?: string;
    userRole?: string;
};

export function MunicipalHeader({
    userName = "María Hernández López",
    userRole = "Usuario municipal",
}: MunicipalHeaderProps) {
    return (
        <header className="flex h-20 items-center justify-between border-b border-border bg-surface px-8">
            <h1 className="text-2xl font-bold text-primary">
                SABG-BUAP
            </h1>

            <div className="flex items-center gap-5">
                <button
                    type="button"
                    className="text-text-secondary transition-colors hover:text-primary"
                    aria-label="Notificaciones"
                >
                    🔔
                </button>

                <div className="h-10 w-px bg-border" />

                <div className="text-right">
                    <p className="text-sm font-semibold text-text-primary">
                        {userName}
                    </p>

                    <p className="text-xs font-medium text-text-secondary">
                        {userRole}
                    </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    MH
                </div>
            </div>
        </header>
    );
}