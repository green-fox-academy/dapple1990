'use strict';

function attachTitle(result) {
  let value = 'DR. ';
  return value + result
};

const promise = new Promise((resolve, reject ) => {
  resolve('MANHATTAN')
}).then(attachTitle => {
  return attachTitle(first)
}).then((second) =>{
  console.log(second)
});