import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';
import {promises as fs} from 'fs';
import path from 'path';
import {getStripe} from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), 'data', 'connect');
async function readMap(id: string){
  try { return JSON.parse(await fs.readFile(path.join(DATA_DIR, `${id}.json`),'utf8')); }
  catch { return {}; }
}

export async function GET() {
  try {
    const stripe = getStripe();
    if (!stripe) return NextResponse.json({error:'Stripe no configurado'}, {status:500});

    const jar = await cookies();
    const cid = jar.get('cc_draft')?.value;
    if (!cid) return NextResponse.json({connected:false, reason:'no-cookie'});

    const map = await readMap(cid);
    if (!map.accountId) return NextResponse.json({connected:false, reason:'no-account'});

    const acc = await stripe.accounts.retrieve(map.accountId);
    return NextResponse.json({
      connected: Boolean((acc as any).details_submitted),
      accountId: acc.id,
      detailsSubmitted: (acc as any).details_submitted ?? false,
      payoutsEnabled: (acc as any).payouts_enabled ?? false,
      requirements: (acc as any).requirements ?? null
    });
  } catch (e:any) {
    return NextResponse.json({connected:false, reason:'retrieve-failed', error: e?.message ?? 'Stripe error (status)'}, {status:200});
  }
}
