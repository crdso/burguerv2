import type { Category, Product, ProductExtra } from '../types'

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
 * Imagens são ilustrativas; nenhum produto tem foto real vinculada aqui.
 */
export const PRODUCTS: Product[] = [
  // Entradas
  {
    id: 'meia-batata',
    name: 'Meia Porção Batatas Fritas',
    description: '',
    price: 15,
    category: 'entradas',
    imagePlaceholder: true,
  },
  {
    id: 'batatas-fritas',
    name: 'Batatas Fritas',
    description: '',
    price: 25,
    category: 'entradas',
    imagePlaceholder: true,
  },
  {
    id: 'batatas-fritas-especial',
    name: 'Batatas Fritas Especial',
    description: 'Com creme de cheddar e bacon em tiras.',
    price: 30,
    category: 'entradas',
    imagePlaceholder: true,
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados.',
    price: 25,
    category: 'entradas',
    imagePlaceholder: true,
  },
  {
    id: 'bolinhas-queijo',
    name: 'Bolinhas de queijo',
    description: '',
    price: 27,
    category: 'entradas',
    imagePlaceholder: true,
  },

  // Hambúrgueres — todos com opção vegetariana e troca de queijo onde fizer sentido
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
    imagePlaceholder: true,
  },
  {
    id: 'refri-600',
    name: 'Refrigerante 600 ml',
    description: '',
    price: 9,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'refri-1l',
    name: 'Refrigerante 1 litro',
    description: '',
    price: 11,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'suco-laranja-300',
    name: 'Suco Natural Laranja 300 ml',
    description: '',
    price: 8,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'h2o',
    name: 'H2O ou H2O Limoneto',
    description: '',
    price: 8,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'agua-gas',
    name: 'Água com gás',
    description: '',
    price: 5,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'agua-mineral',
    name: 'Água Mineral',
    description: '',
    price: 4,
    category: 'bebidas',
    imagePlaceholder: true,
  },
  {
    id: 'soda-italiana-500',
    name: 'Soda italiana 500 ml',
    description: '',
    price: 16,
    category: 'bebidas',
    imagePlaceholder: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
