export default function ChannelLoading() {
  return (
    <div className="animate-pulse">
      <div className="relative h-56 w-full bg-white/5" />
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="flex items-end gap-4">
          <div className="w-24 h-24 rounded-xl bg-white/10 ring-2 ring-white/5" />
          <div className="pb-2 flex-1">
            <div className="h-6 w-48 bg-white/10 rounded" />
            <div className="mt-2 h-4 w-32 bg-white/10 rounded" />
          </div>
          <div className="w-28 h-9 bg-white/10 rounded-full" />
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i)=>(
            <div key={i} className="aspect-video bg-white/5 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
