'use strict';

const fruits = ['apple', 'pear', 'melon', 'grapes'];

const printing = () => {
    console.log(fruits[0]);
    setTimeout(() => {console.log(fruits[1]); } , 1000)
    setTimeout(() => {console.log(fruits[2]); } , 3000)
    setTimeout(() => {console.log(fruits[3]); } , 5000)
  
}

printing();

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds