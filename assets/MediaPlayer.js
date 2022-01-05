class MediaPlayer {
    constructor(config) {
        this.media = config.vid;
        this.plugins = config.plugins || [];
        this._initPlugin();
    }
    _initPlugin() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugin => {
            plugin.run(player);
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