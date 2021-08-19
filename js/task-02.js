const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulElem = document.querySelector('ul');

ingredients.map(elem => {
    let liElem = document.createElement('li');
    liElem.textContent = elem;
    ulElem.append(liElem);
  }
);

console.log(ulElem);

