"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["fr"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"Politique de confidentialité"} locale="fr">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
