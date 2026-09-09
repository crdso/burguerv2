export type Category = 'entradas' | 'hamburguer-do-mes' | 'hamburgueres' | 'bebidas'

export interface ProductExtra {
  id: string
  label: string
  price: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: Category
  image?: string
  imagePlaceholder?: boolean
  badge?: string
  extras?: ProductExtra[]
}

export interface CartItemSelection {
  extraIds: string[]
  note: string
}

export interface CartItem {
  key: string
  productId: string
  quantity: number
  selection: CartItemSelection
  unitPrice: number
}

export type DeliveryMethod = 'retirada' | 'entrega'
export type PaymentMethod = 'pix' | 'dinheiro' | 'debito' | 'credito'
export type UnitId = '306' | '602'

export interface CheckoutData {
  name: string
  phone: string
  delivery: DeliveryMethod
  address: {
    cep: string
    street: string
    number: string
    neighborhood: string
    complement: string
  }
  payment: PaymentMethod
  changeFor: string
  unitId: UnitId
}
