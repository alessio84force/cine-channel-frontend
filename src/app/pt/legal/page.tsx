"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { LEGALNOTICE_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = LEGALNOTICE_2025["pt"] || LEGALNOTICE_2025["en"];
  return (
    <LegalLayout title={"Aviso legal"} locale="pt">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
