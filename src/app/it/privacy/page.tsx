"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["it"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"Informativa privacy"} locale="it">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
