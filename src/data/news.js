// News/Events que aparecem na timeline
// Pode ser alimentado manualmente ou via APIs de redes sociais
const news = [
  {
    id: 'news-001',
    title: 'CAMISA RASGANDO - Álbum Completo Lançado',
    type: 'lançamento', // lançamento, show, parceria, anúncio, notícia
    date: '2024-03-15',
    timestamp: new Date('2024-03-15').getTime(),
    description: 'Álbum completo que marca o auge da carreira independente de SILVAHXZ. Com produções autorais e colaborações especiais que exploram novos territórios sonoros.',
    image: 'https://i.scdn.co/image/ab6761610000f17831340b1d32d09b86f41a0e28',
    source: 'spotify', // spotify, instagram, youtube, tiktok, manual
    link: 'https://open.spotify.com/album/39tUq34Rsp1NKvjDO5n029',
    stats: {
      streams: '50K+',
      likes: 1200
    }
  },
  {
    id: 'news-002',
    title: 'Show em São Paulo - Confirmado!',
    type: 'show',
    date: '2024-02-10',
    timestamp: new Date('2024-02-10').getTime(),
    description: 'SILVAHXZ se apresenta no maior palco da cidade. Uma noite de pura energia e conexão com o público.',
    venue: 'Casa de Música SP',
    location: 'São Paulo, SP',
    eventDate: '2024-06-20',
    source: 'instagram',
    link: 'https://instagram.com/silvahxzzz',
    capacity: '1.500 pessoas'
  },
  {
    id: 'news-003',
    title: 'Parceria com Produtor Renomado',
    type: 'parceria',
    date: '2024-01-28',
    timestamp: new Date('2024-01-28').getTime(),
    description: 'SILVAHXZ anuncia colaboração especial com produtor internacional. Primeira música da parceria em breve!',
    collaborators: ['Produtor X'],
    source: 'instagram',
    link: 'https://instagram.com/silvahxzzz'
  },
  {
    id: 'news-004',
    title: 'SANGUE NOBRE atinge 1M streams',
    type: 'notícia',
    date: '2023-12-05',
    timestamp: new Date('2023-12-05').getTime(),
    description: 'A música que consolidou SILVAHXZ na cena ultrapassa a marca de 1 milhão de streams. Um marco na carreira!',
    image: 'https://i.scdn.co/image/ab6761610000f17831340b1d32d09b86f41a0e28',
    source: 'spotify',
    link: 'https://open.spotify.com/track/60KAi7cs8jR1t1KtoUIFxG',
    stats: {
      streams: '1.2M',
      likes: 8500
    }
  },
  {
    id: 'news-005',
    title: 'Novo clipe em breve',
    type: 'anúncio',
    date: '2023-11-20',
    timestamp: new Date('2023-11-20').getTime(),
    description: 'SILVAHXZ anuncia a produção de um novo clipe visual. Prepare-se para uma experiência audiovisual única!',
    releaseDate: '2023-12-10',
    source: 'youtube',
    link: 'https://www.youtube.com/@silvahxz'
  },
  {
    id: 'news-006',
    title: 'Entrevista exclusiva ao Podcast',
    type: 'notícia',
    date: '2023-10-15',
    timestamp: new Date('2023-10-15').getTime(),
    description: 'SILVAHXZ participa de podcast renomado falando sobre carreira, desafios e próximos passos. Ouça agora!',
    source: 'youtube',
    link: 'https://www.youtube.com/@silvahxz',
    duration: '1h30min'
  }
]

export default news
