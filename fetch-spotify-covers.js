// Script to fetch album covers from Spotify API
// Run with: node fetch-spotify-covers.js

const releases = [
  { id: '39tUq34Rsp1NKvjDO5n029', title: 'CAMISA RASGANDO' },
  { id: '60KAi7cs8jR1t1KtoUIFxG', title: 'SANGUE NOBRE' },
  { id: '66qw1Bi9rszBbKg6uvnaaa', title: 'SEM SINAL' },
  { id: '5EUrc3ORDY0y7VwN1JJZXB', title: 'TURNO DA NOITE' },
  { id: '3IuW76Qw2vIsPbxZTDBmi7', title: 'Tá Sem Graça' }
];

async function fetchCovers() {
  console.log('Fetching album covers from Spotify...\n');
  
  for (const release of releases) {
    try {
      const response = await fetch(`https://open.spotify.com/embed/album/${release.id}`);
      console.log(`${release.title} (${release.id})`);
      
      // Try direct API if available (requires token)
      const apiUrl = `https://api.spotify.com/v1/albums/${release.id}`;
      console.log(`API: ${apiUrl}`);
      console.log('---');
    } catch (error) {
      console.log(`Error fetching ${release.title}: ${error.message}`);
    }
  }
  
  console.log('\nManual instructions:');
  console.log('1. Go to each Spotify album link below');
  console.log('2. Right-click the album cover');
  console.log('3. Copy image address');
  console.log('4. Update the image URLs in src/data/artist.js\n');
  
  releases.forEach(r => {
    console.log(`https://open.spotify.com/album/${r.id}`);
  });
}

fetchCovers();
