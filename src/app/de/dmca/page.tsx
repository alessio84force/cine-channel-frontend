"use client";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { DMCA_2025 } from "@/legal/texts/dmca";

export default function Page(){
  const html = DMCA_2025["de"] || DMCA_2025["en"];
  return (
    <LegalLayout title={"DMCA-Mitteilung"} locale="de">
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
