"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { TERMS_2025 } from "@/legal/texts/terms";

export default function Page() {
  const html = TERMS_2025["it"] || TERMS_2025["en"];
  return (
    <LegalLayout title={"Termini di servizio"} locale="it">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
