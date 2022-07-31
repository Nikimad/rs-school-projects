import i18Obj from './translate.js';

let lang = 'en';

let theme = 'dark';


//Adaptive menu//
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');
const masks = document.querySelectorAll('.mask');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navContainer.classList.toggle('open');
  masks.forEach((el) => el.classList.toggle('open'));
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open')
    navContainer.classList.remove('open');
    masks.forEach((el) => el.classList.remove('open'));
  }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
//Lang changer//
const enLang = document.querySelector('.en');
const ruLang = document.querySelector('.ru');
const textElems = document.querySelectorAll('[data-i18]');


function changeActiveRu() {
  enLang.classList.remove('choosen');
  ruLang.classList.add('choosen');
}

function changeActiveEn() {
  ruLang.classList.remove('choosen');
  enLang.classList.add('choosen');
}

function langChangeEn() {
    textElems.forEach((el) => {
      el.textContent = i18Obj.en[el.dataset.i18];
      if (el.placeholder) {
        el.placeholder = i18Obj.en[el.dataset.i18];
        el.textContent = '';
      }
    });
    changeActiveEn();
    lang = 'en';
}

function langChangeRu() {
    textElems.forEach((el) => {
      el.textContent = i18Obj.ru[el.dataset.i18];
      if (el.placeholder) {
        el.placeholder = i18Obj.ru[el.dataset.i18];
        el.textContent = '';
      }
    });
    changeActiveRu();
    lang = 'ru';
}

enLang.addEventListener('click', langChangeEn);
ruLang.addEventListener('click', langChangeRu);
//Portfolio//

function preloadWinterImages() {
  for(let i = 1; i <= 6; i += 1) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}

function preloadSpringImages() {
  for(let i = 1; i <= 6; i += 1) {
    const img = new Image();
    img.src = `./assets/img/spring/${i}.jpg`;
  }
}

function preloadSummerImages() {
  for(let i = 1; i <= 6; i += 1) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}

function preloadAutumnImages() {
  for(let i = 1; i <= 6; i += 1) {
    const img = new Image();
    img.src = `./assets/img/autumn/${i}.jpg`;
  }
}

preloadWinterImages();
preloadSpringImages();
preloadSummerImages();
preloadAutumnImages();

const btnBlcs = document.querySelectorAll('.btn-blc');
const btnBlc = document.querySelector('.btn-blc')
const portfolioImgs = document.querySelectorAll('.portfolio-img');

    function chooseBtn(event) {
        if (event.target.classList.contains('btn-blc')) {
            btnBlcs.forEach((el) => el.classList.remove('active'));
            event.target.classList.add('active');
        }
    }
    
    function changeImgs(event) {
          portfolioImgs.forEach((el, index) => el.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`)
    }

btnBlcs.forEach((el) => el.addEventListener('click', chooseBtn));
btnBlcs.forEach((el) => el.addEventListener('click', changeImgs))

const themeChanger = document.querySelector('.theme-changer')

function changeToLighTheme(ev) {
 document.querySelectorAll('[data-theme]').forEach((el) => el.classList.toggle('light-theme'));
 theme = theme === 'dark' ? 'light' : 'dark';
}

themeChanger.addEventListener('click', changeToLighTheme)

//Ripple effect btn//

const btns = document.querySelectorAll('.btn');

function rippleEffect(ev) {
  const x = ev.pageX;
  const y = ev.pageY;
  const buttonTop = ev.target.offsetTop;
  const buttonLeft = ev.target.offsetLeft;
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  const circle = document.createElement('span');
  this.appendChild(circle);
  circle.classList.add('circle');
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';
  setTimeout(() => circle.remove(), 500);
}

btns.forEach((el) => el.addEventListener('click', rippleEffect));


//localStorage//

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    lang === 'ru' ? langChangeRu() : langChangeEn();
  }
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      changeToLighTheme();
    }
  }
}
window.addEventListener('load', getLocalStorage)
