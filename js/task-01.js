let categoriesArr = [...document.querySelectorAll('.item')];
console.log(categoriesArr);
console.log(`В списке ${categoriesArr.length} категории.`);

categoriesArr.forEach((elem) =>
console.log(`Категория: ${elem.querySelector('h2').innerHTML} 
Количество элементов: ${elem.querySelectorAll('li').length}`)
);
