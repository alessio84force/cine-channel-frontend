export default function ExploreLoading() {
  return (
    <main className="px-6 py-6">
      <div className="h-8 w-64 bg-white/10 rounded mb-2" />
      <div className="h-4 w-96 bg-white/5 rounded" />
      <div className="mt-4 flex gap-2">
        {Array.from({length:5}).map((_,i)=>(
          <div key={i} className="h-9 w-28 bg-white/5 rounded-full" />
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="rounded-xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video bg-white/5 animate-pulse" />
            <div className="p-3">
              <div className="h-4 w-1/2 bg-white/10 rounded" />
              <div className="mt-2 h-3 w-2/3 bg-white/5 rounded" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
