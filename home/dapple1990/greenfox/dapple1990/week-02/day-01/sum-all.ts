// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the consoles

'use strict';

let ai : number[] = [3, 4, 5, 6, 7];
let result : number = 0;

for(let i : number = 0; i < ai.length; i++) {
    result = result + ai[i];
}
console.log(result);
