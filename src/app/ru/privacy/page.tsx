"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["ru"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"Политика конфиденциальности"} locale="ru">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
