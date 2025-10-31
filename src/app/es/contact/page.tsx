"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { CONTACT_2025 } from "@/legal/texts/contact";

export default function Page(){
  const html = CONTACT_2025["es"] || CONTACT_2025["en"];
  return (
    <LegalLayout title={"Contacto"} locale="es">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
