"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { ACCESS_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = ACCESS_2025["it"] || ACCESS_2025["en"];
  return (
    <LegalLayout title={"Accessibilità"} locale="it">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
