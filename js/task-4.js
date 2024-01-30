'use strict';

const form = document.querySelector('.login-form');

function onCheckForm(event) {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if(email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }

    const submitForm = {
        email: `${email}`,
        password: `${password}`,
    }

    console.log(submitForm);
    return form.reset();
     
}

form.addEventListener("submit", onCheckForm);








