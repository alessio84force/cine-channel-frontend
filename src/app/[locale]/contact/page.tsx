import LegalLayout from "@/components/legal/LegalLayout";
import * as ContentMod from "./content";

// Scegli il componente esportato (default o nominato "Content")
const C: any = (ContentMod as any).default ?? (ContentMod as any).Content;

// Se è una funzione React, usa quella; altrimenti fallback leggibile (evita errori di tipo)
const ContentSafe =
  typeof C === "function"
    ? (C as any)
    : (() => (
        <article className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-sm opacity-80">
            {JSON.stringify((ContentMod as any).default ?? ContentMod, null, 2)}
          </pre>
        </article>
      ));

// NOTE: Contact viene sostituito dopo con sed
export default function Page() {
  return (
    <LegalLayout title="Contact">
      <ContentSafe />
    </LegalLayout>
  );
}
