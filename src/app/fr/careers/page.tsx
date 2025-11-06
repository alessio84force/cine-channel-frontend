import LegalLayout from "@/components/legal/LegalLayout";
import LegalHTML from "@/components/legal/LegalHTML";
import { JOBS_2025 } from "@/legal/texts/misc";
const LANG = "fr";
export default function Page(){
  const title =
    LANG==="es"?"Empleo":
    LANG==="it"?"Lavora con noi":
    LANG==="fr"?"Carrières":
    LANG==="de"?"Emploi & Carrières":
    LANG==="pt"?"Carreiras":
    LANG==="ar"?"الوظائف":
    LANG==="ru"?"Вакансии":
    LANG==="zh"?"招聘":
    LANG==="ko"?"채용":
    "Careers";
  const html = JOBS_2025[LANG];
  return <LegalLayout title={title}><LegalHTML html={html}/></LegalLayout>;
}
