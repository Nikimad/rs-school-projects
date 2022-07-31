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

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('container-content-btns');

    const btns = ['btn__prevDist', 'btn__prevProx', 'btn__pag', 'btn__nextProx', 'btn__nextDist'];

    btns.forEach((className) => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn__round');
        className === 'btn__pag' ? btn.classList.add('btn', 'btn__round', 'btn__prime', className) : btn.classList.add('btn', 'btn__round', 'btn__secondary', className);
        btnsContainer.append(btn);
})

    body.append(title, sliderOverlay);
    content.append(body, btnsContainer);

    const prevDist = document.querySelector('.btn__prevDist');
    const prevProx = document.querySelector('.btn__prevProx');
    prevDist.textContent = '<<';
    prevProx.textContent = '<';
    prevDist.classList.add('btn__disabled');
    prevProx.classList.add('btn__disabled');
    document.querySelector('.btn__pag').textContent = 1;
    document.querySelector('.btn__nextProx').textContent = '>';
    document.querySelector('.btn__nextDist').textContent = '>>';
    prevDist.disabled = true;
    prevProx.disabled = true;
}

