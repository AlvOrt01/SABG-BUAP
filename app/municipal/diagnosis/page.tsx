
import { MunicipalProgressHeader } from "@/components/dashboard/progress/municipal-progress-header";
import { DiagnosisForm } from "./components/diagnosis-form";

export default function DiagnosisPage() {
  return (
    <>
      <MunicipalProgressHeader />

      <main className="flex-1 bg-background px-4 py-6 pb-28 md:px-6 md:py-8 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <DiagnosisForm />
        </div>
      </main>
    </>
  );
}