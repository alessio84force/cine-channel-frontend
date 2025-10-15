import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

// Stripe richiede runtime Node.js
export const runtime = 'nodejs';

export async function POST() {
  const stripe = getStripe();

  // Fallback: se non hai configurato Stripe, usa una rotta interna (relativa)
  if (!stripe) {
    console.warn('[creator-onboarding] STRIPE_SECRET_KEY mancante: uso fallback mock (relative path).');
    return NextResponse.json({ url: '/es/creator/onboarding/success?mock=1' });
  }

  const price = process.env.STRIPE_PRICE_ONBOARDING_999;
  if (!price) {
    console.error('[creator-onboarding] STRIPE_PRICE_ONBOARDING_999 mancante');
    return NextResponse.json({ error: 'Stripe price non configurato' }, { status: 500 });
  }

  // TODO: identifica l'utente reale (sessione); per demo usiamo un riferimento fisso
  const clientRef = 'demo-user-1';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    client_reference_id: clientRef,
    line_items: [{ price, quantity: 1 }],
    success_url: `${process.env.APP_URL || 'http://localhost:3000'}/es/creator/onboarding/success`,
    cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/es/creator/onboarding/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
