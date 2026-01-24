const artist = {
  id: '2qJDF1YmI7NvKG0atwCut8', // Spotify artist id
  name: 'SILVAHXZ',
  bio: 'Artista independente! Salve rapaziadinha! Seu mano HXZ fica muito feliz em saber que você está aqui. Nasci pra ser artista.',
  image: 'https://i.scdn.co/image/ab6761610000517431340b1d32d09b86f41a0e28',
  featuredCover: 'https://i.scdn.co/image/ab6761610000f17831340b1d32d09b86f41a0e28', // SANGUE NOBRE cover
  // Adicione capas manualmente neste array quando quiser controlar imagens diretamente
  // Exemplo: { src: 'https://i.scdn.co/image/ab67616d0000...', alt: 'Título do álbum', link: 'https://open.spotify.com/album/ID' }
  manualCovers: [],
  // Para adicionar capas dos álbuns: acesse cada uma no Spotify, clique com botão direito na imagem da capa
  // e copie a URL (ex: https://i.scdn.co/image/ab67616d0000...). Cole abaixo no campo 'image'.
  releases: [
    { 
      id: '39tUq34Rsp1NKvjDO5n029', 
      title: 'CAMISA RASGANDO', 
      type: 'Álbum', 
      date: '2024',
      image: 'https://i.audiomack.com/silvahxz-1/324faa924f.webp?width=416', // URL da capa: 'https://i.scdn.co/image/...'
      description: 'Álbum completo que marca o auge da carreira independente de SILVAHXZ. Com produções autorais e colaborações especiais.',
      tracks: 12
    },
    { 
      id: '60KAi7cs8jR1t1KtoUIFxG', 
      title: 'SANGUE NOBRE', 
      type: 'Single', 
      date: '2023',
      image: 'https://cdn-images.dzcdn.net/images/cover/29c2ea3ecf748f8ea9c62ffb023c63df/500x500-000000-80-0-0.jpg', // URL da capa: 'https://i.scdn.co/image/...'
      description: 'O hit que consolidou SILVAHXZ na cena. Uma faixa que combina agressividade e poesia, refletindo a essência artística.',
      featured: true
    },
    { 
      id: '66qw1Bi9rszBbKg6uvnaaa', 
      title: 'SEM SINAL', 
      type: 'Single', 
      date: '2023',
      image: 'https://cdn-images.dzcdn.net/images/cover/182a5216f686beaabb7e60daba6f4913/500x500-000000-80-0-0.jpg', // URL da capa: 'https://i.scdn.co/image/...'
      description: 'Faixa experimental que explora novos territórios sonoros. Uma produção que marca evolução artística.',
      tracks: 1
    },
    { 
      id: '5EUrc3ORDY0y7VwN1JJZXB', 
      title: 'TURNO DA NOITE', 
      type: 'Single', 
      date: '2022',
      image: 'https://i.audiomack.com/silvahxz-1/18172157-7.webp?width=360', // URL da capa: 'https://i.scdn.co/image/...'
      description: 'Lançamento que ganhou relevância nas plataformas. Um clássico que permanece em rotação contínua.',
      tracks: 1
    },
    { 
      id: '3IuW76Qw2vIsPbxZTDBmi7', 
      title: 'Tá Sem Graça', 
      type: 'Single', 
      date: '2022',
      image: 'https://i.audiomack.com/silvahxz-1/17114072-a.webp?width=360', // URL da capa: 'https://i.scdn.co/image/...'
      description: 'Uma das primeiras produções independentes que chamou atenção para o projeto SILVAHXZ.',
      tracks: 1
    }
  ],
  socials: {
    spotify: 'https://open.spotify.com/artist/2qJDF1YmI7NvKG0atwCut8',
    youtube: 'https://www.youtube.com/@silvahxz',
    instagram: 'https://instagram.com/silvahxzzz',
    tiktok: 'https://tiktok.com/@silvahxzzz'
  }
}

export default artist
