import {NextResponse} from 'next/server';
import {getStripe} from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const stripe = getStripe();
    if (!stripe) return NextResponse.json({error:'Stripe no configurado'}, {status:500});

    const body = await req.json().catch(()=>({}));
    const accountId = body?.accountId as string | undefined;
    if (!accountId) return NextResponse.json({error:'Falta accountId'}, {status:400});

    const link = await stripe.accounts.createLoginLink(accountId);
    return NextResponse.json({ url: link.url });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message ?? 'Stripe error (dashboard-link)' }, { status: 500 });
  }
}
