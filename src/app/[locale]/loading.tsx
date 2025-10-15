export default function HomeLoading() {
  return (
    <main className="px-6 py-6">
      <div className="h-10 w-72 bg-white/10 rounded mb-2" />
      <div className="h-4 w-80 bg-white/5 rounded" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="rounded-2xl ring-1 ring-white/10 overflow-hidden">
            <div className="aspect-[16/9] bg-white/5 animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}
