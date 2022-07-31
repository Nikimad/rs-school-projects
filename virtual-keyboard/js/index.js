import initDefault from './initDefault.js';
import makeKey from './makeKey.js';
import keysData from './keys.js';

let lng = 'en';
let cap = false;

initDefault();

const indicator = document.querySelector('.indicator');
indicator.textContent = lng;

const keys = Object.keys(keysData);

const monitor = document.querySelector('.monitor');
const keyboard = document.querySelector('.keyboard');

keys.forEach((key) => {
  keyboard.append(makeKey(keysData[key]));
});

const btns = document.querySelectorAll('.key');

btns.forEach((btn) => btn.addEventListener('mousedown', (ev) => {
  ev.preventDefault();
  if (ev.which === 1) {
    const start = monitor.selectionStart;
    const end = monitor.selectionEnd;
    let head = monitor.value.substring(0, start);
    let add = btn.querySelector('.key-body-main').textContent;
    let tail = monitor.value.substring(end);

    if (btn.id === 'Backspace') {
      head = monitor.value.substring(0, start - 1);
      add = '';
      tail = monitor.value.substring(end);
    }

    if (btn.id === 'Tab') {
      add = '    ';
    }

    if (btn.id === 'Space') {
      add = ' ';
    }

    if (btn.id === 'Enter') {
      add = '\n';
    }

    if (btn.id === 'AltLeft' || btn.id === 'ControlLeft' || btn.id === 'ShiftLeft') {
      add = '';
    }

    if (btn.id === 'Delete') {
      head = monitor.value.substring(0, start);
      add = '';
      tail = monitor.value.substring(end + 1);
    }

    if (btn.id.startsWith('Arrow')) {
      switch (btn.id) {
        case 'ArrowLeft':
          monitor.selectionStart = start - 1;
          monitor.selectionEnd = end - 1;
          break;
        case 'ArrowUp':
          if (monitor.value.includes('\n')) {
            let tmpUp = '';
            let iUp = start;
            while (tmpUp !== '\n') {
              tmpUp = monitor.value[iUp];
              iUp -= 1;
            }
            monitor.selectionStart = monitor.value.length - 2 - iUp - tail.length;
            monitor.selectionEnd = monitor.value.length - 2 - iUp - tail.length;
          }
          break;
        case 'ArrowDown':
          if (monitor.value.includes('\n')) {
            let tmpDown = '';
            let iDown = start;
            while (tmpDown !== '\n') {
              tmpDown = monitor.value[iDown];
              iDown -= 1;
            }
            monitor.selectionStart = monitor.value.length + 2 + iDown + tail.length;
            monitor.selectionEnd = monitor.value.length + 2 + iDown + tail.length;
          }
          break;
        case 'ArrowRight':
          monitor.selectionStart = start + 1;
          monitor.selectionEnd = end + 1;
          break;
        default:
          add = '';
          break;
      }
      return;
    }

    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 100);

    if (btn.id === 'CapsLock') {
      add = '';
      cap = !cap;
      btn.classList.toggle('color');
    }

    if (cap) {
      add = add.toUpperCase();
    }

    monitor.value = head + add + tail;
    monitor.selectionStart = monitor.value.length - tail.length;
    monitor.selectionEnd = monitor.selectionStart;
  }
}));

function langChange() {
  lng = lng === 'en' ? 'ru' : 'en';
  btns.forEach((el) => {
    if (el.querySelector('.key-body-additional') !== null) {
      const mainPlace = el.querySelector('.key-body-main');
      const additionalPlace = el.querySelector('.key-body-additional');

      const current = mainPlace.textContent;
      const add = additionalPlace.textContent;

      mainPlace.textContent = add;
      additionalPlace.textContent = current;
    }
    indicator.textContent = lng;
  });
}

document.addEventListener('keydown', (ev) => {
  if (ev.code === 'AltLeft' && ev.ctrlKey === true) {
    langChange();
  }
});

function setLocalStorage() {
  localStorage.setItem('lng', lng);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lng')) {
    const lang = localStorage.getItem('lng');
    if (lang === 'ru') {
      return langChange();
    }
  }
  return localStorage;
}
window.addEventListener('load', getLocalStorage);

monitor.addEventListener('keydown', (ev) => {
  const btn = document.getElementById(ev.code);
  btn.classList.add('active');
  monitor.addEventListener('keyup', () => btn.classList.remove('active'));
});
