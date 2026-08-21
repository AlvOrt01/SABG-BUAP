"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";

import { AuthField } from "../components/auth-field";
import { PasswordRules } from "../components/password-rules";

export function FirstLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);

    const formData = new FormData(event.currentTarget);

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    console.log("Nueva contraseña establecida.");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <AuthField
        id="password"
        label="Nueva contraseña"
        type="password"
        name="password"
        placeholder="Crea tu nueva contraseña"
        autoComplete="new-password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <AuthField
        id="confirmPassword"
        label="Confirmar contraseña"
        type="password"
        name="confirmPassword"
        placeholder="Repite tu nueva contraseña"
        autoComplete="new-password"
      />

      <PasswordRules password={password} />

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-danger/20 bg-danger/5 px-3 py-2 text-sm text-danger"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="
          flex h-11 w-full items-center justify-center gap-2
          rounded-lg bg-primary text-sm font-semibold text-white
          shadow-sm transition-all
          hover:bg-primary-dark
          focus:outline-none focus:ring-4 focus:ring-primary/20
          active:scale-[0.99]
        "
      >
        Guardar y continuar
      </button>
    </form>
  );
}