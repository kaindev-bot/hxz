const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const fetch = require('node-fetch')

async function download(url, dest){
  const res = await fetch(url)
  if(!res.ok) throw new Error('Failed to download ' + url)
  const buffer = await res.arrayBuffer()
  fs.writeFileSync(dest, Buffer.from(buffer))
}

async function ensureDir(d){ if(!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }) }

async function processLocal(filePath, outDir){
  await ensureDir(outDir)
  const fileName = path.basename(filePath)
  await sharp(filePath).resize(1600).webp({ quality: 80 }).toFile(path.join(outDir, fileName + '.webp'))
  await sharp(filePath).resize(1600).avif({ quality: 60 }).toFile(path.join(outDir, fileName + '.avif'))
}

async function processRemote(url, outDir, name){
  await ensureDir(outDir)
  const tmp = path.join(outDir, name + '.tmp')
  await download(url, tmp)
  await sharp(tmp).resize(1600).webp({ quality: 80 }).toFile(path.join(outDir, name + '.webp'))
  await sharp(tmp).resize(1600).avif({ quality: 60 }).toFile(path.join(outDir, name + '.avif'))
  fs.unlinkSync(tmp)
}

async function main(){
  const out = path.join(process.cwd(), 'public', 'optimized')
  await ensureDir(out)

  // optimize local hero fallback if present
  const localHero = path.join(process.cwd(), 'src', 'assets', 'hero-fallback.jpg')
  if(fs.existsSync(localHero)){
    console.log('Processing local hero...')
    try{
      await processLocal(localHero, out)
    }catch(e){
      console.warn('Skipping local hero (invalid image or placeholder)', e.message)
    }
  }

  // process featured cover from artist data (read file and extract URL to avoid ESM/CJS interop)
  const artistFileContent = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'artist.js'), 'utf8')
  const m = artistFileContent.match(/featuredCover:\s*'([^']+)'/)
  if(m && m[1] && m[1].startsWith('http')){
    console.log('Downloading featured cover...')
    try{
      await processRemote(m[1], out, 'featured-cover')
    }catch(e){ console.warn('Failed to download featured cover:', e.message) }
  }

  console.log('Image optimization complete. Files in public/optimized')
}

main().catch(e=>{ console.error(e); process.exit(1) })
