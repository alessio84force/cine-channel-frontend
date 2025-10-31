"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { COOKIES_2025 } from "@/legal/texts/cookies";

export default function Page(){
  const html = COOKIES_2025["ko"] || COOKIES_2025["en"];
  return (
    <LegalLayout title={"쿠키 정책"} locale="ko">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
