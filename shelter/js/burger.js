const burger = document.querySelector('.container-content-burger');
const nav = document.querySelector('.container-content-nav');
const navItems = nav.querySelectorAll('.item');
const fade = document.querySelector('.fade');
const logo = document.querySelector('.container-content-logo');
const parent = logo.parentNode;
const body = document.body;

burger.addEventListener('click', () => {
    body.classList.toggle('disable-scroll');
    nav.classList.toggle('open');
    burger.classList.toggle('move');
    burger.classList.toggle('open');
    fade.classList.toggle('active');
    logo.classList.toggle('move');
    logo.classList.toggle('active');
    parent.classList.toggle('active');
    [fade, ...navItems].forEach((el) => el.addEventListener('click', () => {
        body.classList.remove('disable-scroll');
        nav.classList.remove('open');
        burger.classList.remove('move');
        burger.classList.remove('open');
        fade.classList.remove('active');
        logo.classList.remove('move');
        logo.classList.remove('active');
        parent.classList.remove('active');
    }));
});