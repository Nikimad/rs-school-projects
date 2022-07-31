import makeContainer from './makeContainer.js';

const main = document.querySelector('.main');
const container = makeContainer('section');
container.classList.add('section', 'donation','bg-light');
const content = container.firstChild;

export default () => {
    main.append(container);

    const body = document.createElement('div');
    body.classList.add('container-content-body');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = 'You can also<br>make a donation';

    const text1 = document.createElement('h5');
    text1.classList.add('subtitle');
    text1.textContent = 'Name of the bank / Type of bank account';

    const credit = document.createElement('a');
    credit.href = '#';
    credit.classList.add('credit');
    const icon = document.createElement('div');
    icon.classList.add('icon', 'credit-card');
    const number = document.createElement('h4');
    number.classList.add('number');
    number.textContent = '8380 2880 8028 8791 7435';
    credit.append(icon, number);

    const text2 = document.createElement('p');
    text2.classList.add('text');
    text2.textContent = 'Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
    
    const img = document.createElement('img');
    img.classList.add('container-content-img')
    img.src = 'assets/images/png/donation-dog.png';
    img.alt = 'Dog';

    body.append(title, text1, credit, text2);

    content.append(body, img);
};