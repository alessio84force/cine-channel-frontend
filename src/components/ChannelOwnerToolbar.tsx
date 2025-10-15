'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ChannelOwnerToolbar({ locale, slug }:{ locale:string; slug:string }) {
  const sp = useSearchParams();
  const isOwner = sp?.get('me') === '1';
  if (!isOwner) return null;
  return (
    <div className="sticky top-14 z-30 bg-amber-500/10 ring-1 ring-amber-300/30 text-amber-200 px-4 py-2 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-sm">Modo propietario activo</div>
        <Link href={`/${locale}/channel/${slug}/settings`} className="rounded-full px-3 py-1.5 bg-amber-300 text-neutral-900 hover:opacity-90 text-sm">
          Ajustes del canal
        </Link>
      </div>
    </div>
  );
}
