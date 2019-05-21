'use strict';


let sectionElement = document.querySelector('section')
let createDivs = (index) => {
  let newElements = document.createElement('div')
  newElements.textContent = index;
  sectionElement.appendChild(newElements);
}

let createHundred = () => {
  for (let i = 2; i <= 100; i++) {
    createDivs(i);
  }
}

createHundred();


/* 2: Create a function that adds a 'not-prime' class to a div 
if it's not a prime and 'prime' if it is */

const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }

  return num > 1;

}
const currentDivs = document.querySelectorAll('div');
const addNumbers = (value) => {
  if (isPrime(value.textContent) === true) {
    value.classList.add('prime')
  } else {
    value.classList.add('not-prime');
  }
}

// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored


let currentIndex = 0;
const timer = () => {
  if (currentIndex < currentDivs.length) {
    addNumbers(currentDivs[currentIndex])
    currentIndex++;
  } else {
    clearInterval(interval);
  }
}
let interval = setInterval(timer, 100);