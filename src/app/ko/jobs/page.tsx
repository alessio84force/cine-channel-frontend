"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { JOBS_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = JOBS_2025["ko"] || JOBS_2025["en"];
  return (
    <LegalLayout title={"채용"} locale="ko">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
