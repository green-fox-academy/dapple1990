'use strict';

var milliseconds = new Date()
const button = document.querySelector('button');

button.onclick = () => {
  console.log(milliseconds);
};

button.addEventListener('click', button);