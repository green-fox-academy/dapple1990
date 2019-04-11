'use strict';

//Find the greatest common divisor of two numbers using recursion.

function greatest(a: number, b: number) {
    if (b === 0) {
        return a;
    }
    else {
        return greatest(b, a % b);

    };

} console.log(greatest(12,8))