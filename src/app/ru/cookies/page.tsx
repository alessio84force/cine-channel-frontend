"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { COOKIES_2025 } from "@/legal/texts/cookies";

export default function Page(){
  const html = COOKIES_2025["ru"] || COOKIES_2025["en"];
  return (
    <LegalLayout title={"Политика cookie"} locale="ru">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
