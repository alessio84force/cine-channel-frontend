import fs from 'node:fs';

const file = 'src/app/[locale]/layout.tsx';
if (!fs.existsSync(file)) { console.error('File non trovato:', file); process.exit(1); }
let s = fs.readFileSync(file, 'utf8');

// Import type L
if (!/import\s+type\s+\{\s*L\s*\}\s+from\s+"@\/lib\/ui"/.test(s)) {
  s = `import type { L } from "@/lib/ui";\n` + s;
}

// Rendi async la funzione export default se non lo è
s = s.replace(/export\s+default\s+function\s+/,'export default async function ');

// Fai sì che la firma accetti params
if (!/\(\s*\{\s*children[^}]*,?\s*params\s*:\s*\{\s*locale\s*:\s*L\s*\}\s*\}\s*\)/.test(s)) {
  // diverse forme possibili: uniformiamo a { children, params }: { children: React.ReactNode; params: { locale: L } }
  s = s.replace(
    /export\s+default\s+async\s+function\s+\w*\s*\([^\)]*\)\s*\{/,
    'export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: L } }) {'
  );
}

// Inserisci estrazione del locale se assente
if (!/const\s+\{\s*locale\s*\}\s*=\s*params\s*as?\s*\{?\s*locale\s*:\s*L\s*\}?;/.test(s)
 && !/const\s+locale\s*=\s*params\.locale/.test(s)) {
  s = s.replace(/\{\s*$/m, `{\n  const locale = (params as { locale: L }).locale;\n`);
}

// Passa il locale al Footer (sia self-closing che non)
s = s.replace(/<Footer\s*\/>/g, '<Footer locale={locale} />');
s = s.replace(/<Footer>(\s*)<\/Footer>/g, '<Footer locale={locale}>$1</Footer>');

fs.writeFileSync(file, s, 'utf8');
console.log('OK: aggiornato', file);
