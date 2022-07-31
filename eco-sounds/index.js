const birds = document.querySelectorAll('[data-bird]');
const logo = document.querySelector('.logo');
const background = document.querySelector('.bg');
const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');
let audioState = false;

function changeBackground(ev) {
    background.style.backgroundImage = `url('./assets/img/${ev.target.dataset.bird}.jpg')`;
}

function changeAudio(ev) {
    audio.src = `./assets/audio/${ev.target.dataset.bird}.mp3`;
    audio.play();
    playBtn.classList.add('pause');
    audioState = true;
}

function changeBtnState(ev) {
    playBtn.classList.toggle('pause');
}

function audioPlayPause(ev) {
    if (!audioState) {
        audio.play();
        audioState = true;
    } else {
        audio.pause();
        audioState = false;
    }
    changeBtnState();
}

function addActiveClass(ev) {
    birds.forEach((el) => el.classList.remove('active'));
    ev.target.classList.add('active');
}

birds.forEach((el) => {
    el.addEventListener('click', changeBackground);
    el.addEventListener('click', changeAudio);
    el.addEventListener('click', addActiveClass);
});

playBtn.addEventListener('click', audioPlayPause);

audio.addEventListener('ended', audioPlayPause);
