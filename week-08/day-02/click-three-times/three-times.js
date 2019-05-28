'use strict';

const button = document.querySelector('.three_times');
let appearedText = document.querySelector('p');
let numberOfClicks = 0;

button.addEventListener('click', text => {
  numberOfClicks++
  if(numberOfClicks === 3) {
    appearedText.innerHTML = '5 seconds elapsed and clicked 3 times';
  }
});

