"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { LEGALNOTICE_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = LEGALNOTICE_2025["zh"] || LEGALNOTICE_2025["en"];
  return (
    <LegalLayout title={"法律声明"} locale="zh">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
