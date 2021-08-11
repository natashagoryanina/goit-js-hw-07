let formName = document.querySelector('#name-input');

let formNameOutput = document.querySelector('#name-output');

formName.addEventListener('change', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        formNameOutput.textContent = 'незнакомец';
    }
    if (event.currentTarget.value !== '') {
        formNameOutput.textContent = event.currentTarget.value;
    }
};