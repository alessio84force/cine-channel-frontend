import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { locale } = await req.json().catch(() => ({ locale: 'es' }));
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const sk = process.env.STRIPE_SECRET_KEY;
    if (!sk) {
      // DEV fallback: fingi “successo” e rimanda alla onboarding con paid=1
      const successUrl = `${origin}/${locale}/creator/onboarding?paid=1&dev=1`;
      return new Response(JSON.stringify({ url: successUrl, dev: true }), { status: 200, headers: { 'content-type':'application/json' }});
    }
    const stripe = new Stripe(sk, { apiVersion: '2024-06-20' });

    const success_url = `${origin}/${locale}/creator/onboarding?paid=1&mode=live`;
    const cancel_url  = `${origin}/${locale}/creator/onboarding?paid=0`;

    const priceId = process.env.STRIPE_PRICE_CHANNEL_CREATION;
    let session: Stripe.Checkout.Session;

    if (priceId) {
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{ price: priceId, quantity: 1 }],
        success_url, cancel_url,
        metadata: { reason: 'channel_creation_fee' }
      });
    } else {
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: 999, // 9.99 €
            product_data: { name: 'Cuota de creación de canal — CINE-CHANNEL' }
          }
        }],
        success_url, cancel_url,
        metadata: { reason: 'channel_creation_fee' }
      });
    }

    return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: { 'content-type':'application/json' }});
  } catch (e:any) {
    return new Response(JSON.stringify({ error: e?.message || 'CHECKOUT_ERROR' }), { status: 500, headers: { 'content-type':'application/json' }});
  }
}
