import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink px-5 pb-8 pt-14 text-white sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={SITE_CONFIG.brandLogo}
                alt={SITE_CONFIG.brand}
                width="200"
                height="200"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = SITE_CONFIG.brandLogoFallback
                }}
              />
              <span className="font-display text-2xl tracking-wide text-white">CAJUÍ</span>
            </div>
            <p className="mt-3 max-w-[24ch] font-body text-sm text-white/70">Vem ser cliente/amigo.</p>
            <p className="mt-1 font-body text-sm text-white/60">Palmas - TO</p>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-widest2 text-white">
              <Clock size={13} className="text-flame" /> Horário
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              {SITE_CONFIG.hours.map((h) => (
                <li key={h.days} className="font-body text-sm text-white/75">
                  {h.days}
                  <span className="block text-white/50">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-widest2 text-white">
              <MapPin size={13} className="text-flame" /> Unidades
            </h2>
            <div className="mt-3 flex flex-col gap-3 font-body text-sm text-white/75">
              {SITE_CONFIG.units.map((u) => (
                <div key={u.id}>
                  <p className="font-semibold text-white">{u.label}</p>
                  <p className="text-white/60">{u.detail}</p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    <a
                      href={u.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      Ver localização
                    </a>
                    <span className="text-white/20">·</span>
                    <a
                      href={u.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-flame hover:text-ember"
                    >
                      Pedir nesta unidade
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-body text-[11px] font-bold uppercase tracking-widest2 text-white">Pedidos & contato</h2>
            <div className="mt-3 flex flex-col gap-2.5">
              {SITE_CONFIG.units.map((u) => (
                <a
                  key={u.id}
                  href={u.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 font-body text-sm font-bold text-ink transition-colors hover:bg-cream"
                >
                  <MessageCircle size={15} /> WhatsApp {u.label}
                </a>
              ))}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 font-body text-sm text-white/75 transition-colors hover:text-white"
              >
                <Instagram size={15} /> {SITE_CONFIG.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/55">
            © {year} {SITE_CONFIG.brand}. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-white/40">Cardápio oficial BeeFood · Fotos reais onde disponível.</p>
        </div>
      </div>
    </footer>
  )
}
