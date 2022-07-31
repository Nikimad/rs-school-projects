import makeCard from "./makeCard.js";
import pets from "./pets.js";
import popupFiller from './popupFiller.js';

const preloadImages = () => {
    for(let i = 1; i <= pets.length - 1; i += 1) {
      const img = new Image();
      img.src = pets[i].img;
    }
}
  
preloadImages();


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

const sliderContainer = document.querySelector('.slider-container');
let cardsContainer = document.querySelector('.slider-chunk');

const pag = document.querySelector('.btn__pag');

const prev = document.querySelector('.btn__prevProx');
const next = document.querySelector('.btn__nextProx');
const first = document.querySelector('.btn__prevDist');
const last = document.querySelector('.btn__nextDist');

const btns = [prev, next, first, last];
let pages = [];

const pageMaker = (pagesCount) => {
    const pages = [];
    for (let i = 0; i < pagesCount; i += 1) {
        const chunk = [];
        for (let j = 0; j < places;) {
            const num = Math.floor(Math.random() * 8);
            if (!chunk.includes(num)) {
                chunk.push(num);
                j += 1
                continue
            }
            continue
        }
        pages.push(chunk);
    }
    return pages;
}

let size;
let sizeMem;
let places;
let counter = 0;



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
            places = 8;
            break
        case 768:
            places = 6;
            break
        case 320:
            places = 3;
            break
    }
    return places;
}

const fillContainer = () => {
    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[pages[counter][i]], pages[counter][i]));
    }
    addListenersToBtnsForModal();
};

const init = () => {
    size = getScreenSize();
    places = getPlaces(size);
    pages = [...pageMaker(48, places)];
    fillContainer();
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
    pag.textContent = +pag.textContent + 1;
    counter += 1;

    btns.forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });

    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;

    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[pages[counter][i]], pages[counter][i]));
    }

    sliderContainer.append(chunk);
    sliderContainer.classList.add('left');

    setTimeout(() => {
        sliderContainer.classList.remove('left');
        sliderContainer.firstChild.remove();
        btns.forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
            if (counter === 47) {
                [next, last].forEach((el) => {
                    el.disabled = true;
                    el.classList.add('btn__disabled');
                })
            }
        });
    }, 1000);
    addListenersToBtnsForModal();
});

prev.addEventListener('click', () => {
    pag.textContent = +pag.textContent - 1;
    counter -= 1;

    btns.forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });

    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;

    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[pages[counter][i]], pages[counter][i]));
    }

    sliderContainer.prepend(chunk);
    sliderContainer.classList.add('right');

    setTimeout(() => {
        sliderContainer.classList.remove('right');
        sliderContainer.lastChild.remove();
        btns.forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
            if (counter === 0) {
                [prev, first].forEach((el) => {
                    el.disabled = true;
                    el.classList.add('btn__disabled');
                })
            }
        });
    }, 1000);
    addListenersToBtnsForModal();
});

last.addEventListener('click', () => {
    pag.textContent = 48;
    counter = 47;

    btns.forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });

    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;

    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[pages[counter][i]], pages[counter][i]));
    }

    sliderContainer.append(chunk);
    sliderContainer.classList.add('left');

    setTimeout(() => {
        sliderContainer.classList.remove('left');
        sliderContainer.firstChild.remove();
        btns.forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
            [next, last].forEach((el) => {
                el.disabled = true;
                el.classList.add('btn__disabled');
            })
        });
    }, 1000);
    addListenersToBtnsForModal();
});

first.addEventListener('click', () => {
    pag.textContent = 1;
    counter = 0;

    btns.forEach((el) => {
        el.disabled = true;
        el.classList.add('btn__disabled');
    });

    const chunk = document.createElement('div');
    chunk.classList.add('slider-chunk');
    cardsContainer = chunk;

    for (let i = 0; i < places; i += 1) {
        cardsContainer.append(makeCard(pets[pages[counter][i]], pages[counter][i]));
    }

    sliderContainer.prepend(chunk);
    sliderContainer.classList.add('right');

    setTimeout(() => {
        sliderContainer.classList.remove('right');
        sliderContainer.lastChild.remove();
        btns.forEach((el) => {
            el.disabled = false;
            el.classList.remove('btn__disabled');
            [prev, first].forEach((el) => {
                el.disabled = true;
                el.classList.add('btn__disabled');
            })
        });
    }, 1000);
    addListenersToBtnsForModal();
});
