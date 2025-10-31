"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { TERMS_2025 } from "@/legal/texts/terms";

export default function Page() {
  const html = TERMS_2025["fr"] || TERMS_2025["en"];
  return (
    <LegalLayout title={"Conditions d’utilisation"} locale="fr">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
