"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRESS_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = PRESS_2025["es"] || PRESS_2025["en"];
  return (
    <LegalLayout title={"Prensa"} locale="es">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
