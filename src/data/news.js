// News/Events que aparecem na timeline
// Pode ser alimentado manualmente ou via APIs de redes sociais
const news = [
  {
    id: 'welcome',
    title: 'Acompanhe as novidades!',
    type: 'anúncio',
    date: new Date().toISOString().split('T')[0],
    timestamp: Date.now(),
    description: 'Siga SILVAHXZ nas redes sociais para atualizações em tempo real (24h).',
    link: 'https://instagram.com/silvahxzzz',
    source: 'instagram'
  }
]

export default news
