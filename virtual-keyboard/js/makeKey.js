export default ({
  name, en, ru, shift, shiftEn, shiftRu,
}) => {
  const key = document.createElement('div');
  key.classList.add('key');
  key.id = name;

  const keyBody = document.createElement('div');
  keyBody.classList.add('key-body');

  if (en !== undefined) {
    const mainPlace = document.createElement('div');
    mainPlace.classList.add('key-body-main');
    mainPlace.textContent = en;
    keyBody.append(mainPlace);
  }

  if (ru !== undefined) {
    const additionalPlace = document.createElement('div');
    additionalPlace.classList.add('key-body-additional');
    additionalPlace.textContent = ru;
    keyBody.append(additionalPlace);
  }

  if (shiftEn !== undefined || shift !== undefined) {
    const shiftEnPlace = document.createElement('div');
    shiftEnPlace.classList.add('key-body-left');
    shiftEnPlace.textContent = shiftEn || shift;
    keyBody.append(shiftEnPlace);
  }

  if (shiftRu !== undefined) {
    const shiftRuPlace = document.createElement('div');
    shiftRuPlace.classList.add('key-body-right');
    shiftRuPlace.textContent = shiftRu;
    keyBody.append(shiftRuPlace);
  }

  key.append(keyBody);
  return key;
};
