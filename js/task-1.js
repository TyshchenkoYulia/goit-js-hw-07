'use strict';


const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log('Numbers of categories: ' + categoriesItems.length);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('li');

    console.log('Categori: ' + title.textContent);
    console.log('Elements: ' + list.length);
})






