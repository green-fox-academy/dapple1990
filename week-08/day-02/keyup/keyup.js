'use strict';
const result = document.querySelector('h1');

document.addEventListener('keyup', (event) => {
  result.innerHTML = `Last pressed key code is: ${event.keyCode}`

});
  
  
  




