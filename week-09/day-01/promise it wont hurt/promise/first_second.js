'use strict';

first().then((secretValue) => {
  return second(secretValue).then((message) => {
    console.log(message)
  })
});

