const audio = parent.document.getElementById('audio');
const img = document.getElementById('play__img');
const mainBottom = parent.document.getElementById('main-bottom');
const main = document.getElementById('main');

let running = true;

mainBottom.style.display = 'none';

function playAudio(...musicList) {
    if (running) {
        if (!audio.src || !musicList.includes(audio.src)) {
            audio.src = musicList[Math.floor(Math.random() * musicList.length)];
        }
        audio.currentTime = 0;
        toggleAudio(true);
        audio.onended = () => playNextRandom(musicList);
        showPlayer();
    } else {
        toggleAudio(false);
        hidePlayer();
    }
}

function toggleAudio(play) {
    if (play) {
        img.src = "pause.png";
        img.style = 'width: 15px; height: 15px;';
        audio.play();
    } else {
        img.src = "play.png";
        img.style = 'width: 25px; height: 20px;';
        audio.pause();
        audio.onended = null;
    }
    running = !play;
}

function playNextRandom(musicList) {
    audio.src = musicList[Math.floor(Math.random() * musicList.length)];
    audio.currentTime = 0;
    audio.play();
}

function showPlayer() {
    mainBottom.style.display = 'flex';
    mainBottom.style.animation = 'slideUp 0.1s ease-out';
    main.style.gridTemplateRows = '1fr 200px';
}

function hidePlayer() {
    mainBottom.style.display = 'none';
    main.style.gridTemplateRows = '1fr auto';
}

function loginMenu() {
    window.location.href = "login/index.html";
}