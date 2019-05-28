'use strict';

let candiesClass = document.querySelector('.create-candies');
let candies = document.querySelector('.candies');
let lollypops = document.querySelector('.buy-lollypops')
let setCurrentCandies = document.querySelector('.speed')

let numberOfCandies = 0;

candiesClass.onclick = () => {
  numberOfCandies++;
  setCurrentCandies.textContent  = numberOfCandies;
  console.log(numberOfCandies);
}