const fs = require('fs');
const p = 'src/lib/ui.ts';
let s = fs.readFileSync(p, 'utf8');

function hasLang(lang) {
  const re = new RegExp('^\\s*' + lang + '\\s*:', 'm');
  return re.test(s);
}

const m = s.match(/en:\s*\{[\s\S]*?\n\s*\},/m);
if (!m) {
  console.error('❌ Non trovo il blocco UI.en in', p);
  process.exit(1);
}
const enBlock = m[0];

function addLang(lang) {
  if (hasLang(lang)) return false;
  const newBlock = enBlock.replace(/^en:/, lang + ':'); // cambia etichetta
  // Inserisci prima della chiusura dell'oggetto UI: la riga che contiene solo "}"
  s = s.replace(/\n\}\s*$/m, `\n  ${newBlock}\n}\n`);
  return true;
}

const added = ['it','de','pt'].map(addLang).some(Boolean);
if (added) {
  fs.writeFileSync(p, s);
  console.log('✅ Aggiunti blocchi UI per: it/de/pt (duplicati da en)');
} else {
  console.log('ℹ️  it/de/pt erano già presenti in UI');
}
