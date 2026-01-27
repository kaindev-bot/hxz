const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const distDir = path.join(__dirname, 'dist');

console.log('Starting manual deployment...');

try {
    if (!fs.existsSync(distDir)) {
        throw new Error('dist directory not found. Please run "npm run build" first.');
    }

    // Navigate to dist
    process.chdir(distDir);
    console.log('Changed directory to dist');

    // Initialize git repository
    // We use quiet flags to reduce noise, but show essential output
    try {
        // If .git exists, delete it to ensure fresh start
        if (fs.existsSync(path.join(distDir, '.git'))) {
            fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });
        }
    } catch (e) {
        console.log('Note: Could not clean old .git folder, proceeding...');
    }

    execSync('git init', { stdio: 'inherit' });
    execSync('git checkout -b gh-pages', { stdio: 'inherit' });
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "deploy"', { stdio: 'inherit' });

    // Push to remote using the HTTPS URL found in the user's config
    const remoteUrl = 'https://github.com/kaindev-bot/hxz.git';
    console.log(`Pushing to ${remoteUrl}...`);

    execSync(`git push -f ${remoteUrl} gh-pages`, { stdio: 'inherit' });

    console.log('Deployment successful! Site should update shortly.');
} catch (error) {
    console.error('Deployment script failed.');
    console.error(error.message);
    process.exit(1);
}
