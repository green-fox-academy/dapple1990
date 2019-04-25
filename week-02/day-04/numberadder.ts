'use strict';

function adder(n: number) {
    if (n <= 1) {
        return 1;
      }
      else {
        return n + adder(n - 1);
      }
    }
    
   console.log(adder(5));
   
   
   
   
   
   
    /*let result = 1;

    for (let i: number = 0; i <= n; i++) {
        result = result + i;
    } return result;

} 
console.log(adder(8));*/