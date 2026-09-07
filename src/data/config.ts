export const SITE_CONFIG = {
  brand: 'CAJUÍ',
  brandLogo: '/brand/cajui-logo.png',
  brandLogoFallback: '/brand/cajui-logo.jpg',
  tagline: 'Hambúrguer artesanal em Palmas — Vem ser cliente/amigo.',
  instagramHandle: '@_cajui_',
  instagramUrl: 'https://www.instagram.com/_cajui_',
  address: {
    city: 'Palmas',
    state: 'TO',
  },
  units: [
    {
      id: '306' as const,
      label: '306 Sul',
      detail: 'Ao lado do DBB',
      short: '306 Sul — ao lado do DBB',
      whatsappNumber: '556381158701',
      whatsappUrl:
        'https://wa.me/556381158701?text=Boa%20noite%2C%20gostaria%20de%20fazer%20um%20pedido!',
      mapsUrl:
        'https://www.google.com/maps/dir/Smart+Sondagens+e+Funda%C3%A7%C3%B5es/-10.1979646,-48.3211372/@-10.1979376,-48.3212361,109a,35y,2.46t/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x9324cbdeb98fb141:0xe36530eb81500001!2m2!1d-48.3212318!2d-10.1979675!1m1!4e1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      id: '602' as const,
      label: '602 Sul',
      detail: 'Ao lado da Unidas',
      short: '602 Sul — ao lado da Unidas',
      whatsappNumber: '5563984409053',
      whatsappUrl:
        'https://wa.me/5563984409053?text=Boa%20noite%2C%20gostaria%20de%20fazer%20um%20pedido!',
      mapsUrl: 'https://maps.app.goo.gl/vwuTvLZL63G9BsxLA',
    },
  ],
  hours: [
    { days: 'Terça a domingo', time: '18h às 23h' },
    { days: 'Segunda-feira', time: 'Fechado' },
  ],
  deliveryFee: 0,
  estimatedDelivery: 'Entre 20 e 60 minutos',
  media: {
    scrub: '/media/hamburguer-scrub.mp4',
    scrubMobile: '/media/hamburguer-scrub-mobile.mp4',
    poster: '/media/hamburguer-poster.jpg',
    final: '/media/hamburguer-final.jpg',
  },
} as const

export type UnitId = (typeof SITE_CONFIG.units)[number]['id']

export function getUnitById(id: UnitId) {
  return SITE_CONFIG.units.find((u) => u.id === id)
}
