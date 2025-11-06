import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { HELP_2025 } from "@/legal/texts/misc";

export default function Page(){
  const html = HELP_2025["es"] || HELP_2025["en"];
  return (
    <LegalLayout title="Ayuda">
      <LegalHTML html={html} />
    </LegalLayout>
  );
}
