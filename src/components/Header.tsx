import { useEffect, useState } from 'react'
import { Instagram, ShoppingBag } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'
import { useCartStore, cartItemCount } from '../store/cartStore'

const NAV_LINKS = [
  { href: '#top', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#unidades', label: 'Unidades' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const items = useCartStore((s) => s.items)
  const openCart = useCartStore((s) => s.openCart)
  const count = cartItemCount(items)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[var(--header-h)] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(20,50,31,0.08)]' : ''
      }`}
      style={{ backgroundColor: 'var(--page)' }}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a href="#top" aria-label={`${SITE_CONFIG.brand} — início`} className="flex items-center gap-3 shrink-0">
          <img
            src={SITE_CONFIG.brandLogo}
            alt={SITE_CONFIG.brand}
            width="200"
            height="200"
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 shadow-sm ring-1 ring-ink/5"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = SITE_CONFIG.brandLogoFallback
            }}
          />
          <span className="font-display text-[22px] tracking-wide text-ink sm:text-[26px]">CAJUÍ</span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-5" aria-label="Navegação principal">
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[13px] font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Cajuí"
              className="flex items-center gap-1.5 font-body text-[13px] font-semibold text-ink/60 hover:text-ink"
            >
              <Instagram size={16} /> <span className="hidden lg:inline">{SITE_CONFIG.instagramHandle}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Pedir agora, ${count} ${count === 1 ? 'item' : 'itens'} no carrinho`}
            className="relative flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 py-2 font-body text-[13px] font-bold text-white transition-colors hover:bg-graphite"
          >
            <ShoppingBag size={15} strokeWidth={2.5} />
            <span className="hidden sm:inline">Pedir agora</span>
            {count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-flame px-1 font-body text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
