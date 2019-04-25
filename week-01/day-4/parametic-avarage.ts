'use strict';

let myNumber: number = 7;
let numberSum: number = 0;
let numberAverage: number = 0;

for(let i: number = 1; i <= myNumber; i++) {
    numberSum = numberSum + i;
}
console.log(numberSum);

numberAverage = numberSum / myNumber;

console.log(numberAverage);