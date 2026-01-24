#!/usr/bin/env node
/**
 * Simple Node script (offline) to fetch artist albums from Spotify using Client Credentials
 * Usage: SPOTIFY_CLIENT_ID=... SPOTIFY_CLIENT_SECRET=... node scripts/fetch_spotify_releases.js <artistId>
 */
const fetch = require('node-fetch')
const fs = require('fs')

async function main(){
  const artistId = process.argv[2]
  if(!artistId){
    console.error('Usage: node fetch_spotify_releases.js <artistId>')
    process.exit(1)
  }
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  if(!clientId || !clientSecret){
    console.error('Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in env')
    process.exit(1)
  }

  // get token
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + Buffer.from(clientId+':'+clientSecret).toString('base64') },
    body: 'grant_type=client_credentials'
  })
  const tokenData = await tokenRes.json()
  const token = tokenData.access_token

  // get albums
  const albumsRes = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&market=US&limit=50`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  const albums = await albumsRes.json()

  // For each album, fetch the first track to obtain preview_url if available
  const releases = []
  for(const a of (albums.items || [])){
    let preview = null
    try{
      const tracksRes = await fetch(`https://api.spotify.com/v1/albums/${a.id}/tracks?market=US&limit=1`, { headers: { Authorization: `Bearer ${token}` } })
      const tracks = await tracksRes.json()
      if(tracks.items && tracks.items[0] && tracks.items[0].preview_url){
        preview = tracks.items[0].preview_url
      }
    }catch(e){ /* ignore per-album errors */ }

    releases.push({ id: a.id, title: a.name, type: a.album_type, preview_url: preview })
  }

  // write to src/data/artist.js (simple replacement)
  const artistFile = 'src/data/artist.js'
  let content = fs.readFileSync(artistFile, 'utf8')
  // replace releases array using a simple regex
  content = content.replace(/releases:\s*\[[^\]]*\]/m, `releases: ${JSON.stringify(releases, null, 2)}`)
  fs.writeFileSync(artistFile, content, 'utf8')
  console.log('Updated releases in', artistFile)
}

main().catch(err => { console.error(err); process.exit(1) })
