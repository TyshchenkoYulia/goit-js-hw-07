'use strict';


const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", (event) => {

    const inputTrim = input.value.trim();

    if (inputTrim === "") {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = event.currentTarget.value;  
    }

    
});








