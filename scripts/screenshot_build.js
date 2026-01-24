const path = require('path')
const http = require('http-server')
const { chromium } = require('playwright')
const fs = require('fs')

async function main(){
  // build (expect already built if called after npm run build)
  const root = path.join(process.cwd(), 'dist')
  if(!fs.existsSync(root)){
    console.error('dist not found, run npm run build first')
    process.exit(1)
  }

  const server = http.createServer({ root })
  const srv = server.listen(8080)
  console.log('Serving dist at http://localhost:8080')

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } })

  const urls = ['http://localhost:8080/']
  if(!fs.existsSync('screenshots')) fs.mkdirSync('screenshots')

  for(const u of urls){
    await page.goto(u, { waitUntil: 'networkidle' })
    const name = u.replace(/https?:\/\//,'').replace(/[^a-z0-9]/gi,'_') || 'home'
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true })
    console.log('Captured', name)
  }

  await browser.close()
  srv.close()
  console.log('Screenshots saved in ./screenshots')
}

main().catch(e=>{ console.error(e); process.exit(1) })
