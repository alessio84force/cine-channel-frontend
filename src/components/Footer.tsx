export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white/60">
        © {year} Cine-Channel — Todos los derechos reservados.
      </div>
    </footer>
  );
}
