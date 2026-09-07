import { MapPin, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export function UnitsSection() {
  return (
    <section id="unidades" aria-label="Onde estamos" className="bg-sage px-3 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-2">
          <p className="font-body text-[11px] font-bold uppercase tracking-widest2 text-flame">Onde estamos</p>
          <h2 className="font-display text-4xl leading-none tracking-wide text-ink sm:text-5xl">NOSSAS UNIDADES</h2>
          <p className="max-w-[50ch] font-body text-sm text-muted">
            Duas unidades em Palmas. Escolha a mais próxima para pedir ou ver no mapa.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SITE_CONFIG.units.map((unit, index) => (
            <div
              key={unit.id}
              className={`relative flex flex-col rounded-2xl border bg-surface p-6 shadow-sm sm:p-7 ${
                index === 0 ? 'border-ink/10 ring-1 ring-ink/5' : 'border-line'
              }`}
            >
              {index === 0 && (
                <span className="absolute -top-3 left-6 rounded-full bg-flame px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white">
                  Em destaque
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide text-ink">{unit.label}</h3>
              <p className="mt-1 font-body text-sm text-muted">Ao lado {unit.id === '306' ? 'do DBB' : 'da Unidas'}</p>
              <p className="mt-1 font-body text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                Palmas — TO
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={unit.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-graphite"
                >
                  <MessageCircle size={16} /> Fazer pedido
                </a>
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-6 py-3 font-body text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  <MapPin size={16} /> Ver localização
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 font-body text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Terça a domingo · 18h às 23h · Segunda fechado
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
