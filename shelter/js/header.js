import makeContainer from './makeContainer.js';

const header = document.querySelector('.header');
const container = makeContainer('div');
const content = container.firstChild;

export default () => {
  header.append(container);

  const logo = document.createElement('a');
  logo.classList.add('container-content-logo');
  logo.href = '#';

  const logoHead = document.createElement('h1');
  logoHead.classList.add('head');
  logoHead.textContent = 'Cozy House';

  const logoCaption = document.createElement('p');
  logoCaption.classList.add('caption');
  logoCaption.textContent = 'Shelter for pets in Boston';

  logo.append(logoHead, logoCaption);

  const nav = document.createElement('nav');
  nav.classList.add('container-content-nav');

  const navItems = [
    ['About the shelter', 'about'],
    ['Our pets', 'pets'],
    ['Help the shelter', 'help'],
    ['Contacts', 'contacts'],
  ];

  for (let i = 0; i < navItems.length; i += 1) {
    const a = document.createElement('a');
    a.classList.add('item');
    a.textContent = navItems[i][0];
    a.href = `#${navItems[i][1]}`;
    nav.append(a);
  }

  const burger = document.createElement('div');
  burger.classList.add('container-content-burger');

  for (let i = 0; i < 3; i += 1) {
    const line = document.createElement('span');
    line.classList.add('line');
    burger.append(line);
  }

  content.append(logo, nav, burger);
}