import {NextResponse} from 'next/server';
import {getStripe} from '@/lib/stripe';
import {headers} from 'next/headers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function getOrigin() {
  const h = await headers();
  return h.get('origin') || `${h.get('x-forwarded-proto') || 'http'}://${h.get('x-forwarded-host') || h.get('host')}`;
}

export async function POST(req: Request) {
  try {
    const stripe = getStripe();
    if (!stripe) return NextResponse.json({error:'Stripe no configurado'}, {status:500});

    const body = await req.json().catch(()=>({}));
    const accountId = body?.accountId as string | undefined;
    const locale = body?.locale || 'es';
    if (!accountId) return NextResponse.json({error:'Falta accountId'}, {status:400});

    const origin = await getOrigin();
    const refresh_url = `${origin}/${locale}/creator/onboarding?connect=retry`;
    const return_url  = `${origin}/${locale}/creator/onboarding?connect=done`;

    const link = await stripe.accountLinks.create({
      account: accountId,
      type: 'account_onboarding',
      refresh_url,
      return_url
    });

    return NextResponse.json({ url: link.url });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message ?? 'Stripe error (account-link)' }, { status: 500 });
  }
}
