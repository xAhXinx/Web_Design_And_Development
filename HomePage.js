/*
   Assignment
   
   Author: CH'NG WEE XIAN
   Date:   15.9.2021
   
   Filename: Homepage.js  

*/


var video = document.getElementById("Asus15");
var Img = document.getElementById("muteUnmuteImg");
var img = document.getElementById("playPauseImg");

 /* Play and Pause */
function playPause() {
  if (video.paused) {
    video.play();
    img.src = 'img/Pause.png';
  } else {
    video.pause();
    img.src = 'img/Play.png';
  }
}

 /* Mute and Unmute */
function muteUnmute() {
    if (video.muted == false) {
        video.muted = true;
        Img.src = 'img/Mute.png';
    }
    else {
        video.muted = false;
        Img.src = 'img/Unmute.png';
    }
}
