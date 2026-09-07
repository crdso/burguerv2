import { Flame, Plus } from 'lucide-react'
import type { Product } from '../types'
import { formatBRL } from '../lib/format'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  priority?: boolean
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 hover:border-ink/20 hover:shadow-sm">
      <button
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Ver ${product.name}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-sage"
      >
        <span className="flex h-full w-full items-center justify-center bg-sage">
          <Flame size={22} strokeWidth={1.2} className="text-ink/15" />
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-0.5 p-2 sm:p-2.5">
        <h3 className="line-clamp-1 font-display text-[13px] leading-none tracking-wide text-ink sm:text-[13px]">{product.name}</h3>
        <p className="line-clamp-2 min-h-[28px] font-body text-[10px] leading-snug text-muted">{product.description || '\u00A0'}</p>

        <div className="mt-auto flex items-center justify-between gap-1.5 pt-2">
          <span className="font-body text-[12px] font-bold leading-none text-flame">{formatBRL(product.price)}</span>
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="flex h-7 shrink-0 items-center justify-center gap-1 rounded-full bg-ink px-2.5 font-body text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-graphite"
          >
            <Plus size={11} strokeWidth={3} />
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}
