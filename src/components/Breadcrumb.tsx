import Link from 'next/link';

type Item = { label: string; href?: string };
export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav className="px-6 py-3 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-white/70">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-white transition">{it.label}</Link>
            ) : (
              <span className="text-white">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="select-none text-white/40">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
