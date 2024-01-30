'use strict';



const widget = document.querySelector('.widget');
const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');


function getRandomHexColor() {

    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;

}
  
button.addEventListener("click", onButtonClick);

function onButtonClick() {
    
    const changeColor = getRandomHexColor();

    document.body.style.backgroundColor = changeColor;

    spanColor.textContent = changeColor;
}