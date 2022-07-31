export default (pet, id) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-img');
    img.src = pet.img;
    img.alt = pet.type;

    const name = document.createElement('h4');
    name.classList.add('card-name');
    name.textContent = pet.name;

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn__block', 'btn__secondary', 'card-btn');
    btn.textContent = 'Learn more';

    card.append(img, name, btn);

    card.id = id;

    return card;
};