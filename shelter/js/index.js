import header from './header.js';
import banner from './banner.js';
import about from './about.js';
import friends from './friends.js';
import popup from './popup.js';
import help from './help.js';
import donation from './donation.js';
import footer from './footer.js';


header();
banner();
about();
friends();
popup();
help();
donation();
footer();


const navItems = document.querySelector('.container-content-nav').querySelectorAll('.item');
navItems[0].classList.add('active');
navItems[1].href = './pets.html';
const logo = document.querySelector('.container-content-logo');
const credit = document.querySelector('.credit');
[logo, credit].forEach((el) => el.addEventListener('click', (ev) => ev.preventDefault()));