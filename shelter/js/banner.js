import makeContainer from './makeContainer.js';

const main = document.querySelector('.main');
const container = makeContainer('div');
container.classList.add('banner', 'bg-brown');
const content = container.firstChild;

export default () => {
    main.append(container);

    const body = document.createElement('div');
    body.classList.add('container-content-body');

    const head = document.createElement('h2');
    head.classList.add('head');
    head.innerHTML = 'Not only people<br>need a house';

    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = 'We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!';

    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn__block', 'btn__prime');
    btn.innerHTML = 'Make&nbsp;a&nbsp;friend';
    btn.href = '#about';

    const img = document.createElement('img');
    img.classList.add('container-content-img')
    img.src = 'assets/images/png/start-screen-puppy.png';
    img.alt = 'Puppy';

    body.append(head, text, btn);

    content.append(body, img);
};