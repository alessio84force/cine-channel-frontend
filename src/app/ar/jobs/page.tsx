"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { JOBS_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = JOBS_2025["ar"] || JOBS_2025["en"];
  return (
    <LegalLayout title={"وظائف"} locale="ar">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
