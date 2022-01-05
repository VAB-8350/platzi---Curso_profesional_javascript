class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    constructor(config) {
        this.media = config.vid;
        this.plugins = config.plugins || [];
        this.initPlugin();
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