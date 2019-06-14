'use strict';

function onRejected(err) {
  console.log(err.message)
};

const promise = new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE!'))
}).then((success) => {
console.log(success)
}, (fail) => {
  onReject(fail)
});