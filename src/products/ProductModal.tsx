import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Flame, Minus, Plus, X } from 'lucide-react'
import type { CartItemSelection, Product } from '../types'
import { formatBRL } from '../lib/format'
import { useCartStore, computeUnitPrice } from '../store/cartStore'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useEscapeKey } from '../hooks/useEscapeKey'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [extraIds, setExtraIds] = useState<string[]>([])
  const [cheese, setCheese] = useState<'cheddar' | 'mucarela'>('cheddar')
  const [vegetarian, setVegetarian] = useState(false)
  const [note, setNote] = useState('')
  const addItem = useCartStore((s) => s.addItem)
  const openCart = useCartStore((s) => s.openCart)

  useLockBodyScroll(Boolean(product))
  useEscapeKey(Boolean(product), onClose)

  useEffect(() => {
    setQuantity(1)
    setExtraIds([])
    setCheese('cheddar')
    setVegetarian(false)
    setNote('')
  }, [product?.id])

  const selection: CartItemSelection = useMemo(
    () => ({
      extraIds,
      note,
      cheese: product?.cheeseOption ? cheese : undefined,
      vegetarian: product?.vegetarianOption ? vegetarian : undefined,
    }),
    [extraIds, note, cheese, vegetarian, product],
  )

  const unitPrice = product ? computeUnitPrice(product, selection) : 0
  const total = unitPrice * quantity

  function toggleExtra(id: string) {
    setExtraIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))
  }

  function handleAdd() {
    if (!product) return
    addItem(product, quantity, selection)
    onClose()
    openCart()
  }

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative z-10 flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-surface sm:max-h-[80vh] sm:rounded-2xl"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-start gap-3 border-b border-line p-4">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-sage">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-sage">
                    <Flame size={20} strokeWidth={1.2} className="text-ink/15" />
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h2 id="product-modal-title" className="font-display text-2xl leading-none tracking-wide text-ink">
                  {product.name}
                </h2>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-muted">{product.description || ' '}</p>
                <p className="mt-2 font-body text-sm font-bold text-flame">{formatBRL(product.price)}</p>
                <p className="mt-1 font-body text-[10px] text-ink/40">Imagem ilustrativa.</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="-mr-1 -mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {product.cheeseOption && (
                <fieldset className="mb-4">
                  <legend className="font-body text-[11px] font-bold uppercase tracking-widest2 text-ink/45">Queijo</legend>
                  <p className="mt-1 font-body text-[11px] text-muted">Troca sem custo adicional.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      { id: 'cheddar', label: 'Cheddar' },
                      { id: 'mucarela', label: 'Muçarela' },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 font-body text-sm transition-colors ${
                          cheese === opt.id ? 'border-ink bg-ink/5 text-ink' : 'border-line text-ink/70 hover:border-ink/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="cheese"
                          value={opt.id}
                          checked={cheese === opt.id}
                          onChange={() => setCheese(opt.id as 'cheddar' | 'mucarela')}
                          className="sr-only"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              {product.vegetarianOption && (
                <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-lg border border-line bg-sage/50 px-3 py-3">
                  <input
                    type="checkbox"
                    checked={vegetarian}
                    onChange={(e) => setVegetarian(e.target.checked)}
                    className="h-4 w-4 accent-ink"
                  />
                  <span className="flex flex-col">
                    <span className="font-body text-sm font-semibold text-ink">Substituir proteína por hambúrguer vegetal</span>
                    <span className="font-body text-xs text-muted">Sem custo adicional · R$ 0,00</span>
                  </span>
                </label>
              )}

              {product.extras && product.extras.length > 0 && (
                <fieldset>
                  <legend className="font-body text-[11px] font-bold uppercase tracking-widest2 text-ink/45">Adicionais</legend>
                  <div className="mt-2 flex flex-col gap-1.5">
                    {product.extras.map((extra) => (
                      <label
                        key={extra.id}
                        className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5 transition-colors hover:border-ink/25"
                      >
                        <span className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={extraIds.includes(extra.id)}
                            onChange={() => toggleExtra(extra.id)}
                            className="h-3.5 w-3.5 accent-ink"
                          />
                          <span className="font-body text-[13px] text-ink">{extra.label}</span>
                        </span>
                        <span className="font-body text-[13px] text-flame">+ {formatBRL(extra.price)}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              <div className="mt-4">
                <label htmlFor="product-note" className="font-body text-[11px] font-bold uppercase tracking-widest2 text-ink/45">
                  Observação
                </label>
                <textarea
                  id="product-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ex: sem cebola, ponto da carne..."
                  rows={2}
                  className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-3 py-2.5 font-body text-[13px] text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-line p-4">
              <div className="flex items-center gap-2 rounded-full border border-line p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Diminuir quantidade"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
                  disabled={quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center font-body text-sm font-bold text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar quantidade"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex flex-1 items-center justify-between gap-2 rounded-full bg-ink px-5 py-3 font-body text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-graphite"
              >
                <span>Adicionar</span>
                <span>{formatBRL(total)}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
