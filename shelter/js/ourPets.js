import header from './header.js';
import footer from './footer.js';
import petsMain from './petsMain.js';
import popup from './popup.js';

header();
petsMain();
footer();
popup();


const navItems = document.querySelector('.container-content-nav').querySelectorAll('.item');
navItems[1].classList.add('active');

navItems[0].href ='./index.html#about';
navItems[2].href ='./index.html#help';
