'use strict';

function factorio(num: number) {
    let result: number = 1;
    for(let i: number = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

let factorialTest: number = factorio(4);
console.log(factorialTest);