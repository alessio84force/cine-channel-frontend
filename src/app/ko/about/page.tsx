"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { ABOUT_2025 } from "@/legal/texts/about";

export default function Page(){
  const html = ABOUT_2025["ko"] || ABOUT_2025["en"];
  return (
    <LegalLayout title={"회사 소개"} locale="ko">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
