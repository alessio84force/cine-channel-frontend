"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { JOBS_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = JOBS_2025["ru"] || JOBS_2025["en"];
  return (
    <LegalLayout title={"Вакансии"} locale="ru">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
