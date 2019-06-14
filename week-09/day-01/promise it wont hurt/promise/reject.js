'use strict';

function onReject(error) {
  console.log(error.message)
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
}).then((message) => {
    console.log(message)
}, (error) => {
  onReject(error)
});