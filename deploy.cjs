const ghpages = require('gh-pages');
const path = require('path');

console.log('Publishing to GitHub Pages...');

// Use a cache directory in the project root to avoid ENAMETOOLONG errors in node_modules
const cacheDir = path.join(__dirname, '.gh_cache');

ghpages.publish('dist', {
    cache: cacheDir,
    dotfiles: true,
    message: 'Deploy via custom script'
}, function (err) {
    if (err) {
        console.error('Deployment Failed:', err);
    } else {
        console.log('Deployment Successful! (Published)');
    }
});
