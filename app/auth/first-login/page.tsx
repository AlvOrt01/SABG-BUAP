import { AuthCard } from "../components/auth-card";
import { FirstLogin } from "./first-login-form";

export const metadata = {
  title: "Protege tu cuenta | SABG-BUAP",
};

export default function FirstLoginPage() {
  return (
    <AuthCard
      title="Protege tu cuenta"
      description="Crea una contraseña para activar tu cuenta."
    >
      <FirstLogin />
    </AuthCard>
  );
}