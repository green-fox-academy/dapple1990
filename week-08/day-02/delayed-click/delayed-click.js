'use strict';

let button = document.querySelector('.button');
let maintag = document.querySelector('body');
let addText = document.createElement('p');
maintag.appendChild(addText);

const printing = () => {
  setTimeout(() => { addText.innerHTML = '2 seconds ellapsed'; }, 2000);
}

button.addEventListener('click', printing);


 



