const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const elements = document.querySelector('#ingredients');

const listOfElements = ingredients.map((ingredient) => {
  let liElems = document.createElement('li');
  liElems.textContent = ingredient;
  return liElems;
});

elements.append(...listOfElements);

