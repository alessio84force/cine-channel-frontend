export const dynamic = 'force-dynamic';

export default async function ChannelAbout() {
  return (
    <main id="content" className="px-6 py-6 max-w-3xl">
      <h2 className="text-xl font-bold">Sobre el canal</h2>
      <p className="mt-2 text-white/80">
        Aquí va la descripción del canal: misión, calendario de publicaciones, equipo y enlaces externos.
      </p>
      <ul className="mt-4 list-disc pl-5 text-white/80">
        <li>Enlace externo 1</li>
        <li>Enlace externo 2</li>
      </ul>
    </main>
  );
}
