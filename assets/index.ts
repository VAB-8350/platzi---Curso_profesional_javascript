import MediaPlayer from "./MediaPlayer";
import AutoPlay from './pluguins/AutoPlay';
import AutoPause from './pluguins/AutoPause';


const video = document.querySelector('video');
const btn_play: HTMLElement = document.querySelector('#playButtom');
const btn_mute: HTMLElement = document.querySelector('#muteButtom');


const player = new MediaPlayer({ 
  vid: video, 
  plugins: [new AutoPlay(), new AutoPause()]
});
btn_play.onclick = () => player.togglePlay();
btn_mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}