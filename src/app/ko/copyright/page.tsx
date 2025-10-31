"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { COPYRIGHT_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = COPYRIGHT_2025["ko"] || COPYRIGHT_2025["en"];
  return (
    <LegalLayout title={"저작권"} locale="ko">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
