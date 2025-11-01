import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { PRESS_2025 } from "@/legal/texts/misc";
import { type Locale } from "@/i18n/dict";

const LANG = "it" as Locale;

const TITLES: Record<Locale,string> = {
  en:"Press", es:"Prensa", it:"Stampa", fr:"Presse", de:"Presse", pt:"Imprensa",
  ar:"الصحافة", ru:"Пресса", zh:"媒体中心", ko:"프레스"
};

export default function Page(){
  const html = (PRESS_2025 as any)[LANG] || (PRESS_2025 as any).en;
  return (
    <LegalLayout title={TITLES[LANG]}>
      <LegalHTML html={html}/>
    </LegalLayout>
  );
}
