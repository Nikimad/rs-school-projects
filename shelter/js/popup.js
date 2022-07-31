import pets from './pets.js';

const body = document.body;

export default () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const fade = document.createElement('div');
    fade.classList.add('fade');

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup-body');

    const content = document.createElement('div');
    content.classList.add('popup-body-content');

    popupBody.append(content);
    popup.append(fade, popupBody);
    body.append(popup);
}