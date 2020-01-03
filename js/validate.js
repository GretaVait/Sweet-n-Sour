// Email validation
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const submit = document.querySelector('#submit');
const errorText = document.querySelectorAll('.error-text');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

function validateName(name) {
    var re = /^[a-zA-Z]{1,}$/;
    return re.test(String(name.value).toLowerCase());
}

function errorInput(input) {
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.paddingRight = '50px';
    input.style.border = '2px solid var(--bright-orange)';
    input.style.marginBottom = '0';
}

function correctInput(input, errorText) {
    input.style.backgroundImage = 'none';
    input.style.paddingRight = '10px';
    input.style.border = '2px solid var(--black)';
    errorText.innerHTML = '';
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    // First name
    if (nameInput.value === '') {
        errorInput(nameInput);
        errorText[0].innerHTML = 'Name field cannot be empty';
    }
    else if (validateName(nameInput) === false) {
        errorInput(nameInput[0]);
        errorText[0].innerHTML = 'First Name is incorrect';
    } else {
        correctInput(nameInput, errorText[0]);
    }

    // Phone
    if (phoneInput.value === '') {
        errorInput(phoneInput);
        errorText[1].innerHTML = 'Phone field cannot be empty';
    } else {
        correctInput(phoneInput, errorText[1]);
    }

    // Email
    if (emailInput.value === '') {
        errorInput(emailInput);
        errorText[2].innerHTML = 'Email field cannot be empty';
    }
    else if (validateEmail(emailInput) === false) {
        errorInput(emailInput);
        errorText[2].innerHTML = 'Email is incorrect';
    } else {
        correctInput(emailInput, errorText[2]);
    }
});