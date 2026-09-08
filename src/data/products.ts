import type { Category, Product, ProductExtra } from '../types'

import imgMeiaBatata from '../products/meiabatata.jpg'
import imgBatataFrita from '../products/batatafrita.jpeg'
import imgBatataCheddar from '../products/batatafrita-cheddar.jfif'
import imgOnionRings from '../products/onionrings.jpg'
import imgBolinhaQueijo from '../products/bolinhadequeijo.jfif'
import imgRefriLata from '../products/refrigerantelata.jpg'
import imgRefri600 from '../products/refrigerante500ml.jpg'
import imgRefri1l from '../products/refrigerante1l.jfif'
import imgSucoLaranja from '../products/sucodelaranja.jfif'
import imgH2o from '../products/h2o.png'
import imgAguaGas from '../products/aguacomgas.png'
import imgAguaSemGas from '../products/aguasemgas.png'
import imgSodaItaliana from '../products/sodaitaliana.jpg'

export const CATEGORIES: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'hamburgueres', label: 'Hambúrgueres' },
  { id: 'bebidas', label: 'Bebidas' },
]

/**
 * Adicionais oficiais do cardápio Cajuí.
 * Usados nos hambúrgueres onde fizer sentido.
 */
const ADD_ONS: ProductExtra[] = [
  { id: 'add-tomate', label: 'Tomate', price: 3 },
  { id: 'add-cebola', label: 'Cebola', price: 3 },
  { id: 'add-alface', label: 'Alface', price: 3 },
  { id: 'add-cheddar', label: 'Fatia de Cheddar', price: 7 },
  { id: 'add-cebola-caramelizada', label: 'Cebola caramelizada', price: 7 },
  { id: 'add-bacon', label: 'Bacon', price: 7 },
  { id: 'add-abacaxi', label: 'Abacaxi caramelizado', price: 7 },
  { id: 'add-burguer-140', label: 'Hambúrguer artesanal 140g', price: 12 },
  { id: 'add-onion-rings', label: 'Onion Rings', price: 7 },
]

/**
 * Cardápio real Cajuí — não inventar produtos, preços ou adicionais.
 * Imagens vinculadas somente quando há correspondência inequívoca por nome de arquivo.
 * “Imagens ilustrativas.” permanece visível no cardápio.
 */
export const PRODUCTS: Product[] = [
  // Entradas
  {
    id: 'meia-batata',
    name: 'Meia Porção Batatas Fritas',
    description: '',
    price: 15,
    category: 'entradas',
    image: imgMeiaBatata,
  },
  {
    id: 'batatas-fritas',
    name: 'Batatas Fritas',
    description: '',
    price: 25,
    category: 'entradas',
    image: imgBatataFrita,
  },
  {
    id: 'batatas-fritas-especial',
    name: 'Batatas Fritas Especial',
    description: 'Com creme de cheddar e bacon em tiras.',
    price: 30,
    category: 'entradas',
    image: imgBatataCheddar,
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados.',
    price: 25,
    category: 'entradas',
    image: imgOnionRings,
  },
  {
    id: 'bolinhas-queijo',
    name: 'Bolinhas de queijo',
    description: '',
    price: 27,
    category: 'entradas',
    image: imgBolinhaQueijo,
  },

  // Hambúrgueres — permanecem com placeholder (sem foto inequívoca fornecida)
  {
    id: 'cheese-burguer',
    name: 'Cheese Burguer',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar e molho especial da casa.',
    price: 25,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'burguer',
    name: 'Burguer',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, barbecue, cebola roxa, tomate, alface e molho especial da casa.',
    price: 31,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'abacashow',
    name: 'Abacashow',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, barbecue, abacaxi caramelizado e molho especial da casa.',
    price: 35,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'burguer-onion',
    name: 'Burguer Onion',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, Onion Rings, barbecue e molho especial da casa.',
    price: 35,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'cebola-caramelizada',
    name: 'Cebola caramelizada',
    description:
      'Pão selado na chapa, hambúrguer artesanal 140 gramas, queijo cheddar, bacon, cebola caramelizada e molho especial da casa.',
    price: 36,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'insano',
    name: 'Insano',
    description:
      'Pão selado na chapa, duplo hambúrguer artesanal 140 gramas, duplo cheddar, duplo bacon, barbecue e molho especial da casa.',
    price: 42,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: true,
    vegetarianOption: true,
  },
  {
    id: 'burguer-chicken',
    name: 'Burguer chicken',
    description: 'Pão selado na chapa, cream cheese, frango empanado, cebola e alface.',
    price: 34,
    category: 'hamburgueres',
    imagePlaceholder: true,
    extras: ADD_ONS,
    cheeseOption: false,
    vegetarianOption: false,
  },

  // Bebidas
  {
    id: 'refri-lata',
    name: 'Refrigerante lata',
    description: '',
    price: 7,
    category: 'bebidas',
    image: imgRefriLata,
  },
  {
    id: 'refri-600',
    name: 'Refrigerante 600 ml',
    description: '',
    price: 9,
    category: 'bebidas',
    image: imgRefri600,
  },
  {
    id: 'refri-1l',
    name: 'Refrigerante 1 litro',
    description: '',
    price: 11,
    category: 'bebidas',
    image: imgRefri1l,
  },
  {
    id: 'suco-laranja-300',
    name: 'Suco Natural Laranja 300 ml',
    description: '',
    price: 8,
    category: 'bebidas',
    image: imgSucoLaranja,
  },
  {
    id: 'h2o',
    name: 'H2O ou H2O Limoneto',
    description: '',
    price: 8,
    category: 'bebidas',
    image: imgH2o,
  },
  {
    id: 'agua-gas',
    name: 'Água com gás',
    description: '',
    price: 5,
    category: 'bebidas',
    image: imgAguaGas,
  },
  {
    id: 'agua-mineral',
    name: 'Água Mineral',
    description: '',
    price: 4,
    category: 'bebidas',
    image: imgAguaSemGas,
  },
  {
    id: 'soda-italiana-500',
    name: 'Soda italiana 500 ml',
    description: '',
    price: 16,
    category: 'bebidas',
    image: imgSodaItaliana,
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
