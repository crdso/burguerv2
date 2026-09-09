import type { Category, Product } from '../types'

export const CATEGORIES: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'hamburguer-do-mes', label: 'Hambúrguer do Mês' },
  { id: 'hamburgueres', label: 'Hambúrgueres' },
  { id: 'bebidas', label: 'Bebidas' },
]

/**
 * Cardápio sincronizado com BeeFood (https://menu.beefood.com.br/cajui263?a=3929) em 2026-09-08.
 * Fonte principal: cajui-beefood-visible-text.txt + HTML + image-urls.
 * Preços, nomes e descrições copiados literalmente, sem invenção.
 * Imagens: 9 fotos reais baixadas para public/products/cajui/ ; demais produtos sem foto usam placeholder.
 */
export const PRODUCTS: Product[] = [
  // Entradas (7)
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados.',
    price: 25,
    category: 'entradas',
    image: '/products/cajui/onion-rings.jpg',
  },
  {
    id: 'batatas-fritas',
    name: 'Batatas Fritas',
    description: '',
    price: 25,
    category: 'entradas',
    image: '/products/cajui/batatas-fritas.jpg',
  },
  {
    id: 'meia-batata',
    name: 'Meia Porção Batatas Fritas',
    description: '',
    price: 15,
    category: 'entradas',
    imagePlaceholder: true,
  },
  {
    id: 'batatas-fritas-especial',
    name: 'Batatas Fritas Especial',
    description: 'Com creme de cheddar e bacon em tiras.',
    price: 30,
    category: 'entradas',
    image: '/products/cajui/batatas-fritas-especial.jpg',
  },
  {
    id: 'bolinhas-queijo',
    name: 'BOLINHAS DE QUEIJO',
    description: '',
    price: 27,
    category: 'entradas',
    image: '/products/cajui/bolinhas-queijo.webp',
  },
  {
    id: 'coxinha-chambari',
    name: 'COXINHA DE CHAMBARI',
    description: 'MASSA DE MANDIOCA DELICIOSA,10 unidades',
    price: 32,
    category: 'entradas',
    image: '/products/cajui/coxinha-chambari.webp',
  },
  {
    id: 'palha-italiana',
    name: 'Palha Italiana',
    description: '',
    price: 7,
    category: 'entradas',
    image: '/products/cajui/palha-italiana.webp',
  },

  // Hambúrguer do Mês (1)
  {
    id: 'hamburguer-cajui',
    name: 'Hambúrguer Cajuí',
    description:
      'Pão selado, molho especial da casa, hambúrguer artesanal 140 gramas, queijo coalho, bacon e geleia de caju levemente apimentada.',
    price: 39,
    category: 'hamburguer-do-mes',
    image: '/products/cajui/hamburguer-cajui.webp',
  },

  // Hambúrgueres (8)
  {
    id: 'abacashow',
    name: 'ABACASHOW',
    description:
      'Pao selado na chapa,hamburguer artesanal 140 gr,queijo cheedar,bacon,barbecue,abacaxi caramelizado e molho especial da casa',
    price: 35,
    category: 'hamburgueres',
    image: '/products/cajui/abacashow.webp',
  },
  {
    id: 'burguer',
    name: 'Burguer',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, barbecue, cebola roxa, tomate, alface e molho especial da casa.',
    price: 31,
    category: 'hamburgueres',
    image: '/products/cajui/burguer.jpg',
  },
  {
    id: 'burguer-chicken',
    name: 'Burguer Chicken',
    description: 'Pão selado na chapa, cream cheese, frango empanado, cebola e alface.',
    price: 34,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },
  {
    id: 'burguer-onion',
    name: 'Burguer Onion',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, onion rings, barbecue e molho especial da casa.',
    price: 35,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },
  {
    id: 'cebola-caramelizada',
    name: 'Cebola Caramelizada',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, cebola caramelizada e molho especial da casa.',
    price: 36,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },
  {
    id: 'cheese-burguer',
    name: 'Cheese Burguer',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140gramas, queijo cheddar e molho especial da casa.',
    price: 25,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },
  {
    id: 'combo-casal',
    name: 'COMBO CASAL',
    description: '1 Chesse burguer, 1 abacashow, anéis de cebola, nuggets, batata frita especial e molhos.',
    price: 99.9,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },
  {
    id: 'insano',
    name: 'Insano',
    description:
      'Pão selado na chapa, duplo hambúrguer artesanal 140gramas, duplo cheddar, duplo bacon, barbecue e molho especial da casa.',
    price: 42,
    category: 'hamburgueres',
    imagePlaceholder: true,
  },

  // Bebidas (11)
  {
    id: 'guarana-350',
    name: 'GUARANA 350 ML',
    description: '',
    price: 7,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'agua-sem-gas',
    name: 'AGUA SEM GAS',
    description: '',
    price: 4,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'cajuina-500',
    name: 'CAJUINA 500 ML',
    description: '',
    price: 17.9,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'coca-zero-350',
    name: 'COCA ZERO 350 ML',
    description: '',
    price: 7,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'coca-1l-zero',
    name: 'Coca 1L Zero',
    description: '',
    price: 11,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'cajuina-330',
    name: 'CAJUINA 330 ML',
    description: '',
    price: 13.9,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'coca-zero-600',
    name: 'COCA COLA ZERO 600 ML',
    description: '',
    price: 9,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'guarana-600',
    name: 'GUARANÁ 600 ML',
    description: '',
    price: 9,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'soda-morango',
    name: 'SODA ITALIANA DE MORANGO 500ML',
    description: '',
    price: 16,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'suco-laranja-300',
    name: 'SUCO DE LARANJA 300 ML',
    description: '',
    price: 8,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'soda-maca-verde',
    name: 'SODA ITALIANA DE MAÇA VERDE 500ML',
    description: '',
    price: 16,
    category: 'bebidas',
    imagePlaceholder: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
