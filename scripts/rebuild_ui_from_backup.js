const fs = require('fs');

const src = 'src/lib/ui.ts.bak';
const dst = 'src/lib/ui.ts';

if (!fs.existsSync(src)) {
  console.error('Backup non trovato:', src);
  process.exit(1);
}

const bak = fs.readFileSync(src, 'utf8');

// helper: estrae un blocco lingua:  es: { ... },
function getBlock(lang) {
  const re = new RegExp(`\\n\\s*${lang}\\s*:\\s*\\{[\\s\\S]*?\\n\\s*\\},`, 'm');
  const m = bak.match(re);
  if (!m) {
    console.error(`Blocchi UI mancanti nel backup: ${lang}`);
    process.exit(1);
  }
  // rimuovo "lang:" iniziale e lascio solo il corpo { ... },
  const full = m[0].trim();
  const body = full.replace(new RegExp(`^${lang}\\s*:\\s*`), '');
  return body; // es: "{ ... },"
}

const es = getBlock('es');
const en = getBlock('en');
const fr = getBlock('fr');

// Costruisco UI.ts nuovo con type + 6 lingue
const out = `// Rebuilt from backup by scripts/rebuild_ui_from_backup.js
export type L = 'es'|'en'|'fr'|'it'|'de'|'pt'

export const UI: Record<L, any> = {
  es: ${es.trim().startsWith('{') ? es.trim().slice(0) : `{${es.trim()}}`}
  en: ${en.trim().startsWith('{') ? en.trim().slice(0) : `{${en.trim()}}`}
  fr: ${fr.trim().startsWith('{') ? fr.trim().slice(0) : `{${fr.trim()}}`}
  it: ${en.trim().startsWith('{') ? en.trim().slice(0) : `{${en.trim()}}`}
  de: ${en.trim().startsWith('{') ? en.trim().slice(0) : `{${en.trim()}}`}
  pt: ${en.trim().startsWith('{') ? en.trim().slice(0) : `{${en.trim()}}`}
}
// end
`;

fs.writeFileSync(dst, out);
console.log('✅ Ricostruito', dst);
