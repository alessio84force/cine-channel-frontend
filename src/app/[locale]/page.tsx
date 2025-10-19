export default async function HomeLocale() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Cine Channel</h1>
      <p className="mt-4 text-white/80">Se vedi questo testo, il rendering funziona.</p>

      <nav className="mt-8 space-x-4">
        <a className="inline-block rounded-md bg-white text-neutral-900 px-4 py-2" href="./explore">Explore</a>
        <a className="inline-block rounded-md bg-white text-neutral-900 px-4 py-2" href="./contact">Contact</a>
        <a className="inline-block rounded-md bg-white text-neutral-900 px-4 py-2" href="./pricing">Pricing</a>
        <a className="inline-block rounded-md bg-white text-neutral-900 px-4 py-2" href="./upload">Upload</a>
      </nav>
    </main>
  )
}
