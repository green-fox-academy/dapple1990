// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


'use strict';

function divide(a: number) {
    if( a === 0) {
        return'fail';
    } return 10 / a;
}
console.log(divide((5)));
