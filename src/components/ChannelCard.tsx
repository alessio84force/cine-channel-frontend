import Image from 'next/image';
import Link from 'next/link';
import type { Cat } from '@/lib/data';

export default function ChannelCard({
  href,
  title,
  category,
  thumb,
  date,
  views
}: {
  href: string;
  title: string;
  category: Cat;
  thumb: string;
  date?: string;
  views?: number;
}) {
  return (
    <article className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] group">
      <div className="relative aspect-video">
        <Image src={thumb} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute bottom-2 left-2 text-xs rounded-full px-2 py-0.5 bg-black/60 backdrop-blur-sm">
          {category}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        {(date || views != null) && (
          <p className="mt-1 text-xs text-white/60">
            {date ? new Date(date).toLocaleDateString('es-ES') : null}
            {date && views != null ? ' · ' : ''}
            {views != null ? `${Intl.NumberFormat('es-ES').format(views)} vistas` : null}
          </p>
        )}
        <div className="mt-3">
          <Link href={href} className="text-sm rounded-full px-3 py-1.5 bg-white text-neutral-900 hover:opacity-90">
            Ver canal
          </Link>
        </div>
      </div>
    </article>
  );
}
