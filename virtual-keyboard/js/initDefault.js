export default () => {
  const { body } = document;
  body.classList.add('body');
  const container = document.createElement('div');
  container.classList.add('container');
  const textarea = document.createElement('textarea');
  textarea.classList.add('monitor');
  textarea.setAttribute('autofocus', true);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const additionalContainer = document.createElement('div');
  additionalContainer.classList.add('info');
  const instuctions = document.createElement('div');
  instuctions.textContent = 'Change language: ctrl + alt(left)';
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');

  additionalContainer.append(instuctions, indicator);

  container.append(textarea, keyboard, additionalContainer);
  body.prepend(container);


  const myBad = document.createElement('div');
  myBad.classList.add('mybad');
  myBad.textContent = 'Сделал всё в приватном репозитории школы, вот ссылка на копию:'
  const a = document.createElement('a');
  a.textContent = 'virtual-keyboard-copy';
  a.href = 'https://github.com/Nikimad/virtual-keyboard-copy/tree/main';

  const coms = document.createElement('img');
  const pr = document.createElement('img');

  coms.src = './assets/comm.jpg';
  pr.src = './assets/pr.jpg';

  myBad.append(a, coms, pr);
  body.append(myBad);
};
