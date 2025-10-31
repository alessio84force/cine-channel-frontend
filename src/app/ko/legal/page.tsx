"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { LEGALNOTICE_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = LEGALNOTICE_2025["ko"] || LEGALNOTICE_2025["en"];
  return (
    <LegalLayout title={"법적 고지"} locale="ko">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
