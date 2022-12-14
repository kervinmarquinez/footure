const burger = document.querySelector('.nav__burger');
const burgerLine = document.querySelectorAll('.nav__line');
const menu = document.querySelector('.nav__menu')
const menuElement = document.querySelectorAll('.nav__link')

// Form elements

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email')
const btnSubmit = document.querySelector('#submit')
const form = document.querySelector('#form');

const request = {
    name: '',
    email: ''
}

burger.addEventListener('click', () => {

    burger.classList.toggle('nav__burger-active');
    menu.classList.toggle('nav__menu-active');

    for (const line of burgerLine) {
        line.classList.toggle('nav__line-active');
    }

    for (const element of menuElement) {
        element.classList.toggle('nav__link-active');
    }

})

inputName.addEventListener('blur', validate);
inputEmail.addEventListener('blur', validate);
form.addEventListener('submit', sendEmail);

function sendEmail(e) {
    e.preventDefault();
    resetForm();


        const success = document.createElement('p');
        success.textContent = `Thanks! You'll receive an email`
        success.classList.add('success__message')
        form.appendChild(success);

  

    setTimeout(() => {
        success.remove();
    }, 3000);
}

function validate(e) {
    if (e.target.value.trim() === '' && (e.target.id === 'name'|| e.target.id === 'email')) {
        showAlert(`Please put your ${e.target.id}`, e.target.parentElement);
        request[e.target.name] = '';
        checkRequest()
        return;
    }
    if (e.target.id === 'email' && !validateEmail(e.target.value)) {
        showAlert(`The email is not valid`, e.target.parentElement);
        request[e.target.name] = '';
        checkRequest();
        return;
    }
    cleanAlert(e.target.parentElement);

    request[e.target.name] = e.target.value.trim().toLowerCase();

    checkRequest()


}

function showAlert(text, reference) {

    cleanAlert(reference)
    
    const error = document.createElement('p');
    error.textContent = text;
    error.classList.add('error__message')

    reference.appendChild(error);
}

function cleanAlert(reference) {
    const alert = reference.querySelector('.error__message')

    if(alert) {
        alert.remove();
    }
}

function validateEmail(email) {
    const regex =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    const result = regex.test(email);
    return result;
}

function resetForm() {
    request.name = '';
    request.email = '';
    form.reset();
    checkRequest()
}

function checkRequest() {
    if (Object.values(request).includes('')) {
        btnSubmit.classList.add('contact__button-disabled');
        btnSubmit.disabled = true;
        return;
    }
    btnSubmit.classList.remove('contact__button-disabled');
    btnSubmit.disabled = false;
}