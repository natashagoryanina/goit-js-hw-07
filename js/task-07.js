let input = document.getElementById('font-size-control');
let text = document.querySelector('#text');

input.addEventListener('change', onInputChange);

function onInputChange(event) {
    text.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
