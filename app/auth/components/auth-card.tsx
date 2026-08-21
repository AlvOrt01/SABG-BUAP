import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-background px-4 py-8">
      <div
        className="
          w-full
          max-w-md
          overflow-hidden
          rounded-xl
          border
          border-border
          border-t-4
          border-t-primary
          bg-surface
          shadow-(--shadow-card)
        "
      >
        <div className="px-8 pb-8 pt-9">
          <header className="mb-8 text-center">
            <div className="mb-5 flex justify-center">
              <Image
                src="/logotipo.png"
                alt="Logotipo SABG-BUAP"
                width={82}
                height={82}
                priority
                className="h-auto w-20.5"
              />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-secondary">
              {title}
            </h1>

            <p className="mt-2 text-sm text-text-secondary">
              {description}
            </p>
          </header>

          {children}

          {footer && (
            <footer className="mt-6 border-t border-border pt-6 text-center text-sm text-text-secondary">
              {footer}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

type AuthLinkProps = {
  href: string;
  label: string;
};

export function AuthLink({ href, label }: AuthLinkProps) {
  return (
    <Link
      href={href}
      className="font-semibold text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
    >
      {label}
    </Link>
  );
}