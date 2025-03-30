const audio = document.getElementById('audio');
const img = document.getElementById('play__img')
var audioTime = 0
var running = 1
function playAudio(music) {
    if (running==1) {
        audio.currentTime = audioTime
        audio.src = music
        audio.play()
        img.src = "pause.png"
        img.style = 'width: 15px; height: 15px;'
        running = 0
    } else {
        audioTime = audio.currentTime.toFixed(2)
        audio.pause()
        img.src = "play.png"
        img.style = 'width: 25px; height: 20px;'
        running = 1
    }
}