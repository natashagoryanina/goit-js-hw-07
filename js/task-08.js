let input = document.querySelector('input');
let actions = document.querySelectorAll('button');

console.log(input);
console.log(actions[0]);

actions[0].addEventListener('click', onRenderBtnClick);

function onRenderBtnClick(event) {
    console.log(input.value);
    createBoxes(Number(input.value));
};

function createBoxes(amount) {
    let heighWidth = 30;
    for (let i = 0; i < amount; i++) {
        let divEl = document.createElement('div');
        divEl.setAttribute('id', 'boxes');
        divEl.style.height = `${heighWidth}px`;
        divEl.style.width = `${heighWidth}px`;
        heighWidth += 10;
        divEl.style.backgroundColor = `rgb(${randomInt(0, 256)},${randomInt(0, 256)},${randomInt(0, 256)})`
        document.body.append(divEl);
    }
}

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

actions[1].addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
    let divArr = document.querySelectorAll('#boxes');
    for (let i = 0; i < divArr.length; i++) {
        divArr[i].remove();
    }
};