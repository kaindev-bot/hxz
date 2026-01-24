# Portfolio Template (Vite + React)

Template inicial para um portfólio com WebGL, animações e scroll suave, inspirado no visual alvo.

## Tecnologias incluídas (sugestão)
- Vite
- React
- Tailwind CSS
- three.js + @react-three/fiber + @react-three/drei
- GSAP (animações)
- Lenis (opcional para smooth scroll)

## Como rodar (PowerShell)
1. Abra o terminal no diretório do projeto:
   cd "c:\\Users\\notebook\\Desktop\\projeto pro\\portfolio-template"
2. Instale dependências:
   npm install
   # se preferir instalar manualmente: npm install react react-dom three @react-three/fiber @react-three/drei gsap lenis
   # instalar dev tools (se não estiverem no package.json): npm install -D tailwindcss postcss autoprefixer vite
3. Inicie o servidor de desenvolvimento:
   npm run dev

## Próximos passos sugeridos

 Próximo passo sugerido: integrar Lenis + GSAP ScrollTrigger para animações sincronizadas ao scroll.

 Atualização: Lenis + GSAP ScrollTrigger foram integrados e os cards da seção `Projects` agora animam ao entrar na viewport com o scroll suave.
Nova atualização: implementei o hero WebGL interativo (esfera que reage ao mouse e ao scroll) com pinning via ScrollTrigger, e adicionei um elemento decorativo com parallax na seção `Projects`.

Testes sugeridos:
- Testar o comportamento do pin em telas pequenas (mobile) — ajustar `end` do ScrollTrigger se necessário.
- Verificar consumo de GPU ao usar o hero em dispositivos mais lentos e fornecer fallback (imagem estática) se preciso.

Próximo passo sugerido: integrar Lenis + GSAP ScrollTrigger para animações sincronizadas ao scroll.

Sinta-se à vontade para pedir que eu implemente a próxima etapa (layout das seções ou animações específicas).

## Personalizar identidade gráfica (rápido)
Siga estes passos para aplicar a identidade do cliente rapidamente:
1. Substitua o logo em `src/assets/logo.svg` (SVG preferido).
2. Atualize as cores em `src/index.css` nas variáveis `--color-accent`, `--color-brand`, `--color-bg`, `--color-text`.
3. Troque as fontes no `<head>` do `index.html` (link do Google Fonts) se necessário.
4. Atualize `src/config/site.js` com o título, descrição e autor.
5. Substitua imagens de `src/data/projects.js` ou conecte a um CMS. Rebuild com `npm run build`.

## Branding
Veja `BRAND.md` para guias rápidos de uso do logo, cores e tipografia.

## Observações legais sobre músicas e embeds
- Este template usa *embeds* públicos do Spotify e YouTube para reproduzir músicas — os arquivos de áudio não são baixados nem armazenados pelo template.
- Certifique-se de que você tem permissão para usar imagens oficiais do artista em materiais promocionais.
- Se desejar integrar via API (listar faixas automaticamente), é possível usar a API Web do Spotify (requer credenciais de desenvolvedor).

## Como apontar para um artista (Linktree / Spotify)
1. Localize o link do artista (Linktree, Spotify ou YouTube). Ex: `https://linktr.ee/silvahxz`.
2. Abra `src/data/artist.js` e atualize `id`, `name`, `image` e `releases` conforme o artista.
3. Use as páginas públicas do Spotify/YouTube para obter IDs de albums/tracks para `releases`.
4. Atualize `src/config/site.js` com título e contatos do artista.


## A — Fallback automático do Hero & otimizações rápidas (implementado)
- O hero agora detecta dispositivos/condições de baixo consumo (prefer-reduced-motion, pouca memória, poucos núcleos, tela pequena) e usa uma imagem estática em vez do WebGL para preservar performance.
- As imagens de projetos usam `<picture>` com preferência por WebP quando disponível e `loading="lazy"`.

- Hover preview: ao passar o mouse sobre releases (Discografia) ou projetos, o site tenta reproduzir um trecho de áudio (preview) com volume baixo. Se a faixa tiver `preview_url` (obtido pelo script Spotify), ela será usada; caso contrário, o site reproduz um breve tom de demonstração.

## B — Script para popular releases via Spotify (offline)
- Use `SPOTIFY_CLIENT_ID` e `SPOTIFY_CLIENT_SECRET` nas variáveis de ambiente e rode:

  SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/fetch_spotify_releases.js <artistId>

  Isso atualiza `src/data/artist.js` com uma lista de releases obtida do Spotify (o script é offline e grava no arquivo local).

## C — Estilo: preset 'lando' implementado
- O preset `theme: 'lando'` já está ativo em `src/config/site.js` e aplica uma paleta semelhante (fundo escuro + acento lime). Mude `site.theme` para `default` se preferir o amarelo original.

## Como ver o site localmente (se estiver com problemas)
1. Abra PowerShell na pasta do projeto:
   cd "c:\Users\notebook\Desktop\projeto pro\portfolio-template"
2. Instale dependências (se ainda não fez):
   npm install
3. Inicie o servidor de desenvolvimento:
   npm run dev
4. Abra o endereço que o Vite imprimir (geralmente http://localhost:5173) no navegador.

Se preferir, posso executar `npm install` e `npm run dev` para você e copiar o link do servidor (diga se quer que eu rode aqui). 