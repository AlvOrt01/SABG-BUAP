import { AuthCard } from "../components/auth-card";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Inicio de sesión | SABG-BUAP",
};

export default function LoginPage() {
  return (
    <AuthCard
      title="SABG-BUAP"
      description="Inicio de sesión"
      footer={
        <div className="flex items-center justify-center gap-2">
          <span aria-hidden="true">♧</span>
          <span>Soporte y Ayuda</span>
        </div>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}