"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { COPYRIGHT_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = COPYRIGHT_2025["zh"] || COPYRIGHT_2025["en"];
  return (
    <LegalLayout title={"版权"} locale="zh">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
