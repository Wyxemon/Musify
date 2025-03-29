const audio = document.getElementById('audio');
const img = document.getElementById('play__img')
var running = 1
function playAudio() {
    if (running==1) {
        audio.play()
        img.src = "pause.png"
        img.style = 'width: 15px; height: 15px;'
        running = 0
    } else {
        audio.pause()
        img.src = "play.png"
        img.style = 'width: 25px; height: 20px;'
        running = 1
    }
}