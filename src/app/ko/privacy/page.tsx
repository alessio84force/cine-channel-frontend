"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRIVACY_2025 } from "@/legal/texts/privacy";

export default function Page() {
  const html = PRIVACY_2025["ko"] || PRIVACY_2025["en"];
  return (
    <LegalLayout title={"개인정보 처리방침"} locale="ko">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
