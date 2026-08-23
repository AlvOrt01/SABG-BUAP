"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { useRouter } from "next/navigation";

import { AuthField } from "../components/auth-field";
import { authClient } from "@/lib/auth-client";

export function LoginForm() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      setErrorMessage("El correo electrónico o la contraseña son incorrectos.");
      setIsLoading(false);
      return;
    }

    router.push("/municipal/dashboard");
    router.refresh();

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <AuthField
        id="email"
        label="Correo electrónico"
        type="email"
        name="email"
        autoComplete="email"
      />

      <AuthField
        id="password"
        label="Contraseña"
        type="password"
        name="password"
        autoComplete="current-password"
      />

      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-1 h-11 rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Iniciando sesión..." : "Ingresar"}
      </button>
    </form>
  );
}