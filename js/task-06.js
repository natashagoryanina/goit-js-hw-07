let validationInput = document.querySelector('#validation-input');

console.log(validationInput.getAttribute('id'));

let inputLength = Number(validationInput.dataset.length);
console.log(inputLength);

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (inputLength === event.currentTarget.value.length) {
        validationInput.setAttribute('class', 'valid');
    }
    else {
        validationInput.setAttribute('class', 'invalid');
    }
};