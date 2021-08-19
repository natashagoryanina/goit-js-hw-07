let counterValue = document.querySelector('#value').innerHTML;
console.log(counterValue);

const actions = document.querySelectorAll('div button');
console.log(actions);

let span = document.querySelector('span');

let decrementBtn = actions[0];
console.log(decrementBtn);

let incrementBtn = actions[1];
console.log(incrementBtn);

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue = Number(counterValue) - 1;
    span.textContent = counterValue;
    console.log(counterValue);
};

function increment() {
    counterValue = Number(counterValue) + 1;
    span.textContent = counterValue;
    console.log(counterValue);
};
