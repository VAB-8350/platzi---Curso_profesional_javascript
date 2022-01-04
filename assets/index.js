import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './pluguins/AutoPlay.js';
import AutoPause from './pluguins/AutoPause.js';


const video = document.querySelector('video');
const btn_play = document.querySelector('#playButtom');
const btn_mute = document.querySelector('#muteButtom');


const player = new MediaPlayer({ 
  vid: video, 
  plugins: [new AutoPlay(), new AutoPause()]
});
btn_play.onclick = () => player.togglePlay();
btn_mute.onclick = () => player.toggleMute();
