import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';
import {promises as fs} from 'fs';
import path from 'path';
import {randomUUID} from 'crypto';
import {getStripe} from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), 'data', 'connect');
async function ensureDir(){ await fs.mkdir(DATA_DIR, {recursive:true}); }
async function writeMap(id: string, data: any){
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, `${id}.json`), JSON.stringify(data,null,2),'utf8');
}
async function readMap(id: string){
  try { return JSON.parse(await fs.readFile(path.join(DATA_DIR, `${id}.json`),'utf8')); }
  catch { return {}; }
}

export async function POST() {
  try {
    const stripe = getStripe();
    if (!stripe) return NextResponse.json({error:'Stripe no configurado (falta STRIPE_SECRET_KEY)'}, {status:500});

    const jar = await cookies();
    const hadCookie = Boolean(jar.get('cc_draft')?.value);
    let cid = jar.get('cc_draft')?.value || randomUUID();

    const current = await readMap(cid);
    if (current.accountId) {
      const res = NextResponse.json({accountId: current.accountId, already:true});
      if (!hadCookie) {
        res.cookies.set('cc_draft', cid, { path:'/', httpOnly:false, sameSite:'lax', maxAge:60*60*24*30 });
      }
      return res;
    }

    const account = await stripe.accounts.create({
      type: 'express',
      country: 'ES',
      capabilities: { card_payments: { requested: true }, transfers: { requested: true } }
    });

    await writeMap(cid, { accountId: account.id, createdAt: new Date().toISOString() });

    const res = NextResponse.json({ accountId: account.id });
    if (!hadCookie) {
      res.cookies.set('cc_draft', cid, { path:'/', httpOnly:false, sameSite:'lax', maxAge:60*60*24*30 });
    }
    return res;

  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Stripe error (create-account)' }, { status: 500 });
  }
}
