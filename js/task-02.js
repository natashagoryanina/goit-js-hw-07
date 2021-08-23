const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulElem = document.querySelector('ul');

const markup = ingredients.map(elem => {
    let liElem = document.createElement('li');
    liElem.textContent = elem;
    return liElem;
  }
);

ulElem.append(...markup);

