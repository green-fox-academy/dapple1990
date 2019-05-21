'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    output.push(callback(element))
  });

  return output;
}

const addOne = (number) => {
  return number + 1;
}


console.log(mapWith([1, 2, 3], addOne));



const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (value) => {
  let result = '';
  for (let i = 0; i < value.length; i++) {
    if (i % 2 === 0) {
      result += value[i];
    }
  }
  return result;
} 


console.log(mapWith(words, removeSecondLetter));

