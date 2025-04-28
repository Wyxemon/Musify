const audio = parent.document.getElementById('audio');
const img = document.getElementById('play__img');
const mainBottom = parent.document.getElementById('main-bottom');
const main = document.getElementById('main');
const imgPop = document.getElementById('play__imgPop');
const titleAudio = document.getElementById('h3--audio');
let running = true;

mainBottom.style.display = 'none';

function playLofi(...musicList) {
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
        img.src = "image/pause.png";
        img.style = 'width: 15px; height: 15px;';
        audio.play();
    } else {
        img.src = "image/play.png";
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

function playPop(...musicList) {
    if (running) {
        if (!audio.src || !musicList.includes(audio.src)) {
            audio.src = musicList[Math.floor(Math.random() * musicList.length)];
        }
        audio.currentTime = 0;
        toggleAudioPop(true);
        audio.onended = () => playNextRandom(musicList);
        showPlayer();
        titleAudio.textContent = "Pop";
    } else {
        toggleAudioPop(false);
        hidePlayer();
    }
}

function toggleAudioPop(play) {
    if (play) {
        imgPop.src = "image/pause.png";
        imgPop.style = 'width: 15px; height: 15px;';
        audio.play();
    } else {
        imgPop.src = "image/play.png";
        imgPop.style = 'width: 25px; height: 20px;';
        audio.pause();
        audio.onended = null;
    }
    running = !play;
}

function qualification() {
    window.location.href = 'login/qualification/index.html'
}