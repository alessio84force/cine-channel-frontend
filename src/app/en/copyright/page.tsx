"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { COPYRIGHT_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = COPYRIGHT_2025["en"] || COPYRIGHT_2025["en"];
  return (
    <LegalLayout title={"Copyright"} locale="en">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
