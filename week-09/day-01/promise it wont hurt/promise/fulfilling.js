'use strict';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED!')
  }, 300)
}).then((message) => {
  console.log(message)
});