function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    this.pluguins.forEach(pluguin => {
        pluguin.run(this)
    });
}

MediaPlayer.prototype.play = function(){
    (video.paused) ? video.play() : video.pause();
}

export default MediaPlayer;