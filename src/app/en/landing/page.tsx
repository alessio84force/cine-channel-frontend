export const metadata = {
  title: 'Cine-Channel for Creators & Fans (US)',
  description: 'Launch your channel in minutes. Unlimited uploads. You set the price (min €2.50).'
};

export default function USLanding() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
          Launch. Monetize. Grow.
        </h1>
        <p className="mt-3 text-white/80">
          Cine-Channel helps gamers, streamers, vloggers and filmmakers launch a channel in minutes.
          You set the monthly price (min €2.50). We handle the rest.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/en/creator/onboarding" className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
            Create your channel
          </a>
          <a href="/en/explore" className="rounded-full px-4 py-2 ring-1 ring-white/10 hover:bg-white/10">
            Explore channels
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl ring-1 ring-white/10 p-5">
          <h3 className="font-bold">Unlimited uploads</h3>
          <p className="mt-2 text-white/80">Publish as much as you want. Your channel, your rules.</p>
        </div>
        <div className="rounded-2xl ring-1 ring-white/10 p-5">
          <h3 className="font-bold">Direct subscriptions</h3>
          <p className="mt-2 text-white/80">Fans subscribe monthly. You set the price (min €2.50).</p>
        </div>
        <div className="rounded-2xl ring-1 ring-white/10 p-5">
          <h3 className="font-bold">Stripe Connect</h3>
          <p className="mt-2 text-white/80">Fast and secure payouts to your Stripe account.</p>
        </div>
      </section>
    </main>
  );
}
