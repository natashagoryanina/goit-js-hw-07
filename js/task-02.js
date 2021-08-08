const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulElem = document.querySelector('ul');

ingredients.forEach(elem => {
    let liElem = document.createElement('li');
    liElem.textContent = elem;
    ulElem.appendChild(liElem);
  }
);

console.log(ulElem);

