import {NextResponse} from 'next/server';

// Slug riservati o vietati
const RESERVED = new Set([
  'admin','login','signin','signup','register','user','users',
  'creator','creators','channel','channels','api',
  'es','en','fr','it','de','pt',
  'pricing','checkout','stripe','webhook'
]);

// Esempi mock di slug "già presi"
const TAKEN = new Set(['cine-channel','netflix','test']);

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const raw = (searchParams.get('slug') || '').toLowerCase();

  const res: any = {slug: raw, available: false};

  // Lunghezza
  if (raw.length < 3 || raw.length > 60) {
    res.reason = 'length';
    return NextResponse.json(res);
  }
  // Formato (solo a-z 0-9, separati da singoli -)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(raw)) {
    res.reason = 'format';
    return NextResponse.json(res);
  }
  // Riservati o presi
  if (RESERVED.has(raw)) {
    res.reason = 'reserved';
    return NextResponse.json(res);
  }
  if (TAKEN.has(raw)) {
    res.reason = 'taken';
    return NextResponse.json(res);
  }

  return NextResponse.json({slug: raw, available: true});
}
