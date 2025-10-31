"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["es"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"Política de privacidad"} locale="es">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
