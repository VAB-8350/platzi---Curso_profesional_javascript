self.addEventListener('install', event => {
    event.waitUntil(precache())
})

async function precache () {
    const cache = await caches.open('v1')
    cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}