// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

const fs = require('fs');
let read : string = '';

function readMyFile(path) {
    return fs.readFileSync(path, 'UTF-8');
}

try {
read = readMyFile('my-file.txt')
} catch (e) {
    console.log(e.message);
}

console.log(read);