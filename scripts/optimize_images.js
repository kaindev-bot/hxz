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
    await processLocal(localHero, out)
  }

  // process featured cover from artist data if remote
  const artist = require('../src/data/artist')
  if(artist.featuredCover && artist.featuredCover.startsWith('http')){
    console.log('Downloading featured cover...')
    await processRemote(artist.featuredCover, out, 'featured-cover')
  }

  console.log('Image optimization complete. Files in public/optimized')
}

main().catch(e=>{ console.error(e); process.exit(1) })
