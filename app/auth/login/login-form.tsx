"use client";

import Link from "next/link";
import type { SubmitEvent } from "react";
import { AuthField } from "../components/auth-field";
import { authClient } from "@/lib/auth-client";
import router from "next/router";

export function LoginForm() {
  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });
    router.push("/municipal/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Correo */}
      <AuthField
        id="email"
        label="Correo electrónico"
        type="email"
        name="email"
        autoComplete="email"
      />

      {/* Contraseña */}
      <AuthField
        id="password"
        label="Contraseña"
        type="password"
        name="password"
        autoComplete="current-password"
      />

      {/* Recuperar contraseña */}
      <div className="-mt-1 flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="
            text-xs
            font-semibold
            text-[#174A91]
            transition-colors
            hover:text-[#315AA6]
            hover:underline
            underline-offset-4
          "
        >
          Olvidé mi contraseña
        </Link>
      </div>

      {/* Botón principal */}
      <button
        type="submit"
        className="
          mt-4
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-[#315AA6]
          text-base
          font-semibold
          text-white
          shadow-sm
          transition-all
          hover:bg-[#274B8F]
          focus:outline-none
          focus:ring-4
          focus:ring-[#315AA6]/20
          active:scale-[0.99]
        "
      >
        <span>Ingresar</span>
      </button>
    </form>
  );
}