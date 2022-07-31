import makeContainer from './makeContainer.js';

const main = document.querySelector('.main');
const container = makeContainer('section');
container.classList.add('section', 'about');
container.id = 'about';
const content = container.firstChild;

export default () => {
    main.append(container);

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = 'About the shelter<br>“Cozy House”';

    const body = document.createElement('div');
    body.classList.add('container-content-body');

    const text1 = document.createElement('p');
    text1.classList.add('text');
    text1.textContent = 'Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.';

    const text2 = document.createElement('p');
    text2.classList.add('text');
    text2.textContent = 'We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.';

    const img = document.createElement('img');
    img.classList.add('container-content-img')
    img.src = 'assets/images/png/about-pets.png';
    img.alt = 'Cat and dog';

    body.append(title, text1, text2);

    content.append(body, img);
};