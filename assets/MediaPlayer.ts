class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.vid;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugin();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }

    private initPlugin() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    togglePlay() {
        (this.media.paused) ? this.play() : this.pause();
    }
    toggleMute() {
        (this.media.muted) ? this.unmute() : this.mute();
    }
}


export default MediaPlayer;