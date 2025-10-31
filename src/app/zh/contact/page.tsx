"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { CONTACT_2025 } from "@/legal/texts/contact";

export default function Page(){
  const html = CONTACT_2025["zh"] || CONTACT_2025["en"];
  return (
    <LegalLayout title={"联系"} locale="zh">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
