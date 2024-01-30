'use strict';

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}


function createBoxes(amount) {
   
    destroyBoxes();

    let widthBox = 30;
    let heightBox = 30;

    for (let i = 0; i < amount; i ++) {
        
        widthBox += 10;
        heightBox += 10;
        
        const newBox = `<div style="width:${widthBox}px; 
                                    height:${heightBox}px;
                                    background-color:${getRandomHexColor()};">
                        </div>`;

        boxes.insertAdjacentHTML("beforeEnd", newBox);
    }

  input.value = "";

}

function onValidateInput() {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
};

createButton.addEventListener("click", onValidateInput);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function onDestroyButton(event) {
  destroyBoxes();
}

destroyButton.addEventListener("click", onDestroyButton);



