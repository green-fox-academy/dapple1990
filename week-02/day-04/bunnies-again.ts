'use strict';

//We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) 
//we'll say have 3 ears, because they each have a raised foot. 
//Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnies(ears: number): number {
  if (ears < 1) {
    return 0;
  }
  if (ears % 2 === 0) {
    return 3 + bunnies(ears - 1);
  }
  else {
    return 2 + bunnies(ears - 1);
  }

} console.log(bunnies(6));
