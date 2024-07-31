import songs from "./songs.js";

var currentSong = songs[0];
var audio = new Audio(currentSong.src);
document.getElementById("pause-svg").style.display = "none";

var onTogglePlay = function() {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-svg").style.display = "none";
        document.getElementById("pause-svg").style.display = "inline";
    } else {
        audio.pause();
        document.getElementById("pause-svg").style.display = "none";
        document.getElementById("play-svg").style.display = "inline";
    }
}

// add event listener to the play pause button
var playButton = document.querySelector(".play-pause-button");
playButton.addEventListener("click", onTogglePlay);


