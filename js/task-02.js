const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const elements = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
    let liElems = document.createElement('li');
    liElems.textContent = ingredient;
    elements.appendChild(liElems);
}