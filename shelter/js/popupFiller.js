const popupContent = document.querySelector('.popup-body-content');

export default (pet) => {
    popupContent.innerHTML = null;

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn__round', 'btn__secondary');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = pet.img;
    img.alt = pet.type;

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');

    const name = document.createElement('h3');
    name.classList.add('info-name');
    name.textContent = pet.name;

    const typenBreed = document.createElement('h4');
    typenBreed.classList.add('info-type');
    typenBreed.textContent = `${pet.type} - ${pet.breed}`;

    const description = document.createElement('h5');
    description.classList.add('info-description');
    description.textContent = pet.description;

    const list = document.createElement('ul');
    list.classList.add('info-list');

    const listHeads = ['age', 'inoculations', 'diseases', 'parasites'];

    for (let i = 0; i < listHeads.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `<b class="capitalize">${listHeads[i]}:</b> ${pet[listHeads[i]]}`;
        list.append(li);
    }

    infoContainer.append(name, typenBreed, description, list);
    popupContent.append(img, infoContainer, btn);
};