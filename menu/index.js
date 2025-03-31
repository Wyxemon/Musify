const audio = parent.document.getElementById('audio'); // Access audio from the main index.html
const img = document.getElementById('play__img');
const mainBottom = parent.document.getElementById('main-bottom'); // Corrected access to mainBottom
const main = document.getElementById('main');

var audioTime = 0;
var running = 1;

mainBottom.style.display = 'none';

function playAudio(music) {
    if (running == 1) {
        if (audio.src !== music) {
            audio.src = music;
            audio.currentTime = audioTime;
            img.src = "pause.png";
            img.style = 'width: 15px; height: 15px;';
            audio.play();
            running = 0;
        }
        if (mainBottom.style.display === 'none') {
            mainBottom.style.display = 'flex';
            main.style.gridTemplateRows = '1fr 200px';
        }
    } else {
        audioTime = audio.currentTime.toFixed(2);
        audio.pause();
        img.src = "play.png";
        img.style = 'width: 25px; height: 20px;';
        running = 1;
        mainBottom.style.display = 'none';
        main.style.gridTemplateRows = '1fr auto';
    }
}

function loginMenu() {
    window.location.href = "login/index.html";
}