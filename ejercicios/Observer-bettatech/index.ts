interface Observable{
  attach(o: observador): void;
  detach(o: observador): void;
  notify(): void;
}

interface observador{
  update(chan: Observable): void;
}

class YoutubeChannel implements Observable {
  private channeluSbscribers: observador[] = [];
  private lastVideo: string = "";

  attach(o: observador){
    this.channeluSbscribers.push(o);
  }

  detach(o: observador) {
    const index = this.channeluSbscribers.indexOf(o);
    this.channeluSbscribers.splice(index, 1);
  }

  notify(){
    for(let suscript of this.channeluSbscribers){
      suscript.update(this);
    }
  }

  addVideos(title: string){
    this.lastVideo = title;
    this.notify();
    console.log('Se agrego un nuevo video')
  }

  getLastVideo(){
    return this.lastVideo;
  }
}

class Subscriptor implements observador {

  update(chan: Observable){
    console.log('new video!')
    console.log((chan as YoutubeChannel).getLastVideo());
  }
}

const channel = new YoutubeChannel;
const s1 = new Subscriptor;
const s2 = new Subscriptor;

channel.attach(s1);
channel.attach(s2);

channel.addVideos('video observer 1 pepe');