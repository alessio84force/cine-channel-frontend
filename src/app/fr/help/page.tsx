"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { HELP_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = HELP_2025["fr"] || HELP_2025["en"];
  return (
    <LegalLayout title={"Aide"} locale="fr">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
