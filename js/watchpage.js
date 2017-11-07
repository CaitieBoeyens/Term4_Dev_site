var vid, playBtn, seekslider, curTimeText, durTimeText, muteBtn, volumeslider, fullscreenBtn;

function initializePlayer() {
    // Set object references
    vid = document.getElementById("myVideo");
    playBtn = document.getElementById("playPauseBtn");
    seekslider = document.getElementById("seekslider");
    curTimeText = document.getElementById("curTimeText");
    durTimeText = document.getElementById("durTimeText");
    muteBtn = document.getElementById("muteBtn");
    volumeslider = document.getElementById("volumeslider");
    fullscreenBtn = document.getElementById("fullscreenBtn");
    
    // Add event listeners
    playBtn.addEventListener("click", playPause, false);
    seekslider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seekTimeUpdate, false);
    muteBtn.addEventListener("click", vidMute, false);
    volumeslider.addEventListener("change", setVolume, false);
    fullscreenBtn.addEventListener("click", toggleFullscreen, false);
}

window.onload = initializePlayer;


function playPause() {
    
    if(vid.paused) {
        vid.play();
        playBtn.style.background = "url(../assets/pause.svg)";
    } else {
        vid.pause();
        playBtn.style.background = "url(../assets/play.svg)";
    }
    
};

function vidSeek() {
    
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
    
}

function seekTimeUpdate() {
    
    var newTime = vid.currentTime * (100 / vid.duration);
    seekslider.value = newTime;
    
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.round(vid.duration - durmins * 60);
    
    if(cursecs < 10) {
        cursecs = "0"+cursecs;
    }
    if(curmins < 10) {
        curmins = "0"+curmins;
    }
    if(dursecs < 10) {
        dursecs = "0"+dursecs;
    }
    if(durmins < 10) {
        durmins = "0"+durmins;
    }
    
    curTimeText.innerHTML = curmins+":"+cursecs+"/";
    durTimeText.innerHTML = durmins+":"+dursecs;
}

function vidMute() {
    
    if(vid.muted) {
        vid.muted = false;
        muteBtn.style.background = "url(../assets/mute.svg)";
    } else {
        vid.muted = true;
        muteBtn.style.background = "url(../assets/sound.svg)";
    }
}

function setVolume() {
    
    vid.volume = volumeslider.value / 100;
}

function toggleFullscreen() {
    
    if(vid.requestFullscreen) {
       vid.requestFullscreen();
    } else if(vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
    } else if(vid.mozRequestFullscreen) {
         vid.mozRequestFullscree();     
    }
}
