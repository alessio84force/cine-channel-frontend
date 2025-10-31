"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { HELP_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = HELP_2025["pt"] || HELP_2025["en"];
  return (
    <LegalLayout title={"Ajuda"} locale="pt">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
