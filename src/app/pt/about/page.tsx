"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { ABOUT_2025 } from "@/legal/texts/about";

export default function Page(){
  const html = ABOUT_2025["pt"] || ABOUT_2025["en"];
  return (
    <LegalLayout title={"Sobre"} locale="pt">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
