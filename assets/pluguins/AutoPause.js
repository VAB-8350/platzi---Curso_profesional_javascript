class AutoPause{
  constructor(){
    this.handleIntersecrion = this.handleIntersecrion.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player){
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersecrion, {
      threshould: 0.25
    })
    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }
  handleIntersecrion(entries){
    const entry = entries[0];
    entry.isIntersecting ? this.player.play() : this.player.pause();
  }
  handleVisibilityChange() {
    (document.visibilityState == 'hidden') ? this.player.pause() : this.player.play();
  }
}

export default AutoPause;