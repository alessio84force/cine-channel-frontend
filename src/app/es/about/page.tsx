"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { ABOUT_2025 } from "@/legal/texts/about";

export default function Page(){
  const html = ABOUT_2025["es"] || ABOUT_2025["en"];
  return (
    <LegalLayout title={"Acerca de"} locale="es">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
