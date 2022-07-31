import makeContainer from './makeContainer.js';

const footer= document.querySelector('.footer');
const container = makeContainer('div');
footer.classList.add('bg-brown');
footer.id = 'contacts';
const content = container.firstChild;

export default () => {
    footer.append(container);

    const makeItem = (iconClass, name, path) => {
        const item = document.createElement('a');
        item.classList.add('item');
        item.href = path;
        const icon = document.createElement('div');
        icon.classList.add('icon', iconClass);
        const title = document.createElement('h4');
        title.classList.add('name');
        title.innerHTML = name;
        item.append(icon, title);
        return item;
    }
  
    const body1 = document.createElement('div');
    body1.classList.add('container-content-body', 'contacts');

    const title1 = document.createElement('h3');
    title1.classList.add('title');
    title1.textContent = 'For questions and suggestions';

    body1.append(title1, makeItem('email', 'email@shelter.com', 'mailto:email@shelter.com'), makeItem('phone', '+13 674 567 75 54', 'tel:+136745677554'));


    const body2 = document.createElement('div');
    body2.classList.add('container-content-body', 'adress');
   
    const title2 = document.createElement('h3');
    title2.classList.add('title');
    title2.textContent = 'We are waiting for your visit';

    body2.append(title2, makeItem('pin', '1 Central Street, Boston<br>(entrance from the store)','https://goo.gl/maps/i5rjcFPwNtvnwdC27'), makeItem('pin', '18 South Park, London', 'https://goo.gl/maps/v55fA4VeShZnaniv7'));
  
    const img = document.createElement('img');
    img.classList.add('container-content-img');
    img.src = 'assets/images/png/footer-puppy.png';

    content.append(body1, body2, img);
}