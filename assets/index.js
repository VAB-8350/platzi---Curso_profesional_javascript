import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from './pluguins/AutoPlay.js'

const video = document.querySelector('video');
const btn_play = document.querySelector('#playButtom');
const btn_mute = document.querySelector('#muteButtom');


const player = new MediaPlayer({ vid: video, plugins: [new AutoPlay()] });
btn_play.onclick = () => player.togglePlay();
btn_mute.onclick = () => player.toggleMute();
