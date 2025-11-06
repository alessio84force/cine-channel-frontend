export default function StudioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Tu estudio</h1>
      <p className="text-white/70 mb-6">Aquí podrás configurar el canal, subir imágenes y vídeos, añadir enlaces, etc.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-xl border border-white/10 p-4">
          <h2 className="font-semibold mb-2">Identidad del canal</h2>
          <div className="text-sm text-white/70">Nombre, avatar, descripción, enlaces sociales…</div>
        </section>
        <section className="rounded-xl border border-white/10 p-4">
          <h2 className="font-semibold mb-2">Subida de vídeos</h2>
          <div className="text-sm text-white/70">Próximamente: subida con validaciones, miniatura, metadatos, visibilidad…</div>
        </section>
      </div>
    </main>
  );
}
