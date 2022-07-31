import makeCard from "./makeCard.js";
import pets from "./pets.js";
import popupFiller from "./popupFiller.js";

const preloadImages = () => {
    for(let i = 1; i <= pets.length - 1; i += 1) {
      const img = new Image();
      img.src = pets[i].img;
    }
}
  
preloadImages();

const sliderContainer = document.querySelector('.slider-container');
let cardsContainer = document.querySelector('.slider-chunk');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



const popupEnable = (pet) => {
    const popup = document.querySelector('.popup');
    popup.classList.add('popup__enable');
    document.body.classList.add('disable-scroll');
    popup.querySelector('.fade').classList.add('active');

    
    popupFiller(pet);
    [popup.querySelector('.btn'), popup.querySelector('.fade')].forEach((el) => el.addEventListener('click', () => {
        popup.classList.remove('popup__enable');
        document.body.classList.remove('disable-scroll');
        popup.querySelector('.fade').classList.remove('active');
    }));
}

const addListenersToBtnsForModal = () => {
    document.querySelectorAll('.card').forEach((el) => {
        const id = el.id;
        el.addEventListener('click',() => popupEnable(pets[id]));
    });
}

let size;
let sizeMem;
let places;
let pivotId;

const getPivotId = () => {
    return +cardsContainer.firstChild.id;
};
const getScreenSize = () => {
    const size = window.innerWidth;
    if (size >= 1280) {
        return 1280;
    }
    if (size < 1280 && size >= 768) {
        return 768;
    }
    if (size < 768) {
        return 320;
    }
};
const getPlaces = (size) => {
    let places;
    switch (size) {
        case 1280:
            places = 3;
            break
        case 768:
            places = 2;
            break
        case 320:
            places = 1;
            break
    }
    return places;
}

const counter = new Proxy({id: 0}, { 
    set: (target, prop, value) => {
        target[prop] = value;
        if (target[prop] > pets.length - 1) {
            target[prop] = 0;
        }
        if (target[prop] < 0) {
            target[prop] = pets.length - 1;
        }
        return true
        },
    }
);

const fillContainer = () => {
    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[counter.id], counter.id));
        counter.id += 1;
    }
    addListenersToBtnsForModal();
};

const init = () => {
    size = getScreenSize();
    places = getPlaces(size);
    fillContainer();
    pivotId = getPivotId();
    counter.id = pivotId;
    sizeMem = size;
}

init();

window.addEventListener('resize', () => {
    if (getScreenSize() !== size) {
        cardsContainer.innerHTML = null;
        init();
    }
});

next.addEventListener('click', () => {
    [next, prev].forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });
    for (let i = 0; i < places; i += 1) {
        counter.id += 1;
    }
    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;
    for (let i = 0; i < places; i += 1) {
        chunk.append(makeCard(pets[counter.id], counter.id));
        counter.id += 1;
    }
    sliderContainer.append(chunk);
    sliderContainer.classList.add('left');
    setTimeout(() => {
        sliderContainer.classList.remove('left');
        sliderContainer.firstChild.remove();
        pivotId = getPivotId();
        counter.id = pivotId;
        [next, prev].forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
        });
    }, 1000);
    addListenersToBtnsForModal();
});

prev.addEventListener('click', () => {
    [next, prev].forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });

    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;
    for (let i = 0; i < places; i += 1) {
        counter.id -= 1;
        chunk.prepend(makeCard(pets[counter.id], counter.id));
    }
    sliderContainer.prepend(chunk);
    sliderContainer.classList.add('right');
    setTimeout(() => {
        sliderContainer.classList.remove('right');
        sliderContainer.lastChild.remove();
        pivotId = getPivotId();
        counter.id = pivotId;
        [next, prev].forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
        });
    }, 1000);
    addListenersToBtnsForModal();
});
