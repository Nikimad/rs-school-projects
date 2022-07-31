import makeContainer from './makeContainer.js';

const main = document.querySelector('.main');
const container = makeContainer('section');
container.classList.add('section', 'help');
container.id = 'help';
const content = container.firstChild;

export default () => {
    main.append(container);

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = 'How you can help<br>our shelter';

    const body = document.createElement('div');
    body.classList.add('container-content-body');
    body.append(title);

    const names = ['Pet food', 'Transportation', 'Toys', 'Bowls and cups', 'Shampoos', 'Vitamins', 'Medicines', 'Collars / leashes', 'Sleeping areas'];
    const classes = ['pet-food', 'transportation', 'toys', 'bowls-and-cups', 'shampoos', 'vitamins', 'medicines', 'collars-leashes', 'sleeping-areas'];

    const list = document.createElement('ul');
    list.classList.add('list');

    for (let i = 0; i < names.length; i += 1) {
        const item = document.createElement('li');
        item.classList.add('item');
        const icon = document.createElement('div');
        icon.classList.add('icon', classes[i]);
        const name = document.createElement('h4');
        name.classList.add('name');
        name.textContent = names[i];
        item.append(icon, name);
        list.append(item);
    }
    body.append(list);

    content.append(body);
};