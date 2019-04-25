// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


'use strict';


function divideByTen(x: number) : number {
    try {
        if (x === 0) {
            throw 'fail';
        }
        return 10 / x;
    }
    catch (exception) {
        console.log(exception);
    }
}

console.log(divideByTen(0));
