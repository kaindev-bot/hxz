# Brand / Identidade Gráfica (Template)

Este documento mostra os tokens de marca usados pelo template para que você possa substituir facilmente pelas cores e fontes do seu cliente.

Paleta principal
- Primary background: #0f172a (var(--color-bg))
- Surface: #0b1220 (var(--color-surface))
- Texto principal: #e6eef8 (var(--color-text))
- Muted: #94a3b8 (var(--color-muted))
- Accent principal: #ffde59 (var(--color-accent))
- Brand: #0ea5a4 (var(--color-brand))

Tipografia
- Títulos: Poppins (bold/700)
- Corpo: Inter (regular/400)

Logotipo
- Substitua `src/assets/logo.svg` pela sua versão vetorial (SVG).
- Favicons ficam em `public/` (ex: `favicon.svg`).

Espaçamento e layout
- Grid principal usa `max-w-6xl` para largura.
- Gutter lateral: `px-6` nas seções.

Como personalizar
1. Troque as cores nas variáveis em `src/index.css` (:
   --color-accent, --color-brand, --color-bg, --color-text)
2. Substitua `src/assets/logo.svg` pelo logo do cliente.
3. Atualize `src/config/site.js` com título, descrição e contatos.
4. Troque fontes em `index.html` (link do Google Fonts) caso queira outras.

Dicas
- Para manter performance, use WebP/AVIF nas imagens do projeto.
- Reduza complexidade do hero WebGL para dispositivos móveis e forneça fallback (imagem estática) em `Hero.jsx`.

Uso de conteúdos do artista
- Para trocar o artista, edite `src/data/artist.js` com o `id` do artista no Spotify e a `image` de capa.
- O player embute conteúdo do Spotify e YouTube; o template não faz download dos arquivos.
