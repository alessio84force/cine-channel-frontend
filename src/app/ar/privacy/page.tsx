"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["ar"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"سياسة الخصوصية"} locale="ar">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
