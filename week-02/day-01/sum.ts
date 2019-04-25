'use strict';

function summ(target: number) {
    let result: number = 0;
    for(let i: number = 0; i <= target; i++) {
        result = result + i;
    }
    return result;
} 

console.log(summ(7));