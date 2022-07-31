import makeContainer from './makeContainer.js';

const main = document.querySelector('.main');
const container = makeContainer('section');
container.classList.add('section', 'friends', 'bg-light');
container.id = 'friends';
const content = container.firstChild;

export default () => {
    main.append(container);

    const body = document.createElement('div');
    body.classList.add('container-content-body');
    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = 'Our friends who<br>are looking for a house';
    
    const sliderOverlay = document.createElement('div');
    sliderOverlay.classList.add('slider-overlay');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const sliderChunk = document.createElement('div');
    sliderChunk.classList.add('slider-chunk');

    sliderContainer.append(sliderChunk);

    sliderOverlay.append(sliderContainer);

    const prev = document.createElement('button');
    prev.classList.add('btn', 'btn__round', 'btn__secondary', 'prev');

    const next = document.createElement('button');
    next.classList.add('btn', 'btn__round', 'btn__secondary', 'next');

    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn__block', 'btn__prime', 'content-btn');
    btn.textContent = 'Get to know the rest';
    btn.href = './pets.html';

    body.append(title, sliderOverlay, prev, next);
    content.append(body, btn);
}