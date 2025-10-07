import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Pagina non trovata</h1>
      <p className="text-gray-600 mb-6">La pagina cercata non esiste.</p>
      <Link href="/" className="text-blue-600 underline">Torna alla homepage</Link>
    </main>
  );
}
