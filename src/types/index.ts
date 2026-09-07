export type Category = 'entradas' | 'hamburgueres' | 'bebidas'

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
  cheeseOption?: boolean
  vegetarianOption?: boolean
}

export interface CartItemSelection {
  extraIds: string[]
  note: string
  cheese?: 'cheddar' | 'mucarela'
  vegetarian?: boolean
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
