export default function CreatorPricingHint() {
  return (
    <div className="mt-4 rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 100 100" aria-hidden="true" className="mt-1">
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <polygon
            points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
            fill="url(#gold)"
          />
        </svg>
        <div className="text-sm">
          <div className="font-semibold">Información para creadores</div>
          <ul className="mt-1 list-disc pl-4 text-white/80">
            <li>Precio mínimo de suscripción recomendado: <b>2,50 €</b> al mes.</li>
            <li>La plataforma retiene <b>2 € por suscriptor</b>. Ajusta tu precio para tus objetivos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
