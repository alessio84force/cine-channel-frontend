"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { CONTACT_2025 } from "@/legal/texts/contact";

export default function Page(){
  const html = CONTACT_2025["it"] || CONTACT_2025["en"];
  return (
    <LegalLayout title={"Contatti"} locale="it">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
