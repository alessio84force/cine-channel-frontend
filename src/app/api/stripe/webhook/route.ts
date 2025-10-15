import {NextResponse} from 'next/server';
import {promises as fs} from 'fs';
import path from 'path';
import Stripe from 'stripe';
import {getStripe} from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), 'data', 'connect');
async function ensureDir(){ await fs.mkdir(DATA_DIR, {recursive:true}); }
async function mergeByAccount(accountId: string, patch: any){
  await ensureDir();
  // piccola scansione: trova il file che contiene questo accountId
  const files = await fs.readdir(DATA_DIR).catch(()=>[]);
  for (const f of files) {
    const full = path.join(DATA_DIR, f);
    const raw = await fs.readFile(full, 'utf8').catch(()=>null);
    if (!raw) continue;
    try {
      const json = JSON.parse(raw);
      if (json.accountId === accountId) {
        const merged = {...json, ...patch, updatedAt: new Date().toISOString()};
        await fs.writeFile(full, JSON.stringify(merged,null,2),'utf8');
        return true;
      }
    } catch {}
  }
  return false;
}

export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) return NextResponse.json({error:'Stripe no configurado'}, {status:500});

  const sig = req.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) return NextResponse.json({error:'No webhook secret/signature'}, {status:400});

  const buf = Buffer.from(await req.arrayBuffer());
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, secret);
  } catch (err: any) {
    return NextResponse.json({error:`Webhook signature verification failed: ${err.message}`}, {status:400});
  }

  try {
    switch (event.type) {
      case 'account.updated': {
        const acc = event.data.object as Stripe.Account;
        await mergeByAccount(acc.id, {
          details_submitted: acc.details_submitted,
          payouts_enabled: acc.payouts_enabled,
          requirements: acc.requirements
        });
        break;
      }
      // aggiungi qui altri eventi rilevanti
    }
  } catch (e) {
    // no-op
  }

  return NextResponse.json({received:true});
}
