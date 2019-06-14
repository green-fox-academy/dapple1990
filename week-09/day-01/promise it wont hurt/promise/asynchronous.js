'use strict';

const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE')
}).then((success) => {
  console.log(success)
});

console.log('MAIN PROGRAM');