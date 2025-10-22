const fs = require('fs');

const FILES = [
  'middleware.ts',
  'src/lib/locale-client.ts',
  'src/components/LanguageSwitcher.tsx',
  'src/components/NavBar.tsx',
  'src/components/Footer.tsx',
  'src/app/[locale]/layout.tsx',
  'src/app/[locale]/page.tsx',
  'src/app/[locale]/explore/page.tsx',
  'src/app/[locale]/not-found.tsx',
].filter(f => fs.existsSync(f));

const six = `['es','en','fr','it','de','pt']`;
const sixDq = `["es","en","fr","it","de","pt"]`;

// helpers
function replaceAllLocalesArrays(s) {
  // Array letterali
  s = s.replace(/\[(?:\s*['"](?:es|en|fr)['"]\s*,?){3}\s*\]/g, six); // [ 'es','en','fr' ] → six
  s = s.replace(/\[(?:\s*"(?:es|en|fr)"\s*,?){3}\s*\]/g, sixDq);     // [ "es","en","fr" ] → sixDq
  // new Set([...])
  s = s.replace(/new\s+Set\s*\(\s*\[(?:[\s\S]*?)(?:'es'|"es")\s*,\s*(?:'en'|"en")\s*,\s*(?:'fr'|"fr")\s*\]\s*\)/g,
                `new Set(${six})`);
  // const LOCALES = ... (qualsiasi forma semplice)
  s = s.replace(/(const\s+LOCALES\s*=\s*)(?:new\s+Set\s*)?\(\s*\[([\s\S]*?)\]\s*\)/g,
                `$1(new Set(${six}))`);
  s = s.replace(/(const\s+LOCALES\s*=\s*)(\[[\s\S]*?\])/g,
                `$1${six}`);
  return s;
}

function replaceUnionTypes(s) {
  // 'es'|'en'|'fr'  →  'es'|'en'|'fr'|'it'|'de'|'pt'
  s = s.replace(/'es'\|'en'\|'fr'/g, `'es'|'en'|'fr'|'it'|'de'|'pt'`);
  s = s.replace(/"es"\|"en"\|"fr"/g, `"es"|"en"|"fr"|"it"|"de"|"pt"`);
  return s;
}

FILES.forEach(p => {
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  s = replaceAllLocalesArrays(s);
  s = replaceUnionTypes(s);
  if (s !== before) {
    fs.writeFileSync(p, s);
    console.log('✓ aggiornato', p);
  } else {
    console.log('• nessuna modifica', p);
  }
});

console.log('Done.');
